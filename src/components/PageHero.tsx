import { ReactNode } from "react";
import Container from "./Container";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

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
        <Paragraph size="custom" className="font-mono text-sm text-brand-blue mb-5">
          {eyebrow}
        </Paragraph>
        <Heading as="h1" size="h1" className="max-w-[18ch] mb-5.5">
          {title}
        </Heading>
        {children && (
          <Paragraph size="custom" className="text-[17px] text-ink-muted max-w-[56ch]">
            {children}
          </Paragraph>
        )}
      </Container>
    </section>
  );
}
