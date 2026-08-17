import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Logos from "@/components/sections/Logos";
import Pillars from "@/components/sections/Pillars";
import PlatformSolutions from "@/components/sections/PlatformSolutions";
import Differentiators from "@/components/sections/Differentiators";
import Testimonial from "@/components/sections/Testimonial";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Codeplain: AI writes Code. Humans write Intent.",
  description:
    "Codeplain puts your team back in control of agentic coding through specification-driven development.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white text-ink">
        <Hero />
        <Pillars />
        <Logos />
        <PlatformSolutions />
        <Differentiators />
        <Testimonial />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
