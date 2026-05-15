import { ExternalLink, Grape, Sparkles, Wine } from "lucide-react";
import type { ScoredWine } from "../types";
import { TraitMeter } from "./TraitMeter";

type ResultCardProps = {
  wine: ScoredWine;
  rank: number;
};

export function ResultCard({ wine, rank }: ResultCardProps) {
  return (
    <article className="sketch-card relative overflow-hidden bg-white/[0.86] p-5 shadow-sketch">
      <div className="absolute -right-8 -top-8 size-24 rounded-full border-2 border-dashed border-rose/70 bg-rose/20" />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="font-sketch text-sm font-black uppercase tracking-[0.16em] text-cork">
            Pick #{rank}
          </p>
          <h3 className="mt-1 font-sketch text-2xl font-black leading-tight text-ink">
            {wine.name}
          </h3>
        </div>
        <div className="grid size-12 shrink-0 rotate-3 place-items-center rounded-full border-2 border-ink bg-butter">
          <Wine size={25} />
        </div>
      </div>

      <p className="relative mt-3 text-sm leading-6 text-ink/80">{wine.expectation}</p>

      <div className="mt-5 grid gap-3 rounded-[1.1rem] border-2 border-dashed border-ink/[0.35] bg-cream/70 p-4">
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
              <span className="chip bg-skywash/[0.45]" key={note}>
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
              <span className="chip bg-butter/60" key={pairing}>
                {pairing}
              </span>
            ))}
          </div>
          <p className="mt-2 text-sm leading-6 text-ink/[0.78]">{wine.whyChipsWork}</p>
        </section>

        <section>
          <h4 className="mini-heading">
            <ExternalLink size={16} /> LCBO search terms
          </h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {wine.lcboSearchTerms.map((term) => (
              <span className="chip bg-white" key={term}>
                {term}
              </span>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
