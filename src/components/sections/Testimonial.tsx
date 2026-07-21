import Container from "@/components/Container";

export default function Testimonial() {
  return (
    <section className="py-24 max-[760px]:py-16.5">
      <Container>
        <div className="flex flex-col items-center text-center">
          <div className="text-[clamp(30px,5vw,52px)] font-medium tracking-tight text-navy leading-[1.05] mb-2">
            From 2 weeks to 1 day{" "}
            <span className="text-accent">per integration.</span>
          </div>
          <div className="font-mono text-xs tracking-wide uppercase text-muted mb-9.5">
            Incode · Integrations Forge
          </div>
          <div
            aria-hidden="true"
            className="font-serif text-[46px] leading-[0.6] text-accent mb-4.5"
          >
            &ldquo;
          </div>
          <blockquote className="text-[clamp(22px,3vw,28px)] font-medium leading-[1.4] tracking-tight max-w-[28ch] mb-7.5">
            *codeplain helped us seamlessly integrate our recent acquisition
            into Incode&apos;s platform, freeing developers from drudge work.
          </blockquote>
          <div className="flex items-center gap-3.25">
            <div
              aria-hidden="true"
              className="w-11.5 h-11.5 rounded-full bg-navy text-white flex items-center justify-center font-medium text-sm"
            >
              JJ
            </div>
            <div className="text-left">
              <div className="font-medium text-[15px]">Jovan Jovanović</div>
              <div className="font-mono text-[13px] text-[#5B6B8C]">
                CTO, Incode
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
