import Container from "@/components/Container";
import Button from "@/components/Button";

export default function FinalCta() {
  return (
    <section className="py-24 max-[760px]:py-16.5 bg-navy text-white text-center">
      <Container>
        <h2 className="text-[clamp(28px,4vw,42px)] leading-[1.08] max-w-[20ch] mx-auto mb-7.5">
          Put your team back in control.
        </h2>
        <div className="flex gap-3 justify-center flex-wrap mb-5.5">
          <Button href="/solutions/integrations-forge" variant="onnavy">
            Get Started with Integrations Forge
          </Button>
          <Button href="/learn/documentation" variant="onnavy-ghost">
            Explore the Documentation
          </Button>
        </div>
        <a
          href="/book-a-demo"
          className="font-mono text-sm text-[#AEBBD6] border-b border-[#AEBBD6]/50 hover:text-white hover:border-white transition-colors"
        >
          Schedule a Demo →
        </a>
      </Container>
    </section>
  );
}
