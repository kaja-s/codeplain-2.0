import Container from "@/components/Container";
import Button from "@/components/Button";
import HeroSpec from "@/components/HeroSpec";

export default function Hero() {
  return (
    <section className="pt-22 pb-23 text-center">
      <Container className="flex flex-col items-center">
        <h1 className="text-[clamp(34px,5.4vw,52px)] leading-[1.04] mb-5.5">
          Code should be regenerated,
          <br />
          not maintained.
        </h1>
        <p className="text-[clamp(17px,2.1vw,19px)] text-text-body max-w-[52ch] mb-8.5">
          *codeplain gives coding agents the skills to write and maintain
          specifications instead of code. The platform then converts those specs
          into tested, validated code you can regenerate anytime.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button href="/platform" variant="primary">
            Learn more
          </Button>
          <Button href="/book-a-demo" variant="ghost">
            Talk to us
          </Button>
        </div>

        {/* product graphic — the spec → skills → renderer */}
        <HeroSpec />
      </Container>
    </section>
  );
}
