import { ReactNode } from "react";

export function Terminal({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`font-mono text-sm bg-navy text-[#E4EAF7] rounded-xl px-5 py-[18px] max-w-[460px] ${className}`}
      aria-label={label}
    >
      <div className="text-[#7183AB] text-xs mb-3">{label}</div>
      {children}
    </div>
  );
}

export function TerminalPrompt({
  symbol = "$",
  children,
}: {
  symbol?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <span className="text-accent-bright">{symbol}</span> {children}
    </div>
  );
}

export function TerminalOk({
  children,
  withCursor = false,
}: {
  children: ReactNode;
  withCursor?: boolean;
}) {
  return (
    <div className="text-[#9BB8F2]">
      &#10003; {children}
      {withCursor && (
        <span
          aria-hidden="true"
          className="inline-block w-2 h-[15px] bg-accent-bright ml-0.5 -mb-0.5 animate-[blink_1.1s_step-end_infinite] motion-reduce:animate-none"
        />
      )}
    </div>
  );
}
