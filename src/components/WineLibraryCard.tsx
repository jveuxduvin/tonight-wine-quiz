import { ExternalLink, Grape, Milk, Sparkles } from "lucide-react";
import { useState } from "react";
import type { Wine } from "../types";
import type { WineId } from "../data/wines";
import { wineGuidesByWineId } from "../data/wineGuides";
import { getLcboSearchUrl } from "../utils/lcbo";
import { TraitMeter } from "./TraitMeter";
import { WineGuideModal } from "./WineGuideModal";

type UiCopy = (typeof import("../i18n").ui)[keyof typeof import("../i18n").ui];

type WineLibraryCardProps = {
  wine: Wine;
  labels: UiCopy;
};

export function WineLibraryCard({ wine, labels }: WineLibraryCardProps) {
  const lcboSearchUrl = getLcboSearchUrl(wine.id);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const wineGuide = wineGuidesByWineId[wine.id as WineId];

  return (
    <>
      <article className="sketch-card p-5 shadow-sketch">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-body text-xs font-normal uppercase tracking-[0.24em] text-cork">
              {labels.categories[wine.category]} · {labels.alcoholLevels[wine.alcohol]} {labels.alcohol}
            </p>
            <h2 className="mt-1 font-sketch text-2xl font-normal leading-tight text-ivory">
              {wine.name}
            </h2>
            <button
              type="button"
              onClick={() => setIsGuideOpen(true)}
              className="mt-2 inline-flex items-center gap-2 font-body text-sm font-normal text-cork transition hover:text-ivory focus:outline-none focus:ring-2 focus:ring-cork/60"
            >
              <Grape size={15} />
              {labels.wineGuide.learnCta}
            </button>
          </div>
          <a
            aria-label={`${labels.searchLcbo}: ${wine.name}`}
            className="grid size-10 shrink-0 place-items-center rounded-full border border-cork bg-cork/[0.14] text-ivory transition hover:-translate-y-0.5 hover:bg-cork/[0.22]"
            href={lcboSearchUrl}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink size={18} />
          </a>
        </div>

        <p className="mt-3 text-sm font-light leading-6 text-ivory/75">{wine.expectation}</p>

        <div className="mt-4 grid gap-3 rounded-[1.1rem] border border-ivory/20 bg-navy/45 p-4">
          <TraitMeter label={labels.traits.sweetness} value={wine.sweetness} />
          <TraitMeter label={labels.traits.acidity} value={wine.acidity} />
          <TraitMeter label={labels.traits.body} value={wine.body} />
          <TraitMeter label={labels.traits.tannin} value={wine.tannin} />
        </div>

        <div className="mt-4 space-y-4">
          <section>
            <h3 className="mini-heading">
              <Grape size={16} /> {labels.flavourNotes}
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {wine.flavourNotes.map((note) => (
                <span className="chip" key={note}>
                  {note}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h3 className="mini-heading">
              <Sparkles size={16} /> {labels.chips}
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {wine.chipPairings.map((pairing) => (
                <span className="chip border-cork/40 bg-cork/[0.13]" key={pairing}>
                  {pairing}
                </span>
              ))}
            </div>
            <p className="mt-2 text-sm font-light leading-6 text-ivory/72">{wine.whyChipsWork}</p>
          </section>

          <section>
            <h3 className="mini-heading">
              <Milk size={16} /> {labels.cheese}
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {wine.cheesePairings.map((pairing) => (
                <span className="chip border-ivory/35 bg-ivory/[0.08]" key={pairing}>
                  {pairing}
                </span>
              ))}
            </div>
            <p className="mt-2 text-sm font-light leading-6 text-ivory/72">{wine.whyCheeseWorks}</p>
          </section>
        </div>
      </article>

      {isGuideOpen ? (
        <WineGuideModal
          wine={wine}
          guide={wineGuide}
          labels={labels}
          onClose={() => setIsGuideOpen(false)}
        />
      ) : null}
    </>
  );
}
