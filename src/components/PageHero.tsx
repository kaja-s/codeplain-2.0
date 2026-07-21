import { ReactNode } from "react";
import Container from "./Container";

export default function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="pt-20 pb-14">
      <Container>
        <p className="font-mono text-sm text-accent mb-5">{eyebrow}</p>
        <h1 className="text-[clamp(30px,4.6vw,46px)] leading-[1.08] max-w-[18ch] mb-5.5">
          {title}
        </h1>
        {children && (
          <p className="text-[17px] text-text-body max-w-[56ch]">{children}</p>
        )}
      </Container>
    </section>
  );
}
