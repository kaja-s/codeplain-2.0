import Container from "@/components/Container";
import SectionHead from "@/components/SectionHead";

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
    <section className="py-24 max-[760px]:py-16.5">
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
        <div className="grid grid-cols-3 max-[760px]:grid-cols-1 gap-x-8 gap-y-10 border-t-[0.5px] border-line-2 pt-11">
          {PILLARS.map((p) => (
            <div key={p.title}>
              <h3 className="text-lg mb-2.5">{p.title}</h3>
              <p className="text-text-body text-[14.5px]">{p.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
