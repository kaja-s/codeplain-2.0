import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Web Scraping — Coming soon | *codeplain",
  description:
    "Scrapers that survive site changes by regenerating from the spec. Coming soon.",
};

export default function WebScraping() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Solutions · Coming soon" title="Scrapers that don't break when the site does.">
          Same idea as Integrations Forge, pointed at the web. Describe what to extract in a Plain spec; regenerate the scraper when the page changes.
        </PageHero>

        <section className="pb-20">
          <Container>
            <div className="border-[0.5px] border-line-2 rounded-3.5 p-7 bg-tint max-w-[520px] mb-8">
              <h2 className="text-lg mb-3">Get notified when it&apos;s ready</h2>
              <div className="flex gap-2.5 max-[500px]:flex-col">
                <input
                  type="email"
                  placeholder="you@company.com"
                  aria-label="Email"
                  className="flex-1 text-[15px] text-navy bg-white border-[0.5px] border-line-2 rounded-lg px-3.25 py-2.75 outline-none focus:border-accent transition-colors"
                />
                <button type="button" className="text-[15px] font-medium px-5.5 py-2.75 rounded-lg bg-navy text-white hover:bg-[#16306b] transition-colors">
                  Notify me
                </button>
              </div>
            </div>
            <a href="/solutions/integrations-forge" className="font-mono text-sm text-accent border-b border-accent pb-0.5">
              In the meantime, see Integrations Forge →
            </a>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
