import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Cookie Policy | *codeplain",
  robots: "noindex",
};

export default function Cookies() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Legal" title="Cookie Policy">
          Our Cookie Policy is being finalized with legal counsel. Questions in the meantime? Contact{" "}
          <a href="mailto:info@codeplain.ai" className="text-accent border-b border-accent pb-px">info@codeplain.ai</a>.
        </PageHero>
      </main>
      <Footer />
    </>
  );
}
