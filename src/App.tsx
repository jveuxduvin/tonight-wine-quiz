import { useEffect, useMemo, useRef, useState } from "react";
import {
  Beer,
  Cherry,
  Flame,
  GlassWater,
  Grape,
  Heart,
  HelpCircle,
  RefreshCw,
  Search,
  Shuffle,
  Sparkles,
  Sun,
  Wine,
} from "lucide-react";
import { QuizCard, type QuizOption } from "./components/QuizCard";
import { ResultCard } from "./components/ResultCard";
import { WineLibraryCard } from "./components/WineLibraryCard";
import { wines } from "./data/wines";
import { type Language, localizeScoredWines, localizeWines, ui } from "./i18n";
import type {
  BodyPreference,
  CrowdMode,
  DrinkChoice,
  DrynessPreference,
  QuizAnswers,
  ScoredWine,
  Wine as WineData,
  WineCategory,
  Vibe,
} from "./types";
import { getTopWineRecommendations } from "./utils/scoring";

function getQuestions(language: Language) {
  const questionCopy = ui[language].questions;

  return [
    {
    key: "category",
    eyebrow: questionCopy[0].eyebrow,
    question: questionCopy[0].question,
    options: [
      { label: questionCopy[0].options.white, value: "white", icon: <GlassWater size={20} /> },
      { label: questionCopy[0].options.rose, value: "rose", icon: <Sun size={20} /> },
      { label: questionCopy[0].options.sparkling, value: "sparkling", icon: <Sparkles size={20} /> },
      { label: questionCopy[0].options.red, value: "red", icon: <Wine size={20} /> },
      { label: questionCopy[0].options.dessert, value: "dessert", icon: <Cherry size={20} /> },
      { label: questionCopy[0].options.surprise, value: "surprise", icon: <Shuffle size={20} /> },
    ] satisfies QuizOption<DrinkChoice>[],
  },
  {
    key: "vibe",
    eyebrow: questionCopy[1].eyebrow,
    question: questionCopy[1].question,
    options: [
      { label: questionCopy[1].options.crisp, value: "crisp", icon: <Sparkles size={20} /> },
      { label: questionCopy[1].options.fruity, value: "fruity", icon: <Cherry size={20} /> },
      { label: questionCopy[1].options.cozy, value: "cozy", icon: <Heart size={20} /> },
      { label: questionCopy[1].options.bold, value: "bold", icon: <Flame size={20} /> },
      { label: questionCopy[1].options.weird, value: "weird", icon: <HelpCircle size={20} /> },
    ] satisfies QuizOption<Vibe>[],
  },
  {
    key: "dryness",
    eyebrow: questionCopy[2].eyebrow,
    question: questionCopy[2].question,
    options: [
      { label: questionCopy[2].options.dry, value: "dry", icon: <Sparkles size={20} /> },
      { label: questionCopy[2].options.offDry, value: "offDry", icon: <Sun size={20} /> },
      { label: questionCopy[2].options.sweet, value: "sweet", icon: <Cherry size={20} /> },
      { label: questionCopy[2].options.none, value: "none", icon: <Shuffle size={20} /> },
    ] satisfies QuizOption<DrynessPreference>[],
  },
  {
    key: "body",
    eyebrow: questionCopy[3].eyebrow,
    question: questionCopy[3].question,
    options: [
      { label: questionCopy[3].options.light, value: "light", icon: <GlassWater size={20} /> },
      { label: questionCopy[3].options.medium, value: "medium", icon: <Beer size={20} /> },
      { label: questionCopy[3].options.full, value: "full", icon: <Grape size={20} /> },
      { label: questionCopy[3].options.none, value: "none", icon: <Shuffle size={20} /> },
    ] satisfies QuizOption<BodyPreference>[],
  },
  {
    key: "crowd",
    eyebrow: questionCopy[4].eyebrow,
    question: questionCopy[4].question,
    options: [
      { label: questionCopy[4].options.safe, value: "safe", icon: <Heart size={20} /> },
      { label: questionCopy[4].options.balanced, value: "balanced", icon: <Wine size={20} /> },
      { label: questionCopy[4].options.adventurous, value: "adventurous", icon: <Sparkles size={20} /> },
    ] satisfies QuizOption<CrowdMode>[],
  },
  ] as const;
}

const defaultSurpriseAnswers: Required<QuizAnswers> = {
  category: "surprise",
  vibe: "weird",
  dryness: "none",
  body: "none",
  crowd: "adventurous",
};

const POUR_ANIMATION_MS = 2100;

type TraitRangeFilter = "any" | "low" | "medium" | "mediumPlus" | "high";
type AlcoholFilter = "any" | "low" | "medium" | "high";
type CategoryFilter = "any" | WineCategory;

type WineFilters = {
  category: CategoryFilter;
  sweetness: TraitRangeFilter;
  body: TraitRangeFilter;
  tannin: TraitRangeFilter;
  acidity: TraitRangeFilter;
  alcohol: AlcoholFilter;
};

const defaultWineFilters: WineFilters = {
  category: "any",
  sweetness: "any",
  body: "any",
  tannin: "any",
  acidity: "any",
  alcohol: "any",
};

const traitRangeFilterOptions: TraitRangeFilter[] = ["any", "low", "medium", "mediumPlus", "high"];
const alcoholFilterOptions: AlcoholFilter[] = ["any", "low", "medium", "high"];
const categoryFilterOptions: CategoryFilter[] = [
  "any",
  "white",
  "rose",
  "sparkling",
  "red",
  "dessert",
  "orange",
];

function isAllWinesRoute() {
  return (
    window.location.pathname.endsWith("/all-wines") ||
    window.location.search.includes("view=all-wines")
  );
}

function isComplete(answers: QuizAnswers): answers is Required<QuizAnswers> {
  return Boolean(
    answers.category && answers.vibe && answers.dryness && answers.body && answers.crowd,
  );
}

function getTraitRangeFilterLabel(
  value: TraitRangeFilter,
  filters: (typeof ui)[Language]["filters"],
) {
  if (value === "any") {
    return filters.any;
  }

  const rangeLabels = {
    low: filters.ranges.low,
    medium: filters.ranges.medium,
    mediumPlus: filters.ranges.mediumPlus,
    high: filters.ranges.high,
  } satisfies Record<Exclude<TraitRangeFilter, "any">, string>;

  return rangeLabels[value];
}

function matchesTraitRange(value: number, filter: TraitRangeFilter) {
  switch (filter) {
    case "any":
      return true;
    case "low":
      return value <= 1;
    case "medium":
      return value === 2;
    case "mediumPlus":
      return value === 3;
    case "high":
      return value >= 4;
  }
}

function normalizeSearchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function wineMatchesSearch(wine: WineData, searchQuery: string) {
  const normalizedQuery = normalizeSearchText(searchQuery.trim());

  if (!normalizedQuery) {
    return true;
  }

  const searchableText = [
    wine.name,
    wine.category,
    wine.alcohol,
    wine.expectation,
    wine.whyChipsWork,
    wine.whyCheeseWorks,
    ...wine.flavourNotes,
    ...wine.chipPairings,
    ...wine.cheesePairings,
    ...wine.lcboSearchTerms,
  ].join(" ");

  return normalizeSearchText(searchableText).includes(normalizedQuery);
}

function filterWines(allWines: WineData[], filters: WineFilters, searchQuery: string) {
  return allWines.filter((wine) => {
    if (!wineMatchesSearch(wine, searchQuery)) {
      return false;
    }

    if (filters.category !== "any" && wine.category !== filters.category) {
      return false;
    }

    if (filters.alcohol !== "any" && wine.alcohol !== filters.alcohol) {
      return false;
    }

    const numericFilters = [
      ["sweetness", wine.sweetness],
      ["body", wine.body],
      ["tannin", wine.tannin],
      ["acidity", wine.acidity],
    ] as const;

    return numericFilters.every(([key, value]) => {
      return matchesTraitRange(value, filters[key]);
    });
  });
}

type FilterSelectProps<T extends string> = {
  label: string;
  value: T;
  options: readonly T[];
  getLabel: (value: T) => string;
  onChange: (value: T) => void;
};

function FilterSelect<T extends string>({
  label,
  value,
  options,
  getLabel,
  onChange,
}: FilterSelectProps<T>) {
  return (
    <label className="grid gap-2">
      <span className="font-body text-xs font-normal uppercase tracking-[0.16em] text-cork">
        {label}
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value as T)}
        className="min-h-11 rounded-2xl border border-ivory/22 bg-[#0d1c31] px-3 py-2 font-body text-sm font-light text-ivory outline-none transition hover:border-cork/70 focus:border-cork focus:ring-2 focus:ring-cork/30"
      >
        {options.map((option) => (
          <option key={option} value={option} className="bg-[#0d1c31] text-ivory">
            {getLabel(option)}
          </option>
        ))}
      </select>
    </label>
  );
}

function PourAnimation({ copy }: { copy: (typeof ui)[Language] }) {
  return (
    <section className="dream-enter grid flex-1 place-items-center py-10" aria-live="polite">
      <div className="pour-card sketch-card w-full max-w-md px-6 py-9 text-center shadow-sketch">
        <div className="wine-loader" aria-hidden="true">
          <div className="loader-bottle">
            <div className="loader-bottle-neck" />
            <div className="loader-bottle-body" />
          </div>

          <div className="loader-pour" />

          <div className="loader-glass">
            <div className="loader-wine" />
            <div className="loader-shine" />
          </div>

          <div className="loader-stem" />
          <div className="loader-base" />
        </div>
        <p className="mt-7 font-body text-xs font-medium uppercase tracking-[0.24em] text-cork">
          {copy.oneMoment}
        </p>
        <h2 className="mt-2 font-sketch text-3xl font-normal text-ivory">
          {copy.pouring}
        </h2>
      </div>
    </section>
  );
}

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const storedLanguage = window.localStorage.getItem("tonight-wine-language");
    return storedLanguage === "fr" ? "fr" : "en";
  });
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [showResults, setShowResults] = useState(false);
  const [isPouring, setIsPouring] = useState(false);
  const [surpriseResults, setSurpriseResults] = useState<ScoredWine[] | null>(null);
  const [wineFilters, setWineFilters] = useState<WineFilters>(defaultWineFilters);
  const [wineSearch, setWineSearch] = useState("");
  const pourTimer = useRef<ReturnType<typeof window.setTimeout> | null>(null);

  const copy = ui[language];
  const questions = useMemo(() => getQuestions(language), [language]);
  const activeQuestion = questions[step];
  const recommendations = useMemo(() => {
    if (surpriseResults) {
      return surpriseResults;
    }

    const completed = isComplete(answers) ? answers : defaultSurpriseAnswers;
    return getTopWineRecommendations(wines, completed);
  }, [answers, surpriseResults]);
  const displayedRecommendations = useMemo(
    () => localizeScoredWines(recommendations, language),
    [language, recommendations],
  );
  const displayedWines = useMemo(() => localizeWines(wines, language), [language]);
  const filteredWines = useMemo(
    () => filterWines(displayedWines, wineFilters, wineSearch),
    [displayedWines, wineFilters, wineSearch],
  );

  useEffect(() => {
    return () => {
      if (pourTimer.current) {
        window.clearTimeout(pourTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    window.localStorage.setItem("tonight-wine-language", language);
  }, [language]);

  function clearPourTimer() {
    if (pourTimer.current) {
      window.clearTimeout(pourTimer.current);
      pourTimer.current = null;
    }
  }

  function updateAnswer(value: string) {
    setSurpriseResults(null);
    setAnswers((current) => {
      switch (activeQuestion.key) {
        case "category":
          return { ...current, category: value as DrinkChoice };
        case "vibe":
          return { ...current, vibe: value as Vibe };
        case "dryness":
          return { ...current, dryness: value as DrynessPreference };
        case "body":
          return { ...current, body: value as BodyPreference };
        case "crowd":
          return { ...current, crowd: value as CrowdMode };
        default:
          return current;
      }
    });
  }

  function goNext() {
    if (step === questions.length - 1) {
      clearPourTimer();
      setIsPouring(true);
      pourTimer.current = window.setTimeout(() => {
        setIsPouring(false);
        setShowResults(true);
        pourTimer.current = null;
      }, POUR_ANIMATION_MS);
      return;
    }

    setStep((current) => current + 1);
  }

  function goBack() {
    setStep((current) => Math.max(0, current - 1));
  }

  function retakeQuiz() {
    clearPourTimer();
    setAnswers({});
    setStep(0);
    setShowResults(false);
    setIsPouring(false);
    setSurpriseResults(null);
    setStarted(true);
  }

  function goHome() {
    clearPourTimer();
    setAnswers({});
    setStep(0);
    setShowResults(false);
    setIsPouring(false);
    setSurpriseResults(null);
    setStarted(false);
  }

  function surpriseMe() {
    clearPourTimer();
    const shuffled = [...wines].sort(() => Math.random() - 0.5);
    setSurpriseResults(
      shuffled.slice(0, 3).map((wine, index) => ({
        ...wine,
        score: 3 - index,
      })),
    );
    setAnswers(defaultSurpriseAnswers);
    setIsPouring(false);
    setStarted(true);
    setShowResults(true);
  }

  function toggleLanguage() {
    setLanguage((current) => (current === "en" ? "fr" : "en"));
  }

  if (isAllWinesRoute()) {
    return (
      <main className="wine-shell min-h-screen overflow-hidden bg-navy text-ivory">
        <div className="doodle doodle-spark" aria-hidden="true" />

        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-5 sm:px-6 lg:px-8">
          <header className="flex items-center justify-between gap-3 py-2">
            <a
              className="flex items-center gap-2 font-sketch text-lg font-normal tracking-[0.08em] text-ivory"
              href="/tonight-wine-quiz/"
            >
              <span className="grid size-10 place-items-center rounded-full border border-cork bg-ivory/[0.06] text-cork shadow-soft">
                <Wine size={22} />
              </span>
              {copy.brand}
            </a>
            <button
              type="button"
              onClick={toggleLanguage}
              className="language-toggle"
              aria-label={language === "en" ? "Passer en français" : "Switch to English"}
            >
              {language === "en" ? "FR" : "EN"}
            </button>
          </header>

          <section className="py-8">
            <div className="mb-7">
              <p className="font-body text-sm font-medium uppercase tracking-[0.22em] text-cork">
                {copy.fullCellar}
              </p>
              <h1 className="mt-1 font-sketch text-4xl font-normal leading-tight tracking-[0.01em] text-ivory sm:text-5xl">
                {copy.allWines}
              </h1>
              <p className="mt-3 max-w-2xl text-sm font-light leading-6 text-ivory/72 sm:text-base">
                {copy.allWinesBody}
              </p>
            </div>

            <section className="mb-7 sketch-card p-4 shadow-sketch sm:p-5">
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-sketch text-2xl font-normal text-ivory">
                    {copy.filters.title}
                  </h2>
                  <p className="mt-1 text-sm font-light text-ivory/68">
                    {copy.filters.showing} {filteredWines.length} {copy.filters.of}{" "}
                    {displayedWines.length} {copy.filters.wines}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setWineFilters(defaultWineFilters);
                    setWineSearch("");
                  }}
                  className="sketch-button justify-center bg-transparent text-ivory"
                >
                  {copy.filters.clear}
                </button>
              </div>

              <label className="mb-4 grid gap-2">
                <span className="font-body text-xs font-normal uppercase tracking-[0.16em] text-cork">
                  {copy.filters.search}
                </span>
                <span className="relative block">
                  <Search
                    aria-hidden="true"
                    className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-cork"
                  />
                  <input
                    type="search"
                    value={wineSearch}
                    onChange={(event) => setWineSearch(event.target.value)}
                    placeholder={copy.filters.searchPlaceholder}
                    className="min-h-12 w-full rounded-2xl border border-ivory/22 bg-[#0d1c31] py-2 pl-11 pr-4 font-body text-sm font-light text-ivory outline-none transition placeholder:text-ivory/42 hover:border-cork/70 focus:border-cork focus:ring-2 focus:ring-cork/30"
                  />
                </span>
              </label>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <FilterSelect
                  label={copy.filters.category}
                  value={wineFilters.category}
                  options={categoryFilterOptions}
                  getLabel={(value) =>
                    value === "any" ? copy.filters.any : copy.categories[value]
                  }
                  onChange={(value) =>
                    setWineFilters((current) => ({ ...current, category: value }))
                  }
                />
                <FilterSelect
                  label={copy.filters.sweetness}
                  value={wineFilters.sweetness}
                  options={traitRangeFilterOptions}
                  getLabel={(value) => getTraitRangeFilterLabel(value, copy.filters)}
                  onChange={(value) =>
                    setWineFilters((current) => ({ ...current, sweetness: value }))
                  }
                />
                <FilterSelect
                  label={copy.filters.body}
                  value={wineFilters.body}
                  options={traitRangeFilterOptions}
                  getLabel={(value) => getTraitRangeFilterLabel(value, copy.filters)}
                  onChange={(value) =>
                    setWineFilters((current) => ({ ...current, body: value }))
                  }
                />
                <FilterSelect
                  label={copy.filters.tannin}
                  value={wineFilters.tannin}
                  options={traitRangeFilterOptions}
                  getLabel={(value) => getTraitRangeFilterLabel(value, copy.filters)}
                  onChange={(value) =>
                    setWineFilters((current) => ({ ...current, tannin: value }))
                  }
                />
                <FilterSelect
                  label={copy.filters.acidity}
                  value={wineFilters.acidity}
                  options={traitRangeFilterOptions}
                  getLabel={(value) => getTraitRangeFilterLabel(value, copy.filters)}
                  onChange={(value) =>
                    setWineFilters((current) => ({ ...current, acidity: value }))
                  }
                />
                <FilterSelect
                  label={copy.filters.alcohol}
                  value={wineFilters.alcohol}
                  options={alcoholFilterOptions}
                  getLabel={(value) =>
                    value === "any" ? copy.filters.any : copy.alcoholLevels[value]
                  }
                  onChange={(value) =>
                    setWineFilters((current) => ({ ...current, alcohol: value }))
                  }
                />
              </div>
            </section>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredWines.map((wine) => (
                <WineLibraryCard key={wine.id} wine={wine} labels={copy} />
              ))}
            </div>
            {filteredWines.length === 0 ? (
              <div className="sketch-card mt-5 p-6 text-center font-body text-sm font-light text-ivory/72">
                {copy.filters.noResults}
              </div>
            ) : null}
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="wine-shell min-h-screen overflow-hidden bg-navy text-ivory">
      <div className="doodle doodle-spark" aria-hidden="true" />

      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 py-5 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between gap-3 py-2">
          <button
            type="button"
            onClick={goHome}
            className="flex items-center gap-2 font-sketch text-lg font-normal tracking-[0.08em] text-ivory transition hover:text-cork"
            aria-label="Go to home"
          >
            <span className="grid size-10 place-items-center rounded-full border border-cork bg-ivory/[0.06] text-cork shadow-soft">
              <Wine size={22} />
            </span>
            {copy.brand}
          </button>
          <div className="flex shrink-0 items-center gap-2">
            <button type="button" onClick={surpriseMe} className="header-action text-ivory">
              <Shuffle size={16} />
              <span className="hidden sm:inline">{copy.surpriseMe}</span>
            </button>
            <button
              type="button"
              onClick={toggleLanguage}
              className="language-toggle"
              aria-label={language === "en" ? "Passer en français" : "Switch to English"}
            >
              {language === "en" ? "FR" : "EN"}
            </button>
          </div>
        </header>

        {!started ? (
          <section className="dream-enter dream-stage grid flex-1 place-items-center py-10">
            <div className="w-full max-w-2xl">
              <div className="mb-5 flex justify-center">
                <div className="hero-mark relative grid size-24 place-items-center rounded-t-full border border-cork bg-ivory/[0.06] text-cork shadow-sketch">
                  <Grape size={44} />
                </div>
              </div>
              <div className="sketch-card p-6 text-center shadow-sketch sm:p-9">
                <p className="font-body text-sm font-medium uppercase tracking-[0.24em] text-cork">
                  {copy.chooseBottle}
                </p>
                <h1 className="mt-3 font-sketch text-5xl font-normal leading-[0.98] text-ivory sm:text-6xl">
                  {copy.homeTitle}
                </h1>
                <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-ivory/75 sm:text-lg">
                  {copy.homeBody}
                </p>
                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                  <button
                    type="button"
                    onClick={() => setStarted(true)}
                    className="hero-action hero-action-primary justify-center px-6 py-4"
                  >
                    <Sparkles size={19} />
                    {copy.startQuiz}
                  </button>
                  <button
                    type="button"
                    onClick={surpriseMe}
                    className="hero-action hero-action-secondary justify-center px-6 py-4"
                  >
                    <Shuffle size={19} />
                    {copy.surpriseMe}
                  </button>
                </div>
              </div>
            </div>
          </section>
        ) : isPouring ? (
          <PourAnimation copy={copy} />
        ) : showResults ? (
          <section className="dream-enter dream-stage py-7">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-body text-sm font-medium uppercase tracking-[0.22em] text-cork">
                  {copy.caveRecommends}
                </p>
                <h2 className="mt-1 font-sketch text-4xl font-normal leading-tight tracking-[0.01em] text-ivory sm:text-5xl">
                  {copy.topPours}
                </h2>
              </div>
              <button type="button" onClick={retakeQuiz} className="sketch-button bg-transparent text-ivory">
                <RefreshCw size={18} />
                {copy.retakeQuiz}
              </button>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {displayedRecommendations.map((wine, index) => (
                <div
                  className="dream-enter"
                  key={wine.id}
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <ResultCard wine={wine} rank={index + 1} labels={copy} />
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section className="dream-stage grid flex-1 place-items-center py-7">
            <div className="w-full max-w-2xl">
              <div className="mb-4 flex items-center gap-2">
                {questions.map((question, index) => (
                  <div
                    className={`dream-progress h-2 flex-1 rounded-full border border-ivory/25 ${
                      index <= step ? "is-active bg-cork" : "bg-ivory/[0.08]"
                    }`}
                    key={question.key}
                  />
                ))}
              </div>
              <QuizCard
                key={activeQuestion.key}
                eyebrow={activeQuestion.eyebrow}
                question={activeQuestion.question}
                options={activeQuestion.options}
                selected={answers[activeQuestion.key]}
                canGoBack={step > 0}
                isLastQuestion={step === questions.length - 1}
                onSelect={updateAnswer}
                onBack={goBack}
                onNext={goNext}
                labels={{
                  back: copy.back,
                  next: copy.next,
                  seeResults: copy.seeResults,
                  openHelp: copy.help.openHelp,
                  closeHelp: copy.help.closeHelp,
                }}
                helpContent={copy.help[activeQuestion.key]}
              />
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default App;
