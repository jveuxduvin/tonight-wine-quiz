import { X } from "lucide-react";
import { useState } from "react";

type HelpItem = {
  label: string;
  description: string;
};

export type HelpContent = {
  title: string;
  body: string;
  items: readonly HelpItem[];
};

type QuizHelpButtonProps = {
  content: HelpContent;
  openLabel: string;
  closeLabel: string;
};

export function QuizHelpButton({
  content,
  openLabel,
  closeLabel,
}: QuizHelpButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = `quiz-help-${content.title.replace(/\W+/g, "-").toLowerCase()}`;

  return (
    <>
      <button
        type="button"
        aria-label={openLabel}
        onClick={() => setIsOpen(true)}
        className="grid size-8 shrink-0 place-items-center rounded-full border border-cork/45 bg-transparent font-body text-base font-medium leading-none text-cork/90 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-cork hover:bg-cork/10 hover:text-cork focus:outline-none focus:ring-2 focus:ring-cork/60"
      >
        <span aria-hidden="true">?</span>
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-[#010714]/94 px-4 py-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <div className="dream-enter max-h-[86vh] w-full max-w-lg overflow-y-auto rounded-[1.35rem] border border-cork/35 bg-[#0d1c31] p-5 text-ivory shadow-sketch sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <h2
                id={titleId}
                className="font-sketch text-3xl font-normal leading-tight text-ivory"
              >
                {content.title}
              </h2>

              <button
                type="button"
                aria-label={closeLabel}
                onClick={() => setIsOpen(false)}
                className="grid size-9 shrink-0 place-items-center rounded-full border border-ivory/25 bg-ivory/[0.04] text-ivory transition hover:border-cork hover:text-cork focus:outline-none focus:ring-2 focus:ring-cork/70"
              >
                <X size={17} aria-hidden="true" />
              </button>
            </div>

            <p className="mt-4 text-sm font-light leading-6 text-ivory/78 sm:text-base sm:leading-7">
              {content.body}
            </p>

            <div className="mt-5 grid gap-3">
              {content.items.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-cork/25 bg-ivory/[0.035] p-4"
                >
                  <p className="font-body text-sm font-semibold text-ivory">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-light leading-6 text-ivory/72">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
