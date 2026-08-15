import Container from "@/components/Container";
import { PrimaryButton } from "@/components/Buttons";
import HeroVisualToggle from "@/components/HeroVisualToggle";

export default function Hero() {
  return (
    <section className="bg-white text-ink flex flex-col items-center gap-20 px-16 py-28 max-md:px-6 max-md:py-16 max-md:gap-12">
      <Container className="flex flex-col items-center gap-8 max-w-3xl!">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-[clamp(34px,5.4vw,56px)] leading-[1.2] font-bold">
            AI writes Code.
            <br />
            Humans write Intent.
          </h1>
          <p className="text-[18px] leading-normal text-ink-muted max-w-108">
            *codeplain puts your team back in control of agentic coding through
            specification-driven development.
          </p>
        </div>
        <PrimaryButton href="/solutions/integrations-forge" className="!px-6 !py-3">
          Get Started with Integrations Forge
        </PrimaryButton>
      </Container>

      <div className="w-full max-w-(--container-content)">
        <HeroVisualToggle />
      </div>
    </section>
  );
}
