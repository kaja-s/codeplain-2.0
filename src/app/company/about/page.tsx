import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About — *codeplain",
  description: "Make the specification the source of truth for software — so teams maintain intent, not implementations.",
};

const TEAM = [
  { name: "Dušan Omerčević", role: "CEO" },
  { name: "Predrag Radenković", role: "CTO" },
];

export default function About() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Company" title="We think code should be disposable.">
          Our mission: make the specification the source of truth for software — so teams maintain intent, not implementations.
        </PageHero>

        <section className="pb-20">
          <Container>
            <div className="grid grid-cols-2 max-[760px]:grid-cols-1 gap-10">
              <div>
                <h2 className="text-xl mb-4">Team</h2>
                <div className="flex flex-col gap-3">
                  {TEAM.map((t) => (
                    <div key={t.name}>
                      <div className="font-medium text-[15px]">{t.name}</div>
                      <div className="font-mono text-[13px] text-muted">{t.role}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl mb-4">Backers</h2>
                <p className="text-text-body text-[15px] mb-3">
                  $3M seed led by <strong className="text-navy font-medium">GapMinder</strong>, with participation from <strong className="text-navy font-medium">Silicon Gardens</strong>.
                </p>
                <p className="text-text-body text-[15px] mb-3">
                  Board: Cosmin Ochisor (Partner, GapMinder).
                </p>
                <p className="text-text-body text-[15px]">
                  Angel investors: Johan Rosenkilde (creator of SpecLang at GitHub Next; also an advisor) and Jost Novljan (VP of Engineering, SAP LeanIX).
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
