import Container from "@/components/Container";
import SectionHead from "@/components/SectionHead";

const STEPS: { num: string; title: string; body: string }[] = [
  {
    num: "step 01",
    title: "Draft the spec",
    body: "Developers use agentic skills to research APIs, ask clarifying questions, and evolve the spec, one feature at a time.",
  },
  {
    num: "step 02",
    title: "Render the code",
    body: "The *codeplain renderer generates production-ready software from the reviewed spec and validates it before you see it.",
  },
  {
    num: "step 03",
    title: "When it breaks, regenerate",
    body: "An upstream change breaks the code, not the spec. Rebuild from the same spec instead of patching.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 max-[760px]:py-16.5">
      <Container>
        <SectionHead
          kicker="How it works"
          title="Write it once. Regenerate as often as you need."
        />
        <div className="grid grid-cols-3 max-[760px]:grid-cols-1 gap-6 mb-11">
          {STEPS.map((s) => (
            <div key={s.num}>
              <div className="font-mono text-xs text-accent mb-4">{s.num}</div>
              <h3 className="text-[19px] mb-2.5">{s.title}</h3>
              <p className="text-text-body text-[15px]">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="border-[0.5px] border-line-2 rounded-3.5 px-7 py-6.5 bg-tint">
          <p className="text-text-body text-[15.5px] max-w-[70ch]">
            Because specs encode intent rather than implementation, coding agents
            that generate them use{" "}
            <strong className="text-navy font-medium">
              5–10× fewer tokens
            </strong>{" "}
            and can hold larger problems in a single context window. *codeplain
            runs generation on faster, cheaper models and saves frontier models
            for research. Think of the TypeScript compiler: let the specialized
            tool do the translation, and let the frontier model do what
            it&apos;s good at.
          </p>
        </div>
      </Container>
    </section>
  );
}
