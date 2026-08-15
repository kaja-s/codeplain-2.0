import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { PrimaryButton } from "@/components/Buttons";

export const metadata: Metadata = {
  title: "Customers | *codeplain",
};

export default function Customers() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Company · Customers" title="This page is coming together.">
          We&apos;re rebuilding this page. Head back to the homepage in the meantime.
        </PageHero>
        <section className="pb-20">
          <Container>
            <PrimaryButton href="/">Back home</PrimaryButton>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
