import Container from "@/components/Container";
import SectionHead from "@/components/SectionHead";

const PILLARS: { title: string; body: string }[] = [
  {
    title: "Source of truth",
    body: "Edit the spec, not the code. Intent lives in one place instead of scattered across an implementation.",
  },
  {
    title: "Regenerate, don't patch",
    body: "Code is ephemeral. When it breaks, re-render from the spec instead of patching.",
  },
  {
    title: "Review one level up",
    body: "Review happens at the spec, not the implementation.",
  },
  {
    title: "Intent over implementation",
    body: "Coding agents focus on what the software should do, not how it's built.",
  },
];

export default function Pillars() {
  return (
    <section className="py-24 max-[760px]:py-16.5">
      <Container>
        <SectionHead
          className="mx-auto text-center"
          kicker="Phoenix architecture"
          title="Maintain specs, not code."
        >
          Chad Fowler introduced phoenix architecture. It argues intent belongs
          in the spec, not the code, and review should happen on the spec, not
          the implementation.
        </SectionHead>
        <div className="grid grid-cols-4 max-[900px]:grid-cols-2 max-[760px]:grid-cols-1 gap-x-8 gap-y-10 border-t-[0.5px] border-line-2 pt-11">
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
