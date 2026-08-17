"use client";

/*
  Hero visual — 2nd toggle variant: shows *how* the spec drives generation.
  Left: a loop between :Spec: and *codeplain (generating → validating →
  retrying on failure). Right: a simplified checklist that fills in as the
  loop completes passes. Once every check is green, the left swaps to one
  big checkmark, holds, then the whole thing resets and loops forever —
  same perpetual-motion pattern as the PR-list variant (HeroVisual.tsx).
*/

import { ReactNode, useEffect, useRef, useState } from "react";

type Status = "pending" | "fail" | "pass";
type Phase = "generating" | "validating" | "pass" | "retry" | "done";
type Tone = "neutral" | "ok" | "error";

const CHECKLIST: { text: string; attempts: ("fail" | "pass")[] }[] = [
  { text: ":App: should create :PaymentIntent: with amount and currency.", attempts: ["pass"] },
  { text: ":App: should confirm :PaymentIntent: before charging.", attempts: ["pass"] },
  {
    text: ":Webhook: should verify Stripe signature on every event.",
    attempts: ["fail", "pass"],
  },
  { text: ":Webhook: should handle payment_intent.succeeded.", attempts: ["pass"] },
];

const PHASE_MS = 900;
const VALIDATE_MS = 600;
const RESULT_HOLD_MS = 750;
const DONE_HOLD_MS = 2200;

type Step = { phase: Phase; statuses: Status[] };

function buildTimeline(): Step[] {
  const steps: Step[] = [];
  const statuses: Status[] = CHECKLIST.map(() => "pending");

  CHECKLIST.forEach((item, itemIndex) => {
    item.attempts.forEach((outcome) => {
      steps.push({ phase: "generating", statuses: [...statuses] });
      steps.push({ phase: "validating", statuses: [...statuses] });
      if (outcome === "pass") {
        statuses[itemIndex] = "pass";
        steps.push({ phase: "pass", statuses: [...statuses] });
      } else {
        const failSnapshot = statuses.map((s, i) => (i === itemIndex ? "fail" : s)) as Status[];
        steps.push({ phase: "retry", statuses: failSnapshot });
      }
    });
  });

  steps.push({ phase: "done", statuses: [...statuses] });
  return steps;
}

const TIMELINE = buildTimeline();

function stepDuration(phase: Phase): number {
  switch (phase) {
    case "generating":
      return PHASE_MS;
    case "validating":
      return VALIDATE_MS;
    case "pass":
    case "retry":
      return RESULT_HOLD_MS;
    case "done":
      return DONE_HOLD_MS;
  }
}

function useGenerationLoop() {
  const [stepIndex, setStepIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    function scheduleNext(idx: number) {
      timeoutRef.current = setTimeout(() => {
        const next = (idx + 1) % TIMELINE.length;
        setStepIndex(next);
        scheduleNext(next);
      }, stepDuration(TIMELINE[idx].phase));
    }
    scheduleNext(0);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return TIMELINE[stepIndex];
}

function IconSpec({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`stroke-2 ${className}`}
    >
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M9 10h6M9 14h6M9 18h3" />
    </svg>
  );
}

function IconCodeplain({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      aria-hidden="true"
      className={`stroke-2 ${className}`}
    >
      <path d="M12 3v18M4.5 7.5l15 9M19.5 7.5l-15 9" />
    </svg>
  );
}

function IconCheck({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="10"
      height="10"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`stroke-3 ${className}`}
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function IconX({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="9"
      height="9"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      aria-hidden="true"
      className={`stroke-3 ${className}`}
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

const TONE_CLASSES: Record<Tone, string> = {
  neutral: "bg-black/10 text-black/55",
  ok: "bg-green-600 text-white",
  error: "bg-red-600 text-white",
};

function StatusPill({ label, tone }: { label: string; tone: Tone }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3.5 py-1.5 font-mono text-[11px] ${TONE_CLASSES[tone]}`}
    >
      {label}
    </span>
  );
}

const PHASE_LABEL: Record<Phase, string> = {
  generating: "generating…",
  validating: "validating…",
  pass: "check passed",
  retry: "check failed — retrying",
  done: "all checks passed",
};

const PHASE_TONE: Record<Phase, Tone> = {
  generating: "neutral",
  validating: "neutral",
  pass: "ok",
  retry: "error",
  done: "ok",
};

function LoopDiagram({ phase }: { phase: Phase }) {
  const generating = phase === "generating";
  const validating = phase === "validating";
  const specActive = validating;
  const codeplainActive = generating || validating;

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex items-center gap-8">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-full border-2 transition-colors ${
            specActive ? "border-brand-blue text-brand-blue" : "border-black/15 text-black/35"
          }`}
        >
          <IconSpec />
        </div>
        <div className="flex flex-col items-center gap-2 font-mono text-[13px]">
          <span className={generating ? "text-brand-blue" : "text-black/15"}>→</span>
          <span className={validating ? "text-brand-blue" : "text-black/15"}>←</span>
        </div>
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-full border-2 transition-colors ${
            codeplainActive ? "border-brand-blue text-brand-blue" : "border-black/15 text-black/35"
          }`}
        >
          <IconCodeplain />
        </div>
      </div>
      <div className="flex items-center gap-8 font-mono text-[10.5px] text-black/35">
        <span>spec</span>
        <span className="opacity-0">—</span>
        <span>*codeplain</span>
      </div>
    </div>
  );
}

function DoneState() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white">
        <IconCheck className="h-6 w-6" />
      </div>
      <span className="font-mono text-[12px] text-black/60">output ready</span>
    </div>
  );
}

function ChecklistRow({ text, status }: { text: string; status: Status }) {
  return (
    <div className="flex items-start gap-2.5 border-b border-black/5 py-2.5 last:border-b-0">
      <span
        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors ${
          status === "pass"
            ? "border-green-600 bg-green-600 text-white"
            : status === "fail"
              ? "border-red-600 bg-red-600 text-white"
              : "border-black/20"
        }`}
      >
        {status === "pass" && <IconCheck />}
        {status === "fail" && <IconX />}
      </span>
      <span className={`font-mono text-[12px] ${status === "pending" ? "text-black/35" : "text-black/70"}`}>
        {text}
      </span>
    </div>
  );
}

function PanelHeader({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-14 items-center justify-between border-b border-black/10 px-6">{children}</div>
  );
}

export default function HeroVisualLoop() {
  const step = useGenerationLoop();
  const passedCount = step.statuses.filter((s) => s === "pass").length;

  return (
    <div className="normal-case">
      <div className="grid w-full grid-cols-2 overflow-hidden border border-black/10 bg-white shadow-[0_24px_60px_-24px_rgba(20,20,30,0.15)] max-sm:grid-cols-1">
        {/* Left — the generation/validation loop */}
        <div className="flex flex-col">
          <PanelHeader>
            <div className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-5 w-5 bg-brand-blue" />
              <span className="font-mono text-[14px]">
                <span className="text-black/40">codeplain/</span>
                <span className="font-medium text-black/85">render</span>
              </span>
            </div>
            <span className="flex h-4 items-center rounded-full border border-brand-blue bg-brand-blue/10 px-2 font-mono text-[11px] font-semibold text-brand-blue">
              {passedCount}/{CHECKLIST.length} checks
            </span>
          </PanelHeader>
          <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-10">
            {step.phase === "done" ? <DoneState /> : <LoopDiagram phase={step.phase} />}
            <StatusPill label={PHASE_LABEL[step.phase]} tone={PHASE_TONE[step.phase]} />
          </div>
        </div>

        {/* Right — simplified spec checklist */}
        <div className="flex flex-col border-l border-black/10 max-sm:border-l-0 max-sm:border-t">
          <PanelHeader>
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full border border-black/15" />
              <span className="h-2.5 w-2.5 rounded-full border border-black/15" />
              <span className="h-2.5 w-2.5 rounded-full border border-black/15" />
            </div>
            <span className="font-mono text-[12.5px] text-black/40">[stripe-payment.plain]</span>
          </PanelHeader>
          <div className="flex-1 px-6 py-5">
            {CHECKLIST.map((item, i) => (
              <ChecklistRow key={item.text} text={item.text} status={step.statuses[i]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
