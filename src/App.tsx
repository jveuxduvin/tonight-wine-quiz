import { useMemo, useState } from "react";
import {
  Beer,
  Cherry,
  Flame,
  GlassWater,
  Grape,
  Heart,
  HelpCircle,
  RefreshCw,
  Shuffle,
  Sparkles,
  Sun,
  Wine,
} from "lucide-react";
import { QuizCard, type QuizOption } from "./components/QuizCard";
import { ResultCard } from "./components/ResultCard";
import { wines } from "./data/wines";
import type {
  BodyPreference,
  CrowdMode,
  DrinkChoice,
  DrynessPreference,
  QuizAnswers,
  Vibe,
} from "./types";
import { getTopWineRecommendations } from "./utils/scoring";

const questions = [
  {
    key: "category",
    eyebrow: "Round 1",
    question: "What are we drinking tonight?",
    options: [
      { label: "White", value: "white", icon: <GlassWater size={20} /> },
      { label: "Rosé", value: "rose", icon: <Sun size={20} /> },
      { label: "Red", value: "red", icon: <Wine size={20} /> },
      { label: "Sweet / dessert", value: "dessert", icon: <Cherry size={20} /> },
      { label: "Surprise me", value: "surprise", icon: <Shuffle size={20} /> },
    ] satisfies QuizOption<DrinkChoice>[],
  },
  {
    key: "vibe",
    eyebrow: "Round 2",
    question: "What vibe do you want?",
    options: [
      { label: "Crisp & refreshing", value: "crisp", icon: <Sparkles size={20} /> },
      { label: "Fruity & easy", value: "fruity", icon: <Cherry size={20} /> },
      { label: "Smooth & cozy", value: "cozy", icon: <Heart size={20} /> },
      { label: "Bold & intense", value: "bold", icon: <Flame size={20} /> },
      { label: "Weird / nerdy / interesting", value: "weird", icon: <HelpCircle size={20} /> },
    ] satisfies QuizOption<Vibe>[],
  },
  {
    key: "dryness",
    eyebrow: "Round 3",
    question: "Dryness preference?",
    options: [
      { label: "Dry", value: "dry", icon: <Sparkles size={20} /> },
      { label: "Off-dry", value: "offDry", icon: <Sun size={20} /> },
      { label: "Sweet", value: "sweet", icon: <Cherry size={20} /> },
      { label: "No preference", value: "none", icon: <Shuffle size={20} /> },
    ] satisfies QuizOption<DrynessPreference>[],
  },
  {
    key: "body",
    eyebrow: "Round 4",
    question: "Body preference?",
    options: [
      { label: "Light", value: "light", icon: <GlassWater size={20} /> },
      { label: "Medium", value: "medium", icon: <Beer size={20} /> },
      { label: "Full", value: "full", icon: <Grape size={20} /> },
      { label: "No preference", value: "none", icon: <Shuffle size={20} /> },
    ] satisfies QuizOption<BodyPreference>[],
  },
  {
    key: "crowd",
    eyebrow: "Final pour",
    question: "Crowd mode?",
    options: [
      { label: "Safe crowd-pleaser", value: "safe", icon: <Heart size={20} /> },
      { label: "Balanced", value: "balanced", icon: <Wine size={20} /> },
      { label: "Adventurous", value: "adventurous", icon: <Sparkles size={20} /> },
    ] satisfies QuizOption<CrowdMode>[],
  },
] as const;

const defaultSurpriseAnswers: Required<QuizAnswers> = {
  category: "surprise",
  vibe: "weird",
  dryness: "none",
  body: "none",
  crowd: "adventurous",
};

function isComplete(answers: QuizAnswers): answers is Required<QuizAnswers> {
  return Boolean(
    answers.category && answers.vibe && answers.dryness && answers.body && answers.crowd,
  );
}

function App() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [showResults, setShowResults] = useState(false);

  const activeQuestion = questions[step];
  const recommendations = useMemo(() => {
    const completed = isComplete(answers) ? answers : defaultSurpriseAnswers;
    return getTopWineRecommendations(wines, completed);
  }, [answers]);

  function updateAnswer(value: string) {
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
      setShowResults(true);
      return;
    }

    setStep((current) => current + 1);
  }

  function goBack() {
    setStep((current) => Math.max(0, current - 1));
  }

  function retakeQuiz() {
    setAnswers({});
    setStep(0);
    setShowResults(false);
    setStarted(true);
  }

  function surpriseMe() {
    setAnswers(defaultSurpriseAnswers);
    setStarted(true);
    setShowResults(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-cream text-ink">
      <div className="doodle doodle-grapes" aria-hidden="true" />
      <div className="doodle doodle-spark" aria-hidden="true" />

      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 py-5 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between gap-3 py-2">
          <div className="flex items-center gap-2 font-sketch text-lg font-black">
            <span className="grid size-10 rotate-[-5deg] place-items-center rounded-full border-2 border-ink bg-rose shadow-sketch">
              <Wine size={22} />
            </span>
            Tonight Wine
          </div>
          <button type="button" onClick={surpriseMe} className="sketch-button bg-white text-sm">
            <Shuffle size={17} />
            Surprise me
          </button>
        </header>

        {!started ? (
          <section className="grid flex-1 place-items-center py-10">
            <div className="w-full max-w-2xl">
              <div className="mb-5 flex justify-center">
                <div className="relative grid size-24 rotate-[-4deg] place-items-center rounded-[2rem] border-2 border-ink bg-butter shadow-sketch">
                  <Grape size={44} />
                  <span className="absolute -right-4 -top-3 rotate-12 rounded-full border-2 border-ink bg-white px-3 py-1 font-sketch text-sm font-black">
                    pop!
                  </span>
                </div>
              </div>
              <div className="sketch-card bg-white/[0.84] p-6 text-center shadow-sketch sm:p-9">
                <p className="font-sketch text-sm font-black uppercase tracking-[0.18em] text-cork">
                  Snack-adjacent, not snack-led
                </p>
                <h1 className="mt-3 font-sketch text-5xl font-black leading-[0.95] text-ink sm:text-6xl">
                  What are we drinking tonight?
                </h1>
                <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-ink/[0.78] sm:text-lg">
                  Answer five quick wine mood questions and get three bottle styles,
                  tasting notes, and chips that make sense after the wine is chosen.
                </p>
                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setStarted(true)}
                    className="sketch-button justify-center bg-grape px-6 py-4 text-white"
                  >
                    <Sparkles size={19} />
                    Start quiz
                  </button>
                  <button
                    type="button"
                    onClick={surpriseMe}
                    className="sketch-button justify-center bg-white px-6 py-4"
                  >
                    <Shuffle size={19} />
                    Surprise me
                  </button>
                </div>
              </div>
            </div>
          </section>
        ) : showResults ? (
          <section className="py-7">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-sketch text-sm font-black uppercase tracking-[0.16em] text-grape">
                  The corkboard has spoken
                </p>
                <h2 className="mt-1 font-sketch text-4xl font-black leading-tight sm:text-5xl">
                  Your top 3 pours
                </h2>
              </div>
              <button type="button" onClick={retakeQuiz} className="sketch-button bg-white">
                <RefreshCw size={18} />
                Retake quiz
              </button>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {recommendations.map((wine, index) => (
                <ResultCard key={wine.id} wine={wine} rank={index + 1} />
              ))}
            </div>
          </section>
        ) : (
          <section className="grid flex-1 place-items-center py-7">
            <div className="w-full max-w-2xl">
              <div className="mb-4 flex items-center gap-2">
                {questions.map((question, index) => (
                  <div
                    className={`h-3 flex-1 rounded-full border-2 border-ink ${
                      index <= step ? "bg-grape" : "bg-white"
                    }`}
                    key={question.key}
                  />
                ))}
              </div>
              <QuizCard
                eyebrow={activeQuestion.eyebrow}
                question={activeQuestion.question}
                options={activeQuestion.options}
                selected={answers[activeQuestion.key]}
                canGoBack={step > 0}
                isLastQuestion={step === questions.length - 1}
                onSelect={updateAnswer}
                onBack={goBack}
                onNext={goNext}
              />
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default App;
