import Container from "@/components/Container";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";

export default function FinalCta() {
  return (
    <section className="py-24 max-md:py-16.5 bg-black/2 border-t border-black/10 text-ink text-center">
      <Container>
        <h2 className="text-[clamp(28px,4vw,42px)] leading-[1.08] max-w-[20ch] mx-auto mb-7.5">
          Put your team back in control.
        </h2>
        <div className="flex gap-3 justify-center flex-wrap mb-5.5">
          <PrimaryButton href="/solutions/integrations-forge">
            Get Started with Integrations Forge
          </PrimaryButton>
          <SecondaryButton href="/book-a-demo">
            Schedule a Demo
          </SecondaryButton>
        </div>
        <a
          href="/learn/documentation"
          className="font-mono text-sm text-ink-muted border-b border-ink-muted/40 hover:text-ink hover:border-ink transition-colors"
        >
          Explore Documentation →
        </a>
      </Container>
    </section>
  );
}
