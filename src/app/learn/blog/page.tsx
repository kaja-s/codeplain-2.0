import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Blog | *codeplain",
  description: "POV essays, product updates, and engineering deep-dives from *codeplain.",
};

export default function Blog() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Learn · Blog" title="Posts are coming soon.">
          We&apos;re working on POV essays, product updates, and engineering deep-dives. In the meantime, read our point of view or the external coverage linked below.
        </PageHero>
        <section className="pb-20">
          <Container>
            <div className="flex flex-col gap-2.5">
              <a href="/codeplain" className="font-mono text-sm text-accent border-b border-accent pb-0.5 w-fit">Why *codeplain →</a>
              <a href="https://thenewstack.io/codeplain-spec-driven-regenerative-code/" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-accent border-b border-accent pb-0.5 w-fit">Code should be regenerated, not maintained (The New Stack) →</a>
              <a href="https://aicoding.leaflet.pub/" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-accent border-b border-accent pb-0.5 w-fit">Regenerative Software &amp; the Phoenix Architecture →</a>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
