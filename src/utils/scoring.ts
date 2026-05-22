import type {
  BodyPreference,
  CrowdMode,
  DrynessPreference,
  QuizAnswers,
  ScoredWine,
  Wine,
} from "../types";

const sweetnessTargets: Record<Exclude<DrynessPreference, "none">, number> = {
  dry: 1,
  offDry: 3,
  sweet: 5,
};

const bodyTargets: Record<Exclude<BodyPreference, "none">, number> = {
  light: 1,
  medium: 3,
  full: 5,
};

const crowdTargets: Record<CrowdMode, number[]> = {
  safe: [1, 2],
  balanced: [2, 3],
  adventurous: [4, 5],
};

function closenessScore(value: number, target: number): number {
  return Math.max(0, 3 - Math.abs(value - target));
}

function sweetnessPreferenceScore(wine: Wine, dryness: DrynessPreference): number {
  if (dryness === "none") {
    return 0;
  }

  const target = sweetnessTargets[dryness];
  let score = closenessScore(wine.sweetness, target);

  if (dryness === "sweet") {
    if (wine.sweetness >= 4) {
      score += 4;
    } else if (wine.sweetness === 3) {
      score += 2;
    } else {
      score -= 4;
    }
  }

  if (dryness === "dry" && wine.sweetness >= 4) {
    score -= 4;
  }

  if (dryness === "offDry" && wine.sweetness >= 2 && wine.sweetness <= 3) {
    score += 1.5;
  }

  return score;
}

function crowdScore(adventurousness: number, crowd: CrowdMode): number {
  if (crowdTargets[crowd].includes(adventurousness)) {
    return 3;
  }

  const closest = Math.min(
    ...crowdTargets[crowd].map((target) => Math.abs(target - adventurousness)),
  );

  return Math.max(0, 2 - closest);
}

function styleSpecificAdjustment(wine: Wine, answers: Required<QuizAnswers>): number {
  if (wine.id === "sweet-red-blend" && answers.dryness !== "sweet") {
    return -5;
  }

  return 0;
}

export function scoreWine(wine: Wine, answers: Required<QuizAnswers>): ScoredWine {
  let score = 0;

  if (answers.category === "surprise") {
    score += 1;
  } else if (answers.category === wine.category) {
    score += 4;
  }

  if (wine.vibes.includes(answers.vibe)) {
    score += 3;
  }

  score += sweetnessPreferenceScore(wine, answers.dryness);

  if (answers.body !== "none") {
    score += closenessScore(wine.body, bodyTargets[answers.body]);
  }

  score += crowdScore(wine.adventurousness, answers.crowd);

  if (answers.vibe === "crisp" && wine.acidity >= 4 && wine.body <= 3) {
    score += 1.5;
  }

  if (answers.crowd === "safe" && wine.tannin <= 2) {
    score += 1;
  }

  if (answers.vibe === "bold" && (wine.body >= 4 || wine.tannin >= 4)) {
    score += 1;
  }

  if (answers.vibe === "cozy" && wine.body >= 3) {
    score += 0.75;
  }

  score += styleSpecificAdjustment(wine, answers);

  return { ...wine, score };
}

export function getTopWineRecommendations(
  wines: Wine[],
  answers: Required<QuizAnswers>,
  limit = 3,
): ScoredWine[] {
  const eligibleWines =
    answers.category === "surprise"
      ? wines
      : wines.filter((wine) => wine.category === answers.category);

  return eligibleWines
    .map((wine) => scoreWine(wine, answers))
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      const aVibeMatch = a.vibes.includes(answers.vibe) ? 1 : 0;
      const bVibeMatch = b.vibes.includes(answers.vibe) ? 1 : 0;

      if (bVibeMatch !== aVibeMatch) {
        return bVibeMatch - aVibeMatch;
      }

      if (answers.dryness !== "none") {
        const targetSweetness = sweetnessTargets[answers.dryness];
        const aSweetnessDistance = Math.abs(a.sweetness - targetSweetness);
        const bSweetnessDistance = Math.abs(b.sweetness - targetSweetness);

        if (aSweetnessDistance !== bSweetnessDistance) {
          return aSweetnessDistance - bSweetnessDistance;
        }
      }

      if (answers.body !== "none") {
        const targetBody = bodyTargets[answers.body];
        const aBodyDistance = Math.abs(a.body - targetBody);
        const bBodyDistance = Math.abs(b.body - targetBody);

        if (aBodyDistance !== bBodyDistance) {
          return aBodyDistance - bBodyDistance;
        }
      }

      return a.name.localeCompare(b.name);
    })
    .slice(0, limit);
}
