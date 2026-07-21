import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact | *codeplain",
  description: "Get in touch with *codeplain.",
};

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Company · Contact" title="Get in touch." />
        <section className="pb-20">
          <Container>
            <div className="flex flex-col gap-3">
              <div>
                <span className="font-mono text-[11px] tracking-wide uppercase text-muted block mb-1.5">General</span>
                <a href="mailto:info@codeplain.ai" className="text-accent border-b border-accent pb-px">info@codeplain.ai</a>
              </div>
              <div>
                <span className="font-mono text-[11px] tracking-wide uppercase text-muted block mb-1.5">Sales</span>
                <a href="/book-a-demo" className="text-accent border-b border-accent pb-px">Book a demo</a>
              </div>
              <div>
                <span className="font-mono text-[11px] tracking-wide uppercase text-muted block mb-1.5">Press</span>
                <a href="mailto:info@codeplain.ai" className="text-accent border-b border-accent pb-px">info@codeplain.ai</a>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
