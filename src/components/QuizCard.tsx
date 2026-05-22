import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight, PartyPopper } from "lucide-react";
import { OptionButton } from "./OptionButton";
import { QuizHelpButton, type HelpContent } from "./QuizHelpButton";

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
  labels: {
    back: string;
    next: string;
    seeResults: string;
    openHelp: string;
    closeHelp: string;
  };
  helpContent: HelpContent;
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
  labels,
  helpContent,
}: QuizCardProps) {
  return (
    <section className="dream-enter sketch-card p-5 shadow-sketch sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-body text-sm font-medium uppercase tracking-[0.24em] text-cork">
            {eyebrow}
          </p>
          <h2 className="mt-2 font-sketch text-3xl font-normal leading-tight text-ivory sm:text-4xl">
            {question}
          </h2>
        </div>

        <QuizHelpButton
          content={helpContent}
          openLabel={labels.openHelp}
          closeLabel={labels.closeHelp}
        />
      </div>

      <div className="mt-6 grid gap-3">
        {options.map((option, index) => (
          <div
            className="dream-option"
            key={option.value}
            style={{ animationDelay: `${55 + index * 38}ms` }}
          >
            <OptionButton
              label={option.label}
              value={option.value}
              selected={selected === option.value}
              icon={option.icon}
              onSelect={onSelect}
            />
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          disabled={!canGoBack}
          className="sketch-button bg-transparent text-ivory disabled:pointer-events-none disabled:opacity-[0.35]"
        >
          <ArrowLeft size={18} />
          {labels.back}
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!selected}
          className="sketch-button bg-ivory text-navy disabled:pointer-events-none disabled:opacity-[0.45]"
        >
          {isLastQuestion ? (
            <>
              <PartyPopper size={18} />
              {labels.seeResults}
            </>
          ) : (
            <>
              {labels.next}
              <ArrowRight size={18} />
            </>
          )}
        </button>
      </div>
    </section>
  );
}
