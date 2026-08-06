import Container from "@/components/Container";
import Button from "@/components/Button";
import HeroBeforeAfter from "@/components/HeroBeforeAfter";

export default function Hero() {
  return (
    <section className="pt-22 pb-23 text-center">
      <Container className="flex flex-col items-center">
        <h1 className="text-[clamp(34px,5.4vw,52px)] leading-[1.04] mb-5.5">
          AI writes Code.
          <br />
          Humans write Intent.
        </h1>
        <p className="text-[clamp(17px,2.1vw,19px)] text-text-body max-w-[52ch] mb-8.5">
          Codeplain puts your team back in control of agentic coding through
          specification-driven development.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button href="/plain" variant="primary">
            Learn more
          </Button>
          <Button href="/book-a-demo" variant="ghost">
            Talk to us
          </Button>
        </div>

        {/* before/after — the spec as the control point */}
        <HeroBeforeAfter />
      </Container>
    </section>
  );
}
