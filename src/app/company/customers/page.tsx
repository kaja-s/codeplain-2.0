import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Customers — *codeplain",
  description: "From 2 weeks to 1 day per integration — how Incode uses *codeplain.",
};

export default function Customers() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Company · Customers" title="From 2 weeks to 1 day per integration.">
          Incode integrates external identity and data providers — Sardine, Serpro, Mono-BVN, Telesign, and more — using Integrations Forge.
        </PageHero>

        <section className="pb-20">
          <Container>
            <div aria-hidden="true" className="font-serif text-[46px] leading-[0.6] text-accent mb-4.5">&ldquo;</div>
            <blockquote className="text-[clamp(22px,3vw,28px)] font-medium leading-[1.4] tracking-tight max-w-[26ch] mb-7.5">
              *codeplain helped us seamlessly integrate our recent acquisition into Incode&apos;s platform, freeing developers from drudge work.
            </blockquote>
            <div className="flex items-center gap-3.25 mb-14">
              <div aria-hidden="true" className="w-11.5 h-11.5 rounded-full bg-navy text-white flex items-center justify-center font-medium text-sm">JJ</div>
              <div>
                <div className="font-medium text-[15px]">Jovan Jovanović</div>
                <div className="font-mono text-[13px] text-[#5B6B8C]">CTO, Incode</div>
              </div>
            </div>
            <p className="text-text-body text-[15px]">More customer stories coming soon.</p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
