import Container from "@/components/Container";
import Button from "@/components/Button";
import HeroVisualToggle from "@/components/HeroVisualToggle";

export default function Hero() {
  return (
    <section className="bg-white text-[#1a1a1a] flex flex-col items-center gap-20 px-16 py-28 max-[760px]:px-6 max-[760px]:py-16 max-[760px]:gap-12">
      <Container className="flex flex-col items-center gap-8 !max-w-[768px]">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-[clamp(34px,5.4vw,56px)] leading-[1.2] font-bold">
            AI writes Code.
            <br />
            Humans write Intent.
          </h1>
          <p className="text-[18px] leading-[1.5] text-[#4a5678] max-w-[27rem]">
            *codeplain puts your team back in control of agentic coding through
            specification-driven development.
          </p>
        </div>
        <Button href="/solutions/integrations-forge" variant="primary" className="!px-6 !py-3">
          Get Started with Integrations Forge
        </Button>
      </Container>

      <div className="w-full max-w-[1120px]">
        <HeroVisualToggle />
      </div>
    </section>
  );
}
