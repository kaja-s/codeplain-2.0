import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Docs — *codeplain",
  description: "Reference docs for Plain, the *codeplain renderer, and plain-forge.",
};

export default function Docs() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Learn · Docs" title="Docs are coming soon.">
          Full reference docs for Plain, the *codeplain renderer, and plain-forge are on the way. Until then, start with the language spec and the plain-forge repo.
        </PageHero>
        <section className="pb-20">
          <Container>
            <div className="flex flex-col gap-2.5">
              <a href="https://plainlang.org/" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-accent border-b border-accent pb-0.5 w-fit">Plain language spec →</a>
              <a href="https://github.com/Codeplain-ai/plain-forge" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-accent border-b border-accent pb-0.5 w-fit">plain-forge on GitHub →</a>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
