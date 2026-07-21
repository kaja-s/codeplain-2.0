import Container from "@/components/Container";
import SectionHead from "@/components/SectionHead";

const DIFFERENTIATORS: { title: string; body: string }[] = [
  {
    title: "Open by default",
    body: "∗∗∗plain and plain-forge are open source. Read the language and the tooling. Nothing is hidden.",
  },
  {
    title: "Model-efficient",
    body: "Generating specs uses 5–10× fewer tokens. Cheap, fast models do generation; frontier models do research.",
  },
  {
    title: "Not framework-locked",
    body: "Regenerate to the stack you need. The spec outlives any single implementation.",
  },
];

export default function Differentiators() {
  return (
    <section className="py-24 max-[760px]:py-16.5">
      <Container>
        <SectionHead
          className="mx-auto text-center"
          kicker="Why it's different"
          title="No black box, no lock-in."
        />
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
