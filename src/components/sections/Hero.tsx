import Container from "@/components/Container";
import { PrimaryButton } from "@/components/Buttons";
import HeroVisualToggle from "@/components/HeroVisualToggle";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import InstallCommand from "@/components/InstallCommand";

export default function Hero() {
  return (
    <section className="bg-white text-ink flex flex-col items-center gap-20 px-16 py-28 max-md:px-6 max-md:py-16 max-md:gap-12">
      <Container className="flex flex-col items-center gap-8 max-w-3xl!">
        <div className="flex flex-col items-center gap-6 text-center">
          <Heading as="h1" size="display" className="text-brand-blue">
            AI writes Code.
            <br />
            Humans write Intent.
          </Heading>
          <Paragraph size="custom" className="text-md leading-normal text-ink max-w-108">
            *codeplain puts your team back in control of agentic coding through
            specification-driven development.
          </Paragraph>
        </div>
        <PrimaryButton href="/solutions/integrations-forge" className="px-6 py-3 uppercase">
          Get Started
        </PrimaryButton>
      </Container>

      <div className="w-full max-w-(--container-content)">
        <HeroVisualToggle />
      </div>

      <div className="flex flex-col items-center gap-3">
        <Paragraph size="small" className="text-ink-muted">
          install *codeplain on macOS, Linux, and Windows
        </Paragraph>
        <InstallCommand />
      </div>
    </section>
  );
}
