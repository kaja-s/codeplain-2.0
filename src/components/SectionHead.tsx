import { ReactNode } from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

export default function SectionHead({
  kicker,
  title,
  children,
  className = "",
}: {
  kicker?: string;
  title: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-[52ch] mb-13 ${className}`}>
      {kicker && (
        <Paragraph size="eyebrow" className="text-brand-blue mb-4">
          {kicker}
        </Paragraph>
      )}
      <Heading as="h2" className="mb-4 text-ink">
        {title}
      </Heading>
      {children && (
        <Paragraph size="lead" className="text-ink-muted">
          {children}
        </Paragraph>
      )}
    </div>
  );
}
