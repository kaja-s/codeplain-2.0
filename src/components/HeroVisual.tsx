"use client";

/*
  Hero visual — matches the provided wireframe: a repo-style PR list on the
  left (GitHub "company/pulls", open count, PR rows with number/age/author +
  line-change counts, each author badged with the agent they used) next to
  the actual *plain spec file on the right (frontmatter + definitions/
  implementation/test/functional-spec sections), which scrambles into place
  line-by-line on load. Two independent panel headers side by side, no
  shared browser chrome.
*/

import { useEffect, useRef, useState } from "react";

function IconGitPullRequest({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M4 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M6 8l0 8" />
      <path d="M11 6h5a2 2 0 0 1 2 2v8" />
      <path d="M14 9l-3 -3l3 -3" />
    </svg>
  );
}

const AGENT_ICON_SRC = {
  "Claude Code": "/agent-icons/claude-code.webp",
  Codex: "/agent-icons/codex.png",
} as const;

function AgentBadge({ agent }: { agent: "Claude Code" | "Codex" }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={AGENT_ICON_SRC[agent]}
      alt={agent}
      title={agent}
      className="h-5 w-5 shrink-0 rounded-full border-2 border-white object-cover"
    />
  );
}

type PR = {
  id: string;
  title: string;
  number: string;
  age: string;
  added: string;
  removed: string;
  author: string;
  avatar: string;
  agent: "Claude Code" | "Codex";
};

const ROW_HEIGHT = 78;

function PRListItem({ pr }: { pr: PR }) {
  return (
    <div
      className="flex flex-col justify-center gap-2 border-b border-black/10 px-6"
      style={{ height: ROW_HEIGHT }}
    >
      <div className="flex items-center gap-2.5">
        <IconGitPullRequest className="shrink-0 text-black/30" />
        <span className="font-mono text-[14px] text-black/80">{pr.title}</span>
      </div>
      <div className="flex flex-wrap items-center gap-3 pl-[22px] font-mono text-[11.5px] text-black/40">
        <span>#{pr.number}</span>
        <span>{pr.age}</span>
        <span className="text-emerald-700/60">+{pr.added}</span>
        <span className="text-red-700/50">−{pr.removed}</span>
        <span className="inline-flex items-center">
          <AgentBadge agent={pr.agent} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={pr.avatar}
            alt=""
            className="-ml-2 h-5 w-5 shrink-0 rounded-full border-2 border-white object-cover"
          />
        </span>
        <span>{pr.author}</span>
      </div>
    </div>
  );
}

const PRIYA_AVATAR =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces&auto=format";
const MARCO_AVATAR =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=faces&auto=format";
const AISHA_AVATAR =
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=faces&auto=format";

const PR_TEMPLATES: Omit<PR, "id" | "number">[] = [
  {
    title: "feat: add Stripe payment integration",
    age: "17 days ago",
    added: "1,158",
    removed: "842",
    author: "priya-k",
    avatar: PRIYA_AVATAR,
    agent: "Claude Code",
  },
  {
    title: "feat(payments): implement Stripe checkout flow",
    age: "17 days ago",
    added: "640",
    removed: "120",
    author: "priya-k",
    avatar: PRIYA_AVATAR,
    agent: "Claude Code",
  },
  {
    title: "Add Stripe billing + webhook handlers",
    age: "20 days ago",
    added: "975",
    removed: "25",
    author: "marco-r",
    avatar: MARCO_AVATAR,
    agent: "Codex",
  },
  {
    title: "fix(payments): handle webhook signature verification",
    age: "22 days ago",
    added: "312",
    removed: "48",
    author: "marco-r",
    avatar: MARCO_AVATAR,
    agent: "Codex",
  },
  {
    title: "feat(billing): add usage-based invoicing",
    age: "25 days ago",
    added: "1,402",
    removed: "96",
    author: "aisha-t",
    avatar: AISHA_AVATAR,
    agent: "Claude Code",
  },
  {
    title: "refactor(api): extract Stripe client wrapper",
    age: "28 days ago",
    added: "588",
    removed: "410",
    author: "aisha-t",
    avatar: AISHA_AVATAR,
    agent: "Claude Code",
  },
];

// PR numbers always climb, even though the same handful of templates repeat —
// real repos don't reuse numbers, so the count should never go backwards.
const BASE_PR_NUMBER = 1762;

function getPR(index: number): PR {
  const template = PR_TEMPLATES[index % PR_TEMPLATES.length];
  return {
    id: `pr-${index}`,
    number: String(BASE_PR_NUMBER + index),
    ...template,
  };
}

const VISIBLE_ROWS = 3;
const VIEWPORT_HEIGHT = ROW_HEIGHT * VISIBLE_ROWS;
const ROTATE_MS = 3200;
const TRANSITION_MS = 600;
const COUNT_TICK_MS = 2600;
const FADE_MASK =
  "linear-gradient(to bottom, black 0%, black 55%, transparent 96%)";

function usePRAccumulation() {
  const [offset, setOffset] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [count, setCount] = useState(90);
  const settleTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  useEffect(() => {
    const rotateId = setInterval(() => {
      setAnimating(true);
      settleTimeout.current = setTimeout(() => {
        setOffset((o) => o + 1);
        setAnimating(false);
      }, TRANSITION_MS);
    }, ROTATE_MS);
    const countId = setInterval(() => {
      setCount((c) => c + 1);
    }, COUNT_TICK_MS);
    return () => {
      clearInterval(rotateId);
      clearInterval(countId);
      if (settleTimeout.current) clearTimeout(settleTimeout.current);
    };
  }, []);

  // one extra row rendered below the fold — it slides up into view each tick
  const items = [0, 1, 2, 3].map((i) => getPR(offset + i));

  // avatar stack grows as new authors are introduced, then plateaus once
  // every template author has appeared at least once
  const introducedCount = Math.min(offset + 4, PR_TEMPLATES.length);
  const seenAvatars: string[] = [];
  const seen = new Set<string>();
  for (let i = 0; i < introducedCount; i++) {
    const a = getPR(i).avatar;
    if (!seen.has(a)) {
      seen.add(a);
      seenAvatars.push(a);
    }
  }

  return { items, animating, avatars: seenAvatars, count };
}

const SCRAMBLE_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789:.-_/*[]()'";
const SCRAMBLE_FRAMES = 26;
const SCRAMBLE_FRAME_MS = 35;

function randomChar() {
  return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
}

function ScrambleText({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let frame = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    setDisplay(text.replace(/\S/g, () => randomChar()));

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        frame++;
        const revealCount = Math.ceil((frame / SCRAMBLE_FRAMES) * text.length);
        setDisplay(
          text
            .split("")
            .map((c, i) => (c === " " || i < revealCount ? c : randomChar()))
            .join(""),
        );
        if (frame >= SCRAMBLE_FRAMES) {
          clearInterval(intervalId);
          setDisplay(text);
        }
      }, SCRAMBLE_FRAME_MS);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, delay]);

  return <span className={className}>{display}</span>;
}

export default function HeroVisual() {
  const STAGGER = 60;
  let lineIndex = 0;
  const nextDelay = () => lineIndex++ * STAGGER;
  const { items, animating, avatars, count } = usePRAccumulation();

  return (
    <div className="normal-case">
      <div className="grid w-full grid-cols-2 overflow-hidden border border-black/10 bg-white shadow-[0_24px_60px_-24px_rgba(20,20,30,0.15)] max-[640px]:grid-cols-1">
        {/* Left — company/pulls */}
        <div className="flex flex-col">
          <div className="flex h-14 items-center justify-between border-b border-black/10 px-6">
            <div className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-5 w-5 bg-[#0A1FD4]" />
              <span className="font-mono text-[14px]">
                <span className="text-black/40">company/</span>
                <span className="font-medium text-black/85">pulls</span>
              </span>
            </div>
            <span className="flex h-4 items-center gap-1.5 rounded-full border border-[#0A1FD4] bg-[#0A1FD4]/10 px-2 font-mono text-[11px] text-[#0A1FD4]">
              <IconGitPullRequest className="h-3 w-3" />
              <span className="font-semibold">11 open</span>
            </span>
          </div>
          <div className="relative flex-1">
            <div
              className="overflow-hidden"
              style={{
                height: VIEWPORT_HEIGHT,
                maskImage: FADE_MASK,
                WebkitMaskImage: FADE_MASK,
              }}
            >
              <div
                style={{
                  transform: `translateY(${animating ? -ROW_HEIGHT : 0}px)`,
                  transition: animating
                    ? `transform ${TRANSITION_MS}ms ease-in-out`
                    : "none",
                }}
              >
                {items.map((pr, i) => (
                  <PRListItem key={`slot-${i}`} pr={pr} />
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center">
              <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 shadow-[0_4px_14px_-4px_rgba(20,20,30,0.15)]">
                <div className="flex -space-x-2">
                  {avatars.map((src) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className="h-6 w-6 rounded-full border-2 border-white object-cover [animation:pr-row-enter_0.4s_ease-out]"
                    />
                  ))}
                </div>
                <span className="font-mono text-[12px] font-medium text-black/70">
                  +{count}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right — the real *plain spec, scrambles into place on load */}
        <div className="flex flex-col border-l border-black/10 max-[640px]:border-l-0 max-[640px]:border-t">
          <div className="flex h-14 items-center justify-between border-b border-black/10 px-6">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full border border-black/15" />
              <span className="h-2.5 w-2.5 rounded-full border border-black/15" />
              <span className="h-2.5 w-2.5 rounded-full border border-black/15" />
            </div>
            <span className="font-mono text-[12.5px] text-black/40">
              [stripe-payment.plain]
            </span>
          </div>
          <div className="flex-1 px-6 py-5 font-mono text-[12px] leading-relaxed">
            <div className="flex flex-col text-black/35">
              <ScrambleText text="---" delay={nextDelay()} />
              <ScrambleText
                text="description: 'Stripe payment integration'"
                delay={nextDelay()}
              />
              <ScrambleText text="import:" delay={nextDelay()} />
              <ScrambleText text="  - stripe-api-client" delay={nextDelay()} />
              <ScrambleText
                text="  - webhook-handler-template"
                delay={nextDelay()}
              />
              <ScrambleText text="---" delay={nextDelay()} />
            </div>
            <div className="mt-4">
              <ScrambleText
                text="***definitions***"
                delay={nextDelay()}
                className="block font-bold text-[#0A1FD4]"
              />
              <div className="flex flex-col text-black/60">
                <ScrambleText
                  text="- :PaymentIntent: is a Stripe payment intent."
                  delay={nextDelay()}
                />
                <ScrambleText
                  text="- :Webhook: is the endpoint receiving Stripe events."
                  delay={nextDelay()}
                />
              </div>
            </div>
            <div className="mt-4">
              <ScrambleText
                text="***functional specs***"
                delay={nextDelay()}
                className="block font-bold text-[#0A1FD4]"
              />
              <div className="flex flex-col text-black/60">
                <ScrambleText
                  text="- :App: should create :PaymentIntent: with amount and currency."
                  delay={nextDelay()}
                />
                <ScrambleText
                  text="- :App: should confirm :PaymentIntent: before charging."
                  delay={nextDelay()}
                />
                <ScrambleText
                  text="- :Webhook: should verify Stripe signature on every event."
                  delay={nextDelay()}
                />
                <ScrambleText
                  text="- :Webhook: should handle payment_intent.succeeded."
                  delay={nextDelay()}
                />
              </div>
            </div>
            <div className="mt-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 font-mono text-[11px] text-black/70 shadow-[0_1px_2px_rgba(20,20,30,0.06)]">
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0A1FD4]">
                  <svg
                    viewBox="0 0 24 24"
                    width="9"
                    height="9"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                1 spec per integration
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
