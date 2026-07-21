import Container from "@/components/Container";
import Button from "@/components/Button";

export default function FinalCta() {
  return (
    <section className="py-24 max-[760px]:py-16.5 bg-navy text-white text-center">
      <Container>
        <h2 className="text-[clamp(28px,4vw,42px)] leading-[1.08] max-w-[18ch] mx-auto mb-7.5">
          Stop maintaining code you never wanted to keep.
        </h2>
        <div className="flex gap-3 justify-center flex-wrap">
          <Button href="/book-a-demo" variant="onnavy">
            Book a demo
          </Button>
          <Button href="/platform" variant="onnavy-ghost">
            See the platform
          </Button>
        </div>
        <p className="font-mono mt-5.5 text-sm text-[#AEBBD6]">
          New users get 50 rendering credits.
        </p>
      </Container>
    </section>
  );
}
