export type WineCategory =
  | "white"
  | "rose"
  | "red"
  | "dessert"
  | "sparkling"
  | "orange";

export type Wine = {
  id: string;
  name: string;
  category: WineCategory;
  sweetness: 1 | 2 | 3 | 4 | 5;
  body: 1 | 2 | 3 | 4 | 5;
  acidity: 1 | 2 | 3 | 4 | 5;
  tannin: 0 | 1 | 2 | 3 | 4 | 5;
  alcohol: "low" | "medium" | "high";
  adventurousness: 1 | 2 | 3 | 4 | 5;
  vibes: Vibe[];
  flavourNotes: string[];
  chipPairings: string[];
  whyChipsWork: string;
  expectation: string;
  lcboSearchTerms: string[];
};

export type DrinkChoice = WineCategory | "surprise";

export type Vibe =
  | "crisp"
  | "fruity"
  | "cozy"
  | "bold"
  | "weird";

export type DrynessPreference = "dry" | "offDry" | "sweet" | "none";

export type BodyPreference = "light" | "medium" | "full" | "none";

export type CrowdMode = "safe" | "balanced" | "adventurous";

export type QuizAnswers = {
  category?: DrinkChoice;
  vibe?: Vibe;
  dryness?: DrynessPreference;
  body?: BodyPreference;
  crowd?: CrowdMode;
};

export type ScoredWine = Wine & {
  score: number;
};
