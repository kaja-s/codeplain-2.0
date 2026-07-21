import Container from "@/components/Container";
import SectionHead from "@/components/SectionHead";

const RESOURCES: { type: string; title: string; cta: string; href: string }[] =
  [
    {
      type: "Article",
      title: "Code should be regenerated, not maintained",
      cta: "The New Stack →",
      href: "https://thenewstack.io/codeplain-spec-driven-regenerative-code/",
    },
    {
      type: "Essays",
      title: "Regenerative Software & the Phoenix Architecture",
      cta: "Read the series →",
      href: "https://aicoding.leaflet.pub/",
    },
    {
      type: "Open source",
      title: "plain-forge on GitHub",
      cta: "View the repo →",
      href: "https://github.com/Codeplain-ai/plain-forge",
    },
    {
      type: "Docs",
      title: "The ∗∗∗plain language guide",
      cta: "plainlang.org/docs →",
      href: "https://plainlang.org/docs/language-guide/",
    },
  ];

export default function Resources() {
  return (
    <section className="pb-24 max-[760px]:pb-16.5">
      <Container>
        <SectionHead kicker="Go deeper" title="Read the thinking, and the code." />
        <div className="grid grid-cols-4 max-[900px]:grid-cols-2 max-[760px]:grid-cols-1 gap-4.5">
          {RESOURCES.map((r) => (
            <a
              key={r.title}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block border-[0.5px] border-line-2 rounded-3.5 p-5.5 hover:border-[#C9D6F0] hover:-translate-y-0.5 transition-[border-color,transform]"
            >
              <div className="font-mono text-[11px] tracking-wide uppercase text-muted mb-3.5">
                {r.type}
              </div>
              <h3 className="text-base leading-[1.3] mb-2">{r.title}</h3>
              <span className="font-mono text-[13px] text-accent">{r.cta}</span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
