"use client";

/*
  Hero visual — 3rd toggle variant, following the Figma "v2" prototype
  (node 146:2627): the spec sits in the middle as the source of truth.
  Left: *codeplain (the renderer, a phoenix mark) generates/validates
  against the spec in a loop. Right: user + agent, who iterate on the
  spec and get pulled in on failure / once a pass completes. The
  functional-specs section of the spec fills in live: two checks already
  pass, the third is mid-retry, the rest are still pending — same
  scripted timeline pattern as HeroVisualLoop.tsx, now visualized as the
  real spec file instead of an abstract checklist.
*/

import { ReactNode, useEffect, useRef, useState } from "react";

type Status = "pending" | "fail" | "pass";
type Phase = "generating" | "validating" | "pass" | "retry" | "done";

const CHECKLIST: { text: string; attempts: ("fail" | "pass")[] }[] = [
  { text: ":App: should create :PaymentIntent: with amount and currency.", attempts: ["pass"] },
  { text: ":App: should confirm :PaymentIntent: before charging.", attempts: ["pass"] },
  {
    text: ":Webhook: should verify :WebhookSignature: on every event.",
    attempts: ["fail", "pass"],
  },
  { text: ":Webhook: should handle payment_intent.succeeded.", attempts: ["pass"] },
  { text: ":Webhook: should handle payment_intent.payment_failed.", attempts: ["pass"] },
];

const PHASE_MS = 900;
const VALIDATE_MS = 600;
const RESULT_HOLD_MS = 800;
const DONE_HOLD_MS = 2400;

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

function IconCheck({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="15"
      height="15"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.3l2.4 2.4L15.8 9" />
    </svg>
  );
}

function IconDashedX({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="15"
      height="15"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="9" strokeDasharray="2.6 3.2" />
      <path d="M9.5 9.5l5 5M14.5 9.5l-5 5" />
    </svg>
  );
}

/*
  Built from the same 4-point sparkle shape used for the Claude Code badge
  elsewhere in these hero visuals (proven to render cleanly), composed 4x
  at different sizes/rotations: a larger star for the body/head, two
  outward-tilted stars for wings, one small star below for the tail —
  reads as a stylized flame-bird without risking a hand-drawn path.
*/
function IconPhoenix({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      width="30"
      height="30"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M24 20l1.8 6.2L32 28l-6.2 1.8L24 36l-1.8-6.2L16 28l6.2-1.8z"
        transform="rotate(-28 14 28)"
        opacity="0.8"
      />
      <path
        d="M24 20l1.8 6.2L32 28l-6.2 1.8L24 36l-1.8-6.2L16 28l6.2-1.8z"
        transform="translate(20 0) rotate(28 34 28)"
        opacity="0.8"
      />
      <path d="M24 4l2.6 8.8L35 16l-8.4 3.2L24 28l-2.6-8.8L13 16l8.4-3.2z" />
      <path
        d="M24 30l1.3 4.4L30 36l-4.7 1.6L24 42l-1.3-4.4L18 36l4.7-1.6z"
        opacity="0.65"
      />
    </svg>
  );
}

function IconUser({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" />
    </svg>
  );
}

function ChecklistLine({ text, status }: { text: string; status: Status }) {
  return (
    <div className="flex items-start gap-2">
      {status === "pass" && <IconCheck className="mt-0.5 shrink-0 text-emerald-600" />}
      {status === "fail" && <IconDashedX className="mt-0.5 shrink-0 text-red-500" />}
      {status === "pending" && <span className="w-[15px] shrink-0 text-center text-black/30">-</span>}
      <span className={status === "pending" ? "text-black/35" : "text-black/75"}>{text}</span>
    </div>
  );
}

function IconNode({
  icon,
  label,
  active,
}: {
  icon: ReactNode;
  label: string;
  active: boolean;
}) {
  return (
    <div className="flex shrink-0 flex-col items-center gap-3">
      <div className="flex h-[100px] w-[100px] items-center justify-center rounded-2xl border border-black/10 bg-white shadow-[0_10px_30px_-14px_rgba(20,20,30,0.15)]">
        <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full border border-black/10">
          {icon}
          <svg
            viewBox="0 0 72 72"
            className={`absolute inset-0 h-full w-full ${active ? "animate-spin" : ""}`}
            style={{ animationDuration: "2.4s" }}
          >
            <circle
              cx="36"
              cy="36"
              r="34"
              fill="none"
              stroke="var(--color-brand-blue)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="38 176"
              opacity={active ? 1 : 0.2}
            />
          </svg>
        </div>
      </div>
      <span className="rounded-full border border-black/10 bg-white px-3 py-1 font-mono text-[11.5px] text-black/60">
        {label}
      </span>
    </div>
  );
}

function Connector({ topActive, bottomActive }: { topActive: boolean; bottomActive: boolean }) {
  return (
    <div className="flex w-10 shrink-0 flex-col justify-center gap-2.5 max-lg:hidden">
      <div className={`h-px w-full ${topActive ? "bg-brand-blue" : "bg-black/15"}`} />
      <div className={`h-px w-full ${bottomActive ? "bg-brand-blue" : "bg-black/15"}`} />
    </div>
  );
}

export default function HeroVisualSourceOfTruth() {
  const step = useGenerationLoop();
  const { phase, statuses } = step;

  const generating = phase === "generating";
  const validating = phase === "validating";
  const userAgentActive = phase === "retry" || phase === "done";

  return (
    <div className="normal-case">
      <div className="flex flex-col items-center gap-6">
        <div className="flex w-full max-w-(--container-content) items-center justify-center max-lg:flex-col max-lg:gap-6">
          <div className="flex items-center max-lg:order-1">
            <IconNode icon={<IconPhoenix className="text-brand-blue" />} label="*codeplain" active />
            <Connector topActive={generating} bottomActive={validating} />
          </div>

          <div className="w-full max-w-[720px] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_24px_60px_-24px_rgba(20,20,30,0.15)] max-lg:order-2">
            <div className="flex h-12 items-center justify-between border-b border-black/10 px-5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full border border-black/15" />
                <span className="h-2.5 w-2.5 rounded-full border border-black/15" />
                <span className="h-2.5 w-2.5 rounded-full border border-black/15" />
              </div>
              <span className="font-mono text-[12px] text-black/40">
                [stripe-payment-integration.plain]
              </span>
            </div>
            <div className="flex flex-col gap-4 px-5 py-5 font-mono text-[11.5px] leading-relaxed">
              <div className="text-black/30">
                ---
                <br />
                description: &apos;Stripe payment integration&apos;
                <br />
                import:
                <br />- stripe-api-client
                <br />- webhook-handler-template
                <br />---
              </div>
              <div>
                <div className="mb-1 font-bold text-black/70">***definitions***</div>
                <div className="flex flex-col gap-0.5 text-black/55">
                  <span>- :PaymentIntent: is a Stripe payment intent.</span>
                  <span>- :Webhook: is the endpoint receiving Stripe events.</span>
                  <span>- :WebhookSignature: is the signature Stripe attaches to every delivery.</span>
                </div>
              </div>
              <div>
                <div className="mb-1 font-bold text-black/70">***implementation reqs***</div>
                <div className="flex flex-col gap-0.5 text-black/55">
                  <span>
                    - The resource [stripe-openapi.json](stripe-openapi.json) describes :API:.
                  </span>
                  <span>- :Implementation: should use the Stripe Python SDK.</span>
                </div>
              </div>
              <div>
                <div className="mb-1 font-bold text-black/70">***test reqs***</div>
                <div className="text-black/55">
                  - :ConformanceTests: should use Stripe test mode keys.
                </div>
              </div>
              <div className="rounded-lg border border-brand-blue/25 bg-brand-blue/[0.03] p-3">
                <div className="mb-1.5 font-bold text-brand-blue">***functional specs***</div>
                <div className="flex flex-col gap-1">
                  {CHECKLIST.map((item, i) => (
                    <ChecklistLine key={item.text} text={item.text} status={statuses[i]} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center max-lg:order-3">
            <Connector topActive={userAgentActive} bottomActive={userAgentActive} />
            <IconNode
              icon={
                <span className="flex h-full w-full items-center justify-center rounded-full bg-brand-blue text-white">
                  <IconUser />
                </span>
              }
              label="user + agent"
              active={userAgentActive}
            />
          </div>
        </div>

        <span className="rounded-full border border-black/10 bg-white px-3.5 py-1.5 font-mono text-[11px] text-black/45">
          ***plain spec
        </span>
      </div>
    </div>
  );
}
