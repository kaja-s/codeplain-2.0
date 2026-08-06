/*
  Hero visual — before/after split showing the spec as the control point.
  Left: prompt-driven generation, inconsistent, steering lost in chat history.
  Right: spec-driven generation, consistent, steering lives in a reviewable file.
*/

const BEFORE_ITEMS = [
  "one prompt, a different result each time",
  "steering lives in someone's head, or a slack thread",
  "reviewers read code line by line, after it's written",
];

const AFTER_ITEMS = [
  "one spec, the same result every time",
  "steering lives in a file the whole team can read",
  "reviewers read the spec, before a line is written",
];

export default function HeroBeforeAfter() {
  return (
    <div className="relative mt-14 w-full max-w-[820px] overflow-hidden rounded-2xl border border-white/10 bg-navy-deep normal-case shadow-[0_24px_60px_-24px_rgba(14,35,80,0.45)]">
      <div className="grid grid-cols-2 max-[600px]:grid-cols-1">
        <div className="p-7 max-[600px]:pb-4">
          <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.12em] text-[#6E86B5]">
            before · prompt-driven
          </div>
          <ul className="flex flex-col gap-3.5">
            {BEFORE_ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[13.5px] leading-snug text-[#8695B5]"
              >
                <span aria-hidden="true" className="mt-0.5 font-mono text-[#6E86B5]">
                  ?
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-l border-white/10 bg-white/[0.03] p-7 max-[600px]:border-l-0 max-[600px]:border-t max-[600px]:pt-6">
          <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.12em] text-accent-bright">
            after · spec-driven
          </div>
          <ul className="flex flex-col gap-3.5">
            {AFTER_ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[13.5px] leading-snug text-[#C9D3E6]"
              >
                <span aria-hidden="true" className="mt-0.5 text-accent-bright">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 min-[601px]:flex">
        <span className="whitespace-nowrap rounded-full border border-accent-bright/40 bg-navy-deep px-3.5 py-1.5 font-mono text-[11px] text-accent-bright">
          the spec is the control point
        </span>
      </div>
    </div>
  );
}
