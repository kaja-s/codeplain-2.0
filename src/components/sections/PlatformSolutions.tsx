import Container from "@/components/Container";
import Button from "@/components/Button";

type Solution = {
  name: string;
  href: string;
  tag: string;
  tagMuted?: boolean;
  bg: string;
  lead: string;
  features: { title: string; body: string }[];
  cta: { label: string; href: string; variant: "primary" | "ghost" };
};

const SOLUTIONS: Solution[] = [
  {
    name: "Integrations Forge",
    href: "/solutions/integrations-forge",
    tag: "Available",
    bg: "bg-[#EEF3FD]",
    lead: "Incode cut integration work from two weeks to one day. Build and maintain software integrations at scale.",
    features: [
      {
        title: "Research",
        body: "Agents already understand thousands of APIs and discover the docs on their own.",
      },
      {
        title: "Draft",
        body: "They validate endpoints with test scripts and draft the ∗∗∗plain spec, one feature at a time.",
      },
      {
        title: "Render",
        body: "The renderer turns the reviewed spec into tested, production-ready integration code.",
      },
      {
        title: "Regenerate",
        body: "Re-render from the spec when the upstream API changes, instead of patching by hand.",
      },
    ],
    cta: { label: "Get started", href: "/get-started", variant: "primary" },
  },
  {
    name: "Web Scraping",
    href: "/solutions/web-scraping",
    tag: "Coming soon",
    tagMuted: true,
    bg: "bg-[#F5F6F9]",
    lead: "Scrapers that survive site changes by regenerating from the spec.",
    features: [
      {
        title: "Describe",
        body: "Say what to extract in a ∗∗∗plain spec.",
      },
      {
        title: "Regenerate",
        body: "Re-render the scraper when the page changes.",
      },
    ],
    cta: {
      label: "Get notified",
      href: "/solutions/web-scraping",
      variant: "ghost",
    },
  },
];

export default function PlatformSolutions() {
  return (
    <section className="py-24 max-[760px]:py-16.5 bg-navy-deep">
      <Container>
        <div className="max-w-[52ch] mx-auto text-center mb-13">
          <p className="font-mono text-xs tracking-wide text-accent-bright uppercase mb-4">
            The platform
          </p>
          <h2 className="text-[clamp(27px,3.6vw,38px)] leading-[1.1] font-medium tracking-tight mb-4 text-white">
            One platform. Purpose-built solutions on top.
          </h2>
          <p className="text-lg text-[#AEBBD6]">
            *codeplain is the engine that turns specs into production code.
            Solutions are products built on it, aimed at the work that breaks
            most often.
          </p>
        </div>

        <div className="grid grid-cols-2 max-[760px]:grid-cols-1 gap-5">
          {SOLUTIONS.map((s) => (
            <div
              key={s.name}
              className={`flex flex-col rounded-[28px] p-9 max-[760px]:p-7 ${s.bg}`}
            >
              <span
                className={`inline-flex w-fit rounded-full border px-3.5 py-1 text-[12px] ${
                  s.tagMuted
                    ? "border-muted/40 text-muted"
                    : "border-accent/40 text-accent"
                }`}
              >
                {s.tag}
              </span>

              <a href={s.href} className="mt-6 block hover:text-accent transition-colors">
                <h3 className="text-[clamp(24px,3vw,32px)] leading-[1.08] font-medium">
                  {s.name}
                </h3>
              </a>

              <p className="mt-4 text-[16.5px] leading-snug text-text-body max-w-[42ch]">
                {s.lead}
              </p>

              <div className="mt-7 flex flex-col gap-5">
                {s.features.map((f) => (
                  <div key={f.title}>
                    <div className="font-medium text-[15px] text-navy">
                      {f.title}
                    </div>
                    <div className="mt-0.5 text-text-body text-[14px] leading-snug">
                      {f.body}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-9">
                <Button
                  href={s.cta.href}
                  variant={s.cta.variant}
                  className="!rounded-full !px-7"
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
