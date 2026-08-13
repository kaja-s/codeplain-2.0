"use client";

/*
  Toggle wrapper around the hero visual. Only one variant exists today
  (Claude Code PRs / *plain spec) — add more entries to VARIANTS to expand
  the toggle later without touching Hero.tsx.
*/

import { useState } from "react";
import HeroVisual from "@/components/HeroVisual";

const VARIANTS = [{ id: "claude-code-prs", label: "Claude Code PRs", Component: HeroVisual }] as const;

type VariantId = (typeof VARIANTS)[number]["id"];

export default function HeroVisualToggle() {
  const [active, setActive] = useState<VariantId>(VARIANTS[0].id);
  const variant = VARIANTS.find((v) => v.id === active) ?? VARIANTS[0];
  const ActiveComponent = variant.Component;

  return (
    <div className="flex w-full flex-col items-center gap-6">
      {VARIANTS.length > 1 && (
        <div className="flex flex-wrap justify-center gap-2 normal-case">
          {VARIANTS.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setActive(v.id)}
              className={`rounded-full border px-3.5 py-1.5 font-mono text-[12px] transition-colors ${
                active === v.id
                  ? "border-black bg-black text-white"
                  : "border-black/15 bg-white text-black/55 hover:border-black/30 hover:text-black/80"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      )}
      <ActiveComponent />
    </div>
  );
}
