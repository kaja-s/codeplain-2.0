import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="bg-white text-ink">
        <section className="py-24 max-md:py-16.5">
          <Container>
            <Paragraph size="custom" className="font-mono text-sm text-brand-blue mb-5">
              404
            </Paragraph>
            <Heading as="h1" size="h1" className="max-w-[18ch] mb-5.5">
              This page regenerated into nothing.
            </Heading>
            <Paragraph size="custom" className="text-[17px] text-ink-muted max-w-[56ch] mb-8">
              The page you&apos;re after doesn&apos;t exist. Head back home, or see the platform.
            </Paragraph>
            <div className="flex gap-3 flex-wrap">
              <PrimaryButton href="/">Back home</PrimaryButton>
              <SecondaryButton href="/plain">See the platform</SecondaryButton>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
