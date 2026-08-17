export default function Chevron({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block text-[11px] leading-none opacity-50 ${className}`}
    >
      {">"}
    </span>
  );
}
