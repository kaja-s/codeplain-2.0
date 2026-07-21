import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="py-24 max-[760px]:py-16.5">
          <Container>
            <p className="font-mono text-sm text-accent mb-5">404</p>
            <h1 className="text-[clamp(30px,4.6vw,46px)] leading-[1.08] max-w-[18ch] mb-5.5">
              This page regenerated into nothing.
            </h1>
            <p className="text-[17px] text-text-body max-w-[56ch] mb-8">
              The page you&apos;re after doesn&apos;t exist. Head back home, or see the platform.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Button href="/" variant="primary">Back home</Button>
              <Button href="/platform" variant="ghost">See the platform</Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
