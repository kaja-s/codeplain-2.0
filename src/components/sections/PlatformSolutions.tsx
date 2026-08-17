import { ReactNode } from "react";
import Container from "@/components/Container";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";

type Solution = {
  name: string;
  icon: ReactNode;
  bg: string;
  copy: string;
  cta: { label: string; href: string; variant: "primary" | "secondary" };
};

function ConnectionIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="6" cy="7" r="3" stroke="currentColor" className="stroke-[1.6]" />
      <circle cx="22" cy="7" r="3" stroke="currentColor" className="stroke-[1.6]" />
      <circle cx="14" cy="21" r="3" stroke="currentColor" className="stroke-[1.6]" />
      <path
        d="M9 8.5 12 18.5M19 8.5 16 18.5M9 7H19"
        stroke="currentColor"
        strokeLinecap="round"
        className="stroke-[1.6]"
      />
    </svg>
  );
}

function CrawlIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect
        x="4"
        y="4"
        width="20"
        height="14"
        rx="1.5"
        stroke="currentColor"
        className="stroke-[1.6]"
      />
      <path
        d="M4 9h20M10.5 4v14M17.5 4v14"
        stroke="currentColor"
        className="stroke-[1.3]"
      />
      <path
        d="M14 18v6m0 0-3-3m3 3 3-3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-[1.6]"
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
    bg: "bg-black/2 border border-black/10",
    copy: "Automate web data work safely and reliably.",
    cta: {
      label: "Explore Web Scraper",
      href: "/solutions/web-scraper",
      variant: "secondary",
    },
  },
];

export default function PlatformSolutions() {
  return (
    <section id="solutions" className="py-24 max-md:py-16.5 scroll-mt-20">
      <Container>
        <div className="max-w-[52ch] mx-auto text-center mb-13">
          <Paragraph size="eyebrow" className="text-brand-blue mb-4">
            Solutions
          </Paragraph>
          <Heading as="h2" className="mb-4 text-ink">
            Built for Scaling AI Coding
          </Heading>
          <Paragraph size="lead" className="text-ink-muted">
            Whether you&apos;re building integrations or automating data work,
            Codeplain gives you the tools to do it reliably.
          </Paragraph>
        </div>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5">
          {SOLUTIONS.map((s) => (
            <div
              key={s.name}
              className={`flex flex-col rounded-[28px] p-9 max-md:p-7 ${s.bg}`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/[0.05] text-brand-blue">
                {s.icon}
              </div>

              <Heading as="h3" className="mt-6 text-ink">
                {s.name}
              </Heading>

              <Paragraph
                size="custom"
                className="mt-4 text-[16.5px] leading-snug text-ink-muted max-w-[42ch]"
              >
                {s.copy}
              </Paragraph>

              <div className="mt-auto pt-9">
                {s.cta.variant === "primary" ? (
                  <PrimaryButton href={s.cta.href} className="!px-7">
                    {s.cta.label}
                  </PrimaryButton>
                ) : (
                  <SecondaryButton href={s.cta.href} className="!px-7">
                    {s.cta.label}
                  </SecondaryButton>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
