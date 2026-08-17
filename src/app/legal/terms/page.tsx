import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service | *codeplain",
  robots: "noindex",
};

export default function Terms() {
  return (
    <>
      <Header />
      <main className="bg-white text-ink">
        <PageHero eyebrow="Legal" title="Terms of Service">
          Our Terms of Service are being finalized with legal counsel. Questions in the meantime? Contact{" "}
          <a href="mailto:info@codeplain.ai" className="text-brand-blue border-b border-brand-blue pb-px">info@codeplain.ai</a>.
        </PageHero>
      </main>
      <Footer />
    </>
  );
}
