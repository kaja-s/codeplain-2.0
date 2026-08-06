import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Why *codeplain: Code should be regenerated, not maintained",
  description:
    "Coding agents made code cheap and fast. That inverts decades of assumptions about what a software team should actually own and maintain.",
};

const SECTIONS = [
  {
    heading: "The shift",
    body: "Generating code is now an order of magnitude faster. What stays expensive is everything after: reviewing it, keeping outputs consistent, paying frontier-model prices to produce it, and the cognitive debt engineers take on when they stop understanding what runs. 10× code requires a shift in mindset.",
  },
  {
    heading: "Phoenix architecture",
    body: "Introduced by Chad Fowler: regenerate code instead of maintaining it, keep intent in the spec instead of the implementation, and review one level up. *codeplain is where that mindset becomes a production system. The renderer turns reviewed ∗∗∗plain specs into production code, with no human in the loop.",
  },
  {
    heading: "The economics",
    body: "Specs encode intent, not implementation, so generating them takes 5–10× fewer tokens and larger problems fit in a single context window. *codeplain renders on fast, inexpensive models and reserves frontier models for research.",
  },
  {
    heading: "Proof",
    body: "Incode cut integration work from about two weeks to a single day per integration, folding a recent acquisition into its platform without pulling developers onto drudge work.",
  },
  {
    heading: "Where we're going",
    body: "*codeplain is a platform, and solutions are built on top of it: Integrations Forge today, Web Scraper next, more to follow.",
  },
];

export default function WhyCodeplain() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Our point of view" title="Code should be regenerated, not maintained.">
          Coding agents made code cheap and fast. That inverts decades of assumptions about what a software team should actually own and maintain.
        </PageHero>

        <section className="pb-20">
          <Container>
            <div className="flex flex-col gap-10 max-w-[65ch]">
              {SECTIONS.map((s) => (
                <div key={s.heading}>
                  <h2 className="text-xl mb-2.5">{s.heading}</h2>
                  <p className="text-text-body text-[15.5px]">{s.body}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap mt-14">
              <Button href="/book-a-demo" variant="primary">Book a demo</Button>
              <Button href="/plain" variant="ghost">See the platform</Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
