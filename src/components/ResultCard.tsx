import { ExternalLink, Grape, Sparkles, Wine } from "lucide-react";
import type { ScoredWine } from "../types";
import { TraitMeter } from "./TraitMeter";
import { getLcboSearchUrl } from "../utils/lcbo";

type ResultCardProps = {
  wine: ScoredWine;
  rank: number;
};

export function ResultCard({ wine, rank }: ResultCardProps) {
  const lcboSearchUrl = getLcboSearchUrl(wine.id);

  return (
    <article className="sketch-card relative overflow-hidden p-5 shadow-sketch">
      <div className="absolute -right-8 -top-8 size-24 rounded-full border border-cork/50 bg-ivory/[0.04]" />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="font-body text-xs font-normal uppercase tracking-[0.24em] text-cork">
            Pick #{rank}
          </p>
          <h3 className="mt-1 font-sketch text-2xl font-normal leading-tight tracking-[0.01em] text-ivory">
            {wine.name}
          </h3>
        </div>
        <div className="grid size-12 shrink-0 place-items-center rounded-full border border-cork bg-ivory/[0.08] text-cork">
          <Wine size={25} />
        </div>
      </div>

      <p className="relative mt-3 text-sm font-light leading-6 text-ivory/75">{wine.expectation}</p>

      <div className="mt-5 grid gap-3 rounded-[1.1rem] border border-ivory/20 bg-navy/45 p-4">
        <TraitMeter label="Sweetness" value={wine.sweetness} />
        <TraitMeter label="Acidity" value={wine.acidity} />
        <TraitMeter label="Body" value={wine.body} />
        <TraitMeter label="Tannin" value={wine.tannin} />
      </div>

      <div className="mt-5 space-y-4">
        <section>
          <h4 className="mini-heading">
            <Grape size={16} /> Flavour notes
          </h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {wine.flavourNotes.map((note) => (
              <span className="chip" key={note}>
                {note}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h4 className="mini-heading">
            <Sparkles size={16} /> Chips & snacks
          </h4>
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
          <h4 className="mini-heading">
            <ExternalLink size={16} /> LCBO search terms
          </h4>
          <a
            className="mt-2 inline-flex items-center gap-2 rounded-full border border-cork/60 bg-cork/[0.14] px-3 py-2 font-body text-sm font-normal text-ivory transition hover:-translate-y-0.5 hover:bg-cork/[0.22]"
            href={lcboSearchUrl}
            target="_blank"
            rel="noreferrer"
          >
            Search LCBO
            <ExternalLink size={14} />
          </a>
          <div className="mt-2 flex flex-wrap gap-2">
            {wine.lcboSearchTerms.map((term) => (
              <span className="chip bg-ivory/[0.1]" key={term}>
                {term}
              </span>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
