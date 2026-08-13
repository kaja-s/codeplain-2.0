import { ReactNode } from "react";

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
        <p className="font-mono text-xs tracking-wide text-[#0A1FD4] uppercase mb-4">
          {kicker}
        </p>
      )}
      <h2 className="text-[clamp(27px,3.6vw,38px)] leading-[1.1] font-medium tracking-tight mb-4 text-[#1a1a1a]">
        {title}
      </h2>
      {children && (
        <p className="text-[#4a5678] text-lg">{children}</p>
      )}
    </div>
  );
}
