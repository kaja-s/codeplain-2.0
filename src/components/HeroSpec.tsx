"use client";

/*
  Hero product graphic — an interactive mock that introduces what *codeplain is.
  Three tabs tell the story: the .plain spec (source of truth) → the agent
  skill toolkit → the rendered repo. Rendered as markup (not an image) so it
  stays crisp and theme-consistent, in the site's navy/blue scheme.
  `normal-case` opts the block out of the site-wide lowercase transform, since
  code casing (App, Task, Vitest, React) is meaningful here.
*/

import { useEffect, useState } from "react";

type TabKind = "spec" | "skills" | "repo";

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
// animation timeline: 2 header lines, then (header + 4 stages) per FR, then 1 tail.
const RENDER_MAX = 2 + FRS.length * (STAGES.length + 1) + 1;

const TABS: { kind: TabKind; name: string; label: string }[] = [
  { kind: "spec", name: "tasks.plain", label: "The spec" },
  { kind: "skills", name: "skills/", label: "Agent toolkit" },
  { kind: "repo", name: "codeplain render", label: "The repo" },
];

// Verbatim from plain-forge (github.com/Codeplain-ai/plain-forge, forge/skills/):
// a representative slice of the 30 skills, spanning author → validate → render.
const SKILLS: [string, string][] = [
  ["forge-plain", "Interview that writes complete .plain specs from scratch."],
  ["add-feature", "End-to-end feature addition on an existing project."],
  ["add-functional-spec", "Author a single functional spec, the guarded way."],
  ["break-down-func-spec", "Split a too-complex spec into ≤200-line pieces."],
  ["check-plain-env", "Probe the host for every tool the project needs."],
  ["plain-healthcheck", "Verification gate: dry-run every top module."],
  ["debug-specs", "Trace a runtime bug back to the specs; fix only .plain."],
  ["run-codeplain", "Launch and supervise a live render, fixing specs on the fly."],
];

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

const Comment = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#6E86B5]">{children}</span>
);
const Head = ({ children }: { children: React.ReactNode }) => (
  <span className="font-medium text-accent-bright">{children}</span>
);

function SpecPanel() {
  return (
    <pre className="font-mono text-[13px] leading-[1.7] text-[#C9D3E6]">
      <Comment>---</Comment>
      {"\n"}
      <Comment>description: a tiny task manager</Comment>
      {"\n"}
      <Comment>---</Comment>
      {"\n\n"}
      <Head>***definitions***</Head>
      {"\n"}
      {"- :App: implements a task manager web application.\n"}
      {"- :Task: is a to-do item with a title and a done state.\n"}
      {"\n"}
      <Head>***implementation reqs***</Head>
      {"\n"}
      {"- :Implementation: should be a single-page React app in TypeScript.\n"}
      {"\n"}
      <Head>***test reqs***</Head>
      {"\n"}
      {
        "- :ConformanceTests: of :App: should use Vitest and React Testing Library.\n"
      }
      {"\n"}
      <Head>***functional specs***</Head>
      {"\n"}
      {'- :App: displays the list of :Task: items under a "Tasks" heading.\n'}
      {"- :App: adds a :Task: when the user types a title and presses Enter.\n"}
      {"- :App: toggles a :Task: between done and not done.\n"}
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
            <span className="w-52 shrink-0 font-mono text-[13px] font-medium text-accent-bright">
              {name}
            </span>
            <span className="text-[13.5px] text-[#C9D3E6]">{desc}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[12px] text-[#6E86B5]">
        + 22 more authoring, analysis, testing, and render-management skills.
      </p>
    </div>
  );
}

function RepoPanel() {
  // Mimics the codeplain render TUI: each functional requirement walks through
  // Initial implementation → Running unit tests → Refactoring code →
  // Running conformance tests, then the render completes into ./build/.
  const prefersReducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // If reduced motion is requested, start fully rendered (no animation).
  const [step, setStep] = useState(() =>
    prefersReducedMotion() ? RENDER_MAX : 0,
  );

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let s = 0;
    const id = setInterval(() => {
      s += 1;
      setStep(s);
      if (s >= RENDER_MAX) clearInterval(id);
    }, 240);
    return () => clearInterval(id);
  }, []);

  const done = step >= RENDER_MAX;
  const caret = (
    <span className="ml-1 inline-block h-3.5 w-2 -mb-0.5 bg-accent-bright motion-safe:animate-[blink_1.1s_step-end_infinite]" />
  );

  return (
    <div className="font-mono text-[13px]">
      {/* live render log */}
      <div className="leading-[1.9]">
        {step >= 1 && (
          <div>
            <span className="text-accent-bright">$</span>{" "}
            <span className="text-[#E4EAF7]">codeplain tasks.plain</span>
          </div>
        )}
        {step >= 2 && <div className="text-[#6E86B5]">Rendering started ...</div>}

        {FRS.map((fr, i) => {
          const base = 2 + i * (STAGES.length + 1);
          if (step <= base) return null;
          const stagesDone = Math.max(
            0,
            Math.min(STAGES.length, step - base - 1),
          );
          return (
            <div key={fr} className="mt-2.5">
              <div className="text-[#C9D3E6]">
                Rendering functionality {i + 1}: :App: {fr}
              </div>
              <div className="mt-1 flex flex-col gap-0.5 pl-4 text-[12.5px] leading-[1.6]">
                {STAGES.map((s, j) => {
                  const isDone = j < stagesDone;
                  const isActive = j === stagesDone && stagesDone < STAGES.length;
                  return (
                    <div
                      key={s}
                      className={
                        isDone
                          ? "text-accent-bright"
                          : isActive
                            ? "text-[#C9D3E6]"
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
            </div>
          );
        })}

        {done && (
          <>
            <div className="mt-2.5 text-accent-bright">✓ Render completed</div>
            <div className="text-[#6E86B5]">→ ./build/</div>
          </>
        )}
        {!done && caret}
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
              className={`flex min-w-0 flex-1 cursor-pointer items-center gap-2.5 border-r border-white/10 px-4 py-3 text-left transition-colors last:border-r-0 ${
                isActive ? "bg-white/[0.05]" : "hover:bg-white/[0.02]"
              }`}
            >
              <TabIcon kind={t.kind} active={isActive} />
              <div className="min-w-0 leading-tight">
                <div
                  className={`truncate text-[13px] ${isActive ? "text-[#E4EAF7]" : "text-[#AEBBD6]"}`}
                >
                  {t.name}
                </div>
                <div className="truncate text-[10px] uppercase tracking-[0.12em] text-[#7183AB]">
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
