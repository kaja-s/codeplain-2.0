import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Logos from "@/components/sections/Logos";
import Pillars from "@/components/sections/Pillars";
import PlatformSolutions from "@/components/sections/PlatformSolutions";
import Differentiators from "@/components/sections/Differentiators";
import Testimonial from "@/components/sections/Testimonial";
import HowItWorks from "@/components/sections/HowItWorks";
import Resources from "@/components/sections/Resources";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Logos />
        <Pillars />
        <PlatformSolutions />
        <Differentiators />
        <Testimonial />
        <HowItWorks />
        <Resources />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
