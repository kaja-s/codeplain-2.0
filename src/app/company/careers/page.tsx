import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Careers | *codeplain",
  description: "Build the tooling for regenerative software.",
};

export default function Careers() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Company · Careers" title="Build the tooling for regenerative software.">
          We&apos;re a small team building the platform that turns specs into production code. No open roles are posted yet. Reach out if you want to build this with us.
        </PageHero>
        <section className="pb-20">
          <Container>
            <a href="mailto:info@codeplain.ai" className="font-mono text-sm text-accent border-b border-accent pb-0.5">info@codeplain.ai →</a>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
