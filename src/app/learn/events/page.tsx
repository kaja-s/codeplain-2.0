import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Events | *codeplain",
  description: "Talks, demos, and where to find *codeplain in person.",
};

export default function Events() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Learn · Events" title="No events on the calendar yet.">
          We&apos;ll list talks, demos, and meetups here as they&apos;re scheduled. Want us at your event? Get in touch.
        </PageHero>
        <section className="pb-20">
          <Container>
            <a href="/company/contact" className="font-mono text-sm text-accent border-b border-accent pb-0.5">Contact us →</a>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
