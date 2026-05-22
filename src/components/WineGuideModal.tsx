import { X } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect } from "react";
import type { Wine } from "../types";
import type { WineGuide } from "../data/wineGuides";

type UiCopy = (typeof import("../i18n").ui)[keyof typeof import("../i18n").ui];

type WineGuideModalProps = {
  wine: Wine;
  guide?: WineGuide;
  labels: UiCopy;
  onClose: () => void;
};

export function WineGuideModal({ wine, guide, labels, onClose }: WineGuideModalProps) {
  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-[#010714]/94 px-4 py-6 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wine-guide-title"
      onMouseDown={onClose}
    >
      <article
        className="dream-enter max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-[1.35rem] border border-cork/35 bg-[#0d1c31] p-5 text-ivory shadow-sketch sm:p-6"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-body text-xs font-normal uppercase tracking-[0.22em] text-cork">
              {labels.wineGuide.modalTitle}
            </p>
            <h2
              id="wine-guide-title"
              className="mt-1 font-sketch text-4xl font-normal leading-tight text-ivory"
            >
              {wine.name}
            </h2>
          </div>
          <button
            type="button"
            aria-label={labels.wineGuide.close}
            onClick={onClose}
            className="grid size-9 shrink-0 place-items-center rounded-full border border-ivory/25 bg-ivory/[0.04] text-ivory transition hover:border-cork hover:text-cork focus:outline-none focus:ring-2 focus:ring-cork/70"
          >
            <X size={17} aria-hidden="true" />
          </button>
        </div>

        {guide ? (
          <div className="mt-5 space-y-5">
            <GuideSection title={labels.wineGuide.quickVibe}>
              <p className="text-base font-light leading-7 text-ivory/78">{guide.summary}</p>
            </GuideSection>

            <GuideSection title={labels.wineGuide.whatItIs}>
              <p className="text-sm font-light leading-6 text-ivory/76">{guide.whatItIs}</p>
            </GuideSection>

            <GuideSection title={labels.wineGuide.whereToLook}>
              <p className="text-sm font-light leading-6 text-ivory/76">{guide.whereToLook}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {wine.lcboSearchTerms.map((term) => (
                  <span className="chip bg-ivory/[0.1]" key={term}>
                    {term}
                  </span>
                ))}
              </div>
            </GuideSection>

            <GuideSection title={labels.wineGuide.regionDifferences}>
              <div className="grid gap-3">
                {guide.regions.map((region) => (
                  <div
                    key={region.label}
                    className="rounded-2xl border border-cork/20 bg-ivory/[0.03] p-4"
                  >
                    <h4 className="font-body text-sm font-semibold text-ivory">
                      {region.label}
                    </h4>
                    <p className="mt-1 text-sm font-light leading-6 text-ivory/72">
                      {region.expect}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {region.searchTerms.map((term) => (
                        <span
                          className="rounded-full border border-ivory/18 bg-transparent px-2.5 py-1 font-body text-xs font-light leading-tight text-ivory/68"
                          key={term}
                        >
                          {term}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </GuideSection>

            <GuideSection title={labels.wineGuide.buyingTip}>
              <p className="text-sm font-light leading-6 text-ivory/76">{guide.buyingTip}</p>
            </GuideSection>
          </div>
        ) : (
          <p className="mt-5 text-sm font-light leading-6 text-ivory/76">
            {labels.wineGuide.noGuide}
          </p>
        )}
      </article>
    </div>
  );
}

function GuideSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h3 className="mb-2 font-body text-xs font-medium uppercase tracking-[0.18em] text-cork">
        {title}
      </h3>
      {children}
    </section>
  );
}
