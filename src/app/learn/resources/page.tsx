import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Resources | *codeplain",
  description: "Case studies, guides, and templates for spec-driven development.",
};

export default function Resources() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Learn · Resources" title="Resources are coming soon.">
          Case studies, guides, and spec templates are on the way. Until then, read the point of view behind *codeplain, or see it in action.
        </PageHero>
        <section className="pb-20">
          <Container>
            <div className="flex flex-col gap-2.5">
              <a href="/codeplain" className="font-mono text-sm text-accent border-b border-accent pb-0.5 w-fit">Why *codeplain →</a>
              <a href="/book-a-demo" className="font-mono text-sm text-accent border-b border-accent pb-0.5 w-fit">Book a demo →</a>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
