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

function crowdScore(adventurousness: number, crowd: CrowdMode): number {
  if (crowdTargets[crowd].includes(adventurousness)) {
    return 3;
  }

  const closest = Math.min(
    ...crowdTargets[crowd].map((target) => Math.abs(target - adventurousness)),
  );

  return Math.max(0, 2 - closest);
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

  if (answers.dryness !== "none") {
    score += closenessScore(wine.sweetness, sweetnessTargets[answers.dryness]);
  }

  if (answers.body !== "none") {
    score += closenessScore(wine.body, bodyTargets[answers.body]);
  }

  score += crowdScore(wine.adventurousness, answers.crowd);

  if (answers.vibe === "crisp" && wine.acidity >= 4) {
    score += 1.5;
  }

  if (answers.crowd === "safe" && wine.tannin <= 1) {
    score += 1;
  }

  if (answers.vibe === "bold" && (wine.body >= 4 || wine.tannin >= 4)) {
    score += 1;
  }

  if (answers.vibe === "cozy" && wine.body >= 3) {
    score += 0.75;
  }

  return { ...wine, score };
}

export function getTopWineRecommendations(
  wines: Wine[],
  answers: Required<QuizAnswers>,
  limit = 3,
): ScoredWine[] {
  return wines
    .map((wine) => scoreWine(wine, answers))
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))
    .slice(0, limit);
}
