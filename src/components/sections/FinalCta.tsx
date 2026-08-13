import Container from "@/components/Container";
import Button from "@/components/Button";

export default function FinalCta() {
  return (
    <section className="py-24 max-[760px]:py-16.5 bg-black/[0.02] border-t border-black/10 text-[#1a1a1a] text-center">
      <Container>
        <h2 className="text-[clamp(28px,4vw,42px)] leading-[1.08] max-w-[20ch] mx-auto mb-7.5">
          Put your team back in control.
        </h2>
        <div className="flex gap-3 justify-center flex-wrap mb-5.5">
          <Button href="/solutions/integrations-forge" variant="primary">
            Get Started with Integrations Forge
          </Button>
          <Button href="/book-a-demo" variant="onnavy-ghost">
            Schedule a Demo
          </Button>
        </div>
        <a
          href="/learn/documentation"
          className="font-mono text-sm text-[#4a5678] border-b border-[#4a5678]/40 hover:text-[#1a1a1a] hover:border-[#1a1a1a] transition-colors"
        >
          Explore Documentation →
        </a>
      </Container>
    </section>
  );
}
