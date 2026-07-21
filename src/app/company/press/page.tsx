import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Press | *codeplain",
  description: "*codeplain in the press.",
};

export default function Press() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Company · Press" title="*codeplain in the press." />
        <section className="pb-20">
          <Container>
            <a
              href="https://thenewstack.io/codeplain-spec-driven-regenerative-code/"
              target="_blank"
              rel="noopener noreferrer"
              className="block border-[0.5px] border-line-2 rounded-3.5 p-6.5 bg-tint hover:border-[#C9D6F0] transition-colors max-w-[440px] mb-6"
            >
              <div className="font-mono text-[11px] tracking-wide uppercase text-muted mb-3.5">Article</div>
              <h3 className="text-base leading-[1.3] mb-2">Code should be regenerated, not maintained</h3>
              <span className="font-mono text-[13px] text-accent">The New Stack →</span>
            </a>
            <p className="text-text-body text-[15px]">More coverage coming soon. For press inquiries, contact <a href="mailto:info@codeplain.ai" className="text-accent border-b border-accent pb-px">info@codeplain.ai</a>.</p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
