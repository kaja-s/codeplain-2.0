import Container from "@/components/Container";
import SectionHead from "@/components/SectionHead";

const QUOTES: {
  quote: string;
  initials: string;
  name: string;
  role: string;
  highlighted?: boolean;
}[] = [
  {
    quote:
      "Codeplain is helping us seamlessly integrate our recent acquisition into Incode's platform, freeing developers from drudge work.",
    initials: "JJ",
    name: "Jovan Jovanović",
    role: "CTO, Incode",
    highlighted: true,
  },
  {
    quote:
      "The bigger payoff comes when fixing and maintaining happens in the background and your teams can focus on building. That's when you start doing things that weren't even in range before.",
    initials: "BC",
    name: "Boris Cherny",
    role: "Creator of Claude Code",
  },
];

const METRICS: { icon: string; from: string; to: string }[] = [
  { icon: "⚡", from: "2 weeks", to: "1 day per integration" },
  { icon: "📋", from: "Code reviews", to: "Spec reviews (caught earlier)" },
  { icon: "🔄", from: "Manual API updates", to: "Automatic updates" },
  { icon: "👥", from: "Ad-hoc workflows", to: "Unified spec-driven process" },
];

export default function Testimonial() {
  return (
    <section className="py-24 max-[760px]:py-16.5">
      <Container>
        <SectionHead
          className="mx-auto text-center"
          kicker="Proof"
          title="14× Faster. Same Quality. Full Control."
        >
          Incode Technologies scaled from 20 to 200 integrations while
          maintaining safety and consistency.
        </SectionHead>

        <div className="grid grid-cols-2 max-[760px]:grid-cols-1 gap-5 mb-14">
          {QUOTES.map((q) => (
            <div
              key={q.name}
              className={`rounded-3xl p-8 ${
                q.highlighted
                  ? "bg-black/[0.02] border border-black/15"
                  : "border border-black/15"
              }`}
            >
              <div
                aria-hidden="true"
                className="font-serif text-[40px] leading-[0.6] text-[#0A1FD4] mb-4"
              >
                &ldquo;
              </div>
              <blockquote className="text-[18px] leading-[1.5] tracking-tight mb-7 text-[#1a1a1a]">
                {q.quote}
              </blockquote>
              <div className="flex items-center gap-3.25">
                <div
                  aria-hidden="true"
                  className="w-11 h-11 rounded-full bg-[#0A1FD4] text-white flex items-center justify-center font-medium text-sm shrink-0"
                >
                  {q.initials}
                </div>
                <div className="text-left">
                  <div className="font-medium text-[15px] text-[#1a1a1a]">{q.name}</div>
                  <div className="font-mono text-[13px] text-[#5B6B8C]">
                    {q.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1 gap-x-8 gap-y-8 border-t border-black/15 pt-11">
          {METRICS.map((m) => (
            <div key={m.from}>
              <div className="text-2xl mb-3" aria-hidden="true">
                {m.icon}
              </div>
              <p className="text-[14.5px] text-[#4a5678] leading-snug">
                {m.from} <span className="text-[#0A1FD4]">→</span> {m.to}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
