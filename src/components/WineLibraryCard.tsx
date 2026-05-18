import { ExternalLink, Grape, Sparkles } from "lucide-react";
import type { Wine } from "../types";
import { getLcboSearchUrl } from "../utils/lcbo";
import { TraitMeter } from "./TraitMeter";

type WineLibraryCardProps = {
  wine: Wine;
};

export function WineLibraryCard({ wine }: WineLibraryCardProps) {
  const lcboSearchUrl = getLcboSearchUrl(wine.id);

  return (
    <article className="sketch-card p-5 shadow-sketch">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-body text-xs font-normal uppercase tracking-[0.24em] text-cork">
            {wine.category} · {wine.alcohol} alcohol
          </p>
          <h2 className="mt-1 font-sketch text-2xl font-normal leading-tight text-ivory">
            {wine.name}
          </h2>
        </div>
        <a
          aria-label={`Search LCBO for ${wine.name}`}
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
        <TraitMeter label="Sweetness" value={wine.sweetness} />
        <TraitMeter label="Acidity" value={wine.acidity} />
        <TraitMeter label="Body" value={wine.body} />
        <TraitMeter label="Tannin" value={wine.tannin} />
      </div>

      <div className="mt-4 space-y-4">
        <section>
          <h3 className="mini-heading">
            <Grape size={16} /> Flavour notes
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
            <Sparkles size={16} /> Chips & snacks
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
      </div>
    </article>
  );
}
