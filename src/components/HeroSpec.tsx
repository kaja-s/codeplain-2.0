"use client";

/*
  Hero product graphic — an interactive mock that introduces what *codeplain is.
  Three tabs tell the story: the .plain spec (source of truth) → the agent
  skill toolkit → the render. Rendered as markup (not an image) so it stays
  crisp and theme-consistent, in the site's navy/blue scheme.
  `normal-case` opts the block out of the site-wide lowercase transform, since
  code casing (App, Task, Vitest, React) is meaningful here.
*/

import { useEffect, useState } from "react";

type TabKind = "spec" | "skills" | "repo";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Render states, verbatim from the codeplain render TUI (render_machine/states.py
// + tui/state_handlers.py): each functional requirement walks through these.
const STAGES = [
  "Initial implementation",
  "Running unit tests",
  "Refactoring code",
  "Running conformance tests",
];
const FRS = [
  "displays the task list",
  "adds a task on Enter",
  "toggles a task done",
];

// The spec, as colored tokens revealed by the typewriter animation.
type Kind = "comment" | "head" | "body";
const SPEC_TOKENS: [string, Kind][] = [
  ["---\n", "comment"],
  ["description: a tiny task manager\n", "comment"],
  ["---\n\n", "comment"],
  ["***definitions***\n", "head"],
  ["- :App: implements a task manager web application.\n", "body"],
  ["- :Task: is a to-do item with a title and a done state.\n\n", "body"],
  ["***implementation reqs***\n", "head"],
  [
    "- :Implementation: should be a single-page React app in TypeScript.\n\n",
    "body",
  ],
  ["***test reqs***\n", "head"],
  [
    "- :ConformanceTests: of :App: should use Vitest and React Testing Library.\n\n",
    "body",
  ],
  ["***functional specs***\n", "head"],
  ['- :App: displays the list of :Task: items under a "Tasks" heading.\n', "body"],
  ["- :App: adds a :Task: when the user types a title and presses Enter.\n", "body"],
  ["- :App: toggles a :Task: between done and not done.", "body"],
];
const TABS: { kind: TabKind; name: string; label: string }[] = [
  { kind: "spec", name: "tasks.plain", label: "The spec" },
  { kind: "skills", name: "skills/", label: "Agent toolkit" },
  { kind: "repo", name: "codeplain render", label: "The repo" },
];

// Verbatim from plain-forge (github.com/Codeplain-ai/plain-forge, forge/skills/).
const SKILLS: [string, string][] = [
  ["forge-plain", "Full interview. One question at a time."],
  ["add-feature", "Add a feature to an existing spec."],
  ["plain-healthcheck", "Validate every module and config."],
  ["debug-specs", "Trace runtime bugs back to the spec."],
  ["run-codeplain", "Babysit the render, fix specs on the fly."],
];

const KIND_CLASS: Record<Kind, string> = {
  comment: "text-[#6E86B5]",
  head: "font-medium text-accent-bright",
  body: "text-[#C9D3E6]",
};

function TabIcon({ kind, active }: { kind: TabKind; active: boolean }) {
  const box = `flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
    active ? "bg-accent-bright" : "bg-white/[0.06]"
  }`;
  const glyph = active ? "text-navy" : "text-accent-bright";

  if (kind === "spec") {
    return (
      <span className={box}>
        <span
          className={`h-3.5 w-3.5 rounded-[4px] ${active ? "bg-navy" : "bg-accent-bright"}`}
        />
      </span>
    );
  }
  return (
    <span className={box}>
      <span className={`font-mono text-sm ${glyph}`}>
        {kind === "skills" ? "✦" : ">_"}
      </span>
    </span>
  );
}

function SpecPanel() {
  return (
    <pre className="font-mono text-[13px] leading-[1.7]">
      {SPEC_TOKENS.map(([text, kind], i) => (
        <span key={i} className={KIND_CLASS[kind]}>
          {text}
        </span>
      ))}
    </pre>
  );
}

function SkillsPanel() {
  return (
    <div>
      <p className="mb-5 max-w-[62ch] text-[13.5px] leading-relaxed text-[#C9D3E6]">
        Markdown skill files plain-forge writes into your agent&apos;s
        directory. Your agent invokes them by description. No slash commands to
        memorize.
      </p>
      <div className="overflow-hidden rounded-xl border border-white/10 divide-y divide-white/10">
        {SKILLS.map(([name, desc]) => (
          <div
            key={name}
            className="flex flex-wrap items-baseline gap-x-4 gap-y-0.5 px-5 py-3.5"
          >
            <span className="w-40 shrink-0 font-mono text-[13px] font-medium text-accent-bright">
              {name}
            </span>
            <span className="text-[13.5px] text-[#C9D3E6]">{desc}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[12px] text-[#6E86B5]">
        + 20 more authoring, validation, and module-management skills.
      </p>
    </div>
  );
}

// Timeline: one tick per render state, then a hold on the completed summary.
const RENDER_STEPS = FRS.length * STAGES.length; // all functionalities rendered
const COMPLETE_HOLD = 5; // ticks to linger on "Render completed" before looping
const RENDER_CYCLE = RENDER_STEPS + COMPLETE_HOLD;

function RepoPanel() {
  // Mimics the codeplain render TUI, looping: the current functionality cycles
  // through Initial implementation → Running unit tests → Refactoring code →
  // Running conformance tests. After all three functionalities render, it shows
  // "Render completed", holds, then starts over.
  const [tick, setTick] = useState(() =>
    prefersReducedMotion() ? RENDER_STEPS : 0,
  );

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = setInterval(() => setTick((t) => t + 1), 700);
    return () => clearInterval(id);
  }, []);

  const pos = tick % RENDER_CYCLE;
  const isComplete = pos >= RENDER_STEPS;
  const frIndex = Math.min(FRS.length - 1, Math.floor(pos / STAGES.length));
  const stateIndex = pos % STAGES.length;

  return (
    <div className="font-mono text-[13px]">
      <div className="leading-[1.9]">
        <div>
          <span className="text-accent-bright">$</span>{" "}
          <span className="text-[#E4EAF7]">codeplain tasks.plain</span>
        </div>
        <div className="text-[#6E86B5]">Render started.</div>

        {isComplete ? (
          <>
            <div className="mt-2.5 font-medium text-accent-bright">
              ✓ Render completed · {FRS.length}/{FRS.length} functionalities
            </div>
            <div className="mt-1 flex flex-col gap-0.5 pl-4 text-[12.5px] leading-[1.7] text-accent-bright">
              {FRS.map((fr) => (
                <div key={fr}>
                  <span className="inline-block w-4">✓</span>:App: {fr}
                </div>
              ))}
            </div>
            <div className="mt-1 text-[#6E86B5]">→ ./build/</div>
          </>
        ) : (
          <>
            <div className="mt-2.5 text-[#C9D3E6]">
              Rendering functionality {frIndex + 1}: :App: {FRS[frIndex]}
            </div>
            <div className="mt-1 flex flex-col gap-0.5 pl-4 text-[12.5px] leading-[1.7]">
              {STAGES.map((s, j) => {
                const isDone = j < stateIndex;
                const isActive = j === stateIndex;
                return (
                  <div
                    key={s}
                    className={
                      isActive
                        ? "text-[#C9D3E6]"
                        : isDone
                          ? "text-accent-bright"
                          : "text-[#46557A]"
                    }
                  >
                    <span className="inline-block w-4">
                      {isDone ? "✓" : isActive ? "▸" : "•"}
                    </span>
                    {s}
                    {isActive && (
                      <span className="motion-safe:animate-pulse"> …</span>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function HeroSpec() {
  const [active, setActive] = useState<TabKind>("spec");

  return (
    <div className="mt-14 w-full max-w-[720px] overflow-hidden rounded-2xl border border-white/10 bg-navy-deep normal-case shadow-[0_24px_60px_-24px_rgba(14,35,80,0.45)]">
      {/* tab bar */}
      <div
        role="tablist"
        aria-label="What *codeplain is"
        className="flex border-b border-white/10"
      >
        {TABS.map((t) => {
          const isActive = active === t.kind;
          return (
            <button
              key={t.kind}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActive(t.kind)}
              className={`relative -mb-px flex min-w-0 flex-1 cursor-pointer items-center gap-2.5 border-r border-b-2 border-r-white/10 px-4 py-3 text-left transition-colors last:border-r-0 ${
                isActive
                  ? "border-b-accent-bright bg-white/[0.06]"
                  : "border-b-transparent bg-black/20 hover:bg-white/[0.03]"
              }`}
            >
              <TabIcon kind={t.kind} active={isActive} />
              <div className="min-w-0 leading-tight">
                <div
                  className={`truncate text-[13px] ${isActive ? "font-medium text-white" : "text-[#8695B5]"}`}
                >
                  {t.name}
                </div>
                <div
                  className={`truncate text-[10px] uppercase tracking-[0.12em] ${isActive ? "text-accent-bright" : "text-[#6A769A]"}`}
                >
                  {t.label}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* panel */}
      <div
        role="tabpanel"
        className="min-h-[320px] overflow-x-auto px-6 py-6 text-left"
      >
        {active === "spec" && <SpecPanel />}
        {active === "skills" && <SkillsPanel />}
        {active === "repo" && <RepoPanel />}
      </div>
    </div>
  );
}
