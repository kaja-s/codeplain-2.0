import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Solutions: Purpose-built on the *codeplain platform",
  description:
    "The renderer can produce almost anything from a spec. Solutions are products we've built on it for the work that breaks most often.",
};

export default function Solutions() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Solutions" title="Purpose-built solutions on the *codeplain platform.">
          The renderer can produce almost anything from a spec. Solutions are products we&apos;ve built on it for the work that breaks most often.
        </PageHero>

        <section className="pb-20">
          <Container>
            <div className="grid grid-cols-2 max-[760px]:grid-cols-1 gap-5 mb-14">
              <a href="/solutions/integrations-forge" className="border-[0.5px] border-line rounded-3.5 p-6.5 bg-tint flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <h3 className="text-lg">Integrations Forge</h3>
                    <span className="font-mono text-[11px] px-2.25 py-1 rounded-full whitespace-nowrap bg-[#E3ECFC] text-accent">available</span>
                  </div>
                  <p className="text-text-body text-[14.5px] mb-5">Building software integrations at scale.</p>
                </div>
                <span className="font-mono text-[13px] text-accent">Learn more →</span>
              </a>
              <a href="/solutions/web-scraper" className="border-[0.5px] border-line rounded-3.5 p-6.5 bg-tint flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <h3 className="text-lg">Web Scraper</h3>
                    <span className="font-mono text-[11px] px-2.25 py-1 rounded-full whitespace-nowrap bg-[#EEF1F7] text-muted">coming soon</span>
                  </div>
                  <p className="text-text-body text-[14.5px] mb-5">Scrapers that survive site changes.</p>
                </div>
                <span className="font-mono text-[13px] text-accent">Get notified →</span>
              </a>
            </div>
            <Button href="/book-a-demo" variant="primary">Book a demo</Button>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
