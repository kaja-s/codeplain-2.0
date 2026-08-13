import { ReactNode } from "react";
import Container from "@/components/Container";
import Button from "@/components/Button";

type Solution = {
  name: string;
  icon: ReactNode;
  bg: string;
  copy: string;
  cta: { label: string; href: string; variant: "primary" | "ghost" };
};

function ConnectionIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="6" cy="7" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="22" cy="7" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="14" cy="21" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M9 8.5 12 18.5M19 8.5 16 18.5M9 7H19"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CrawlIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="20" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 9h20M10.5 4v14M17.5 4v14" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M14 18v6m0 0-3-3m3 3 3-3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const SOLUTIONS: Solution[] = [
  {
    name: "Integrations Forge",
    icon: <ConnectionIcon />,
    bg: "bg-white border border-black/10",
    copy: "Ship integrations faster, maintain them with confidence.",
    cta: {
      label: "Get Started with Integrations Forge",
      href: "/solutions/integrations-forge",
      variant: "primary",
    },
  },
  {
    name: "Web Scraper",
    icon: <CrawlIcon />,
    bg: "bg-black/[0.02] border border-black/10",
    copy: "Automate web data work safely and reliably.",
    cta: {
      label: "Explore Web Scraper",
      href: "/solutions/web-scraper",
      variant: "ghost",
    },
  },
];

export default function PlatformSolutions() {
  return (
    <section id="solutions" className="py-24 max-[760px]:py-16.5 bg-black/[0.02] scroll-mt-20">
      <Container>
        <div className="max-w-[52ch] mx-auto text-center mb-13">
          <p className="font-mono text-xs tracking-wide text-[#0A1FD4] uppercase mb-4">
            Solutions
          </p>
          <h2 className="text-[clamp(27px,3.6vw,38px)] leading-[1.1] font-medium tracking-tight mb-4 text-[#1a1a1a]">
            Built for Scaling AI Coding
          </h2>
          <p className="text-lg text-[#4a5678]">
            Whether you&apos;re building integrations or automating data work,
            Codeplain gives you the tools to do it reliably.
          </p>
        </div>

        <div className="grid grid-cols-2 max-[760px]:grid-cols-1 gap-5">
          {SOLUTIONS.map((s) => (
            <div
              key={s.name}
              className={`flex flex-col rounded-[28px] p-9 max-[760px]:p-7 ${s.bg}`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/[0.05] text-[#0A1FD4]">
                {s.icon}
              </div>

              <h3 className="mt-6 text-[clamp(24px,3vw,32px)] leading-[1.08] font-medium text-[#1a1a1a]">
                {s.name}
              </h3>

              <p className="mt-4 text-[16.5px] leading-snug text-[#4a5678] max-w-[42ch]">
                {s.copy}
              </p>

              <div className="mt-auto pt-9">
                <Button
                  href={s.cta.href}
                  variant={s.cta.variant}
                  className={
                    s.cta.variant === "ghost"
                      ? "!border-black/20 !text-[#1a1a1a] hover:!border-black/40 hover:!bg-black/[0.04] !px-7"
                      : "!px-7"
                  }
                >
                  {s.cta.label}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
