import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import DemoForm from "@/components/DemoForm";

export const metadata: Metadata = {
  title: "Book a demo — *codeplain",
  description:
    "See *codeplain in action. Book a 30-minute demo to see how spec-driven rendering builds and maintains software integrations at scale.",
  robots: "noindex",
};

const BULLETS = [
  "Renders production-ready integrations from a Plain spec — no human in the loop.",
  "Regenerates code from the same spec the moment an upstream API changes, instead of patching by hand.",
  "Keeps review at the spec level, so intent stays readable even as the implementation is rebuilt.",
  "Cut Incode's integration work from about two weeks to a single day, per integration.",
];

export default function BookADemo() {
  return (
    <>
      <Header showBookDemoCta={false} />

      <main>
        <section className="pt-14 pb-10">
          <Container className="grid grid-cols-[1.1fr_0.9fr] max-[900px]:grid-cols-1 gap-14">
            <div>
              <h1 className="text-[clamp(30px,4vw,42px)] leading-[1.08] max-w-[16ch] mb-5.5">
                See *codeplain in action.
              </h1>
              <p className="text-[17px] text-text-body mb-5.5">
                In your 30-minute personal demo, you&apos;ll learn how *codeplain:
              </p>
              <ul className="flex flex-col gap-4 mb-10">
                {BULLETS.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-[15.5px] text-navy leading-snug">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-tint border-[0.5px] border-line-2 text-accent flex items-center justify-center text-xs mt-px">✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="border-t-[0.5px] border-line pt-7">
                <span className="font-mono text-[11px] tracking-wide uppercase text-muted block mb-4">
                  Backed by engineers who build this every day
                </span>
                <div className="flex flex-wrap gap-x-11 gap-y-7">
                  <span className="text-base font-medium tracking-tight text-[#33406A]">GapMinder VC</span>
                  <span className="text-base font-medium tracking-tight text-[#33406A]">Silicon Gardens</span>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium tracking-tight text-[#33406A]">Incode</span>
                    <span className="text-[#C4CEE4]">·</span>
                    <span className="font-mono text-xs text-muted">design partner</span>
                  </div>
                </div>
              </div>
            </div>

            <DemoForm />
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
