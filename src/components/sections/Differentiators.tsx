import Container from "@/components/Container";
import SectionHead from "@/components/SectionHead";

const DIFFERENTIATORS: { title: string; body: string }[] = [
  {
    title: "Specifications Are Maintainable",
    body: "Code blends requirements with implementation. Specs separate behavior and boundaries from preferences and library specifics.",
  },
  {
    title: "Reusable Across Teams",
    body: "Without standardization, developers invent their own tools. Plain makes agentic coding a team sport.",
  },
  {
    title: "Automatic Validation",
    body: "Specs enable automatic code validation against intent. Catch subtle bugs during spec review, not production.",
  },
];

export default function Differentiators() {
  return (
    <section className="py-24 max-[760px]:py-16.5">
      <Container>
        <SectionHead
          className="mx-auto text-center"
          kicker="Why it works"
          title="Specs Drive Everything"
        >
          Plain is the specification language that gives structure to agentic
          coding.
        </SectionHead>
        <div className="grid grid-cols-3 max-[760px]:grid-cols-1 gap-5">
          {DIFFERENTIATORS.map((d) => (
            <div key={d.title} className="border-l-2 border-accent pl-5 py-1">
              <h3 className="text-lg mb-2.5">{d.title}</h3>
              <p className="text-text-body text-[14.5px]">{d.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
