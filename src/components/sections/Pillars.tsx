import Container from "@/components/Container";
import SectionHead from "@/components/SectionHead";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";

const PILLARS: { title: string; body: string }[] = [
  {
    title: "Collapse the Generation Loop",
    body: "Move steering out of a prompt and into a spec. You write it once, uniquely for your use case. Days compress to hours.",
  },
  {
    title: "Review Specs, Not Code",
    body: "Catch problems before a single line is written. Gain shared understanding and peace of mind earlier in the process.",
  },
  {
    title: "Maintenance Gets Easier",
    body: "Updating specs focuses on behavior and boundaries, not syntax. Upgrading frameworks no longer requires understanding implementation details.",
  },
];

export default function Pillars() {
  return (
    <section id="why-codeplain" className="py-24 max-md:py-16.5 scroll-mt-20">
      <Container>
        <SectionHead
          className="mx-auto text-center"
          kicker="The promise"
          title="Control at Speed"
        >
          Without Integrations Forge, agentic coding is prone to uneven results
          across developers and we attempt to fix it with more code reviews. You
          never see the 10x productivity that AI claims.
        </SectionHead>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-x-8 gap-y-10 border-t border-black/15 pt-11">
          {PILLARS.map((p) => (
            <div key={p.title}>
              <Heading as="h3" size="h4" className="mb-2.5 text-ink">
                {p.title}
              </Heading>
              <Paragraph className="text-ink-muted">{p.body}</Paragraph>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
