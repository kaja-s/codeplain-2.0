import { ReactNode } from "react";

export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-(--container-content) px-8 max-[760px]:px-[22px] ${className}`}>
      {children}
    </div>
  );
}
