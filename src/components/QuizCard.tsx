import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight, PartyPopper } from "lucide-react";
import { OptionButton } from "./OptionButton";

export type QuizOption<T extends string> = {
  label: string;
  value: T;
  icon?: ReactNode;
};

type QuizCardProps = {
  eyebrow: string;
  question: string;
  options: readonly QuizOption<string>[];
  selected?: string;
  canGoBack: boolean;
  isLastQuestion: boolean;
  onSelect: (value: string) => void;
  onBack: () => void;
  onNext: () => void;
};

export function QuizCard({
  eyebrow,
  question,
  options,
  selected,
  canGoBack,
  isLastQuestion,
  onSelect,
  onBack,
  onNext,
}: QuizCardProps) {
  return (
    <section className="sketch-card bg-white/[0.84] p-5 shadow-sketch sm:p-6">
      <p className="font-sketch text-sm font-black uppercase tracking-[0.16em] text-grape">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-sketch text-3xl font-black leading-tight text-ink sm:text-4xl">
        {question}
      </h2>

      <div className="mt-6 grid gap-3">
        {options.map((option) => (
          <OptionButton
            key={option.value}
            label={option.label}
            value={option.value}
            selected={selected === option.value}
            icon={option.icon}
            onSelect={onSelect}
          />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          disabled={!canGoBack}
          className="sketch-button bg-white disabled:pointer-events-none disabled:opacity-[0.35]"
        >
          <ArrowLeft size={18} />
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!selected}
          className="sketch-button bg-grape text-white disabled:pointer-events-none disabled:opacity-[0.45]"
        >
          {isLastQuestion ? (
            <>
              <PartyPopper size={18} />
              See results
            </>
          ) : (
            <>
              Next
              <ArrowRight size={18} />
            </>
          )}
        </button>
      </div>
    </section>
  );
}
