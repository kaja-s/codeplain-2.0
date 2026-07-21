import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "*codeplain: Code should be regenerated, not maintained",
  description:
    "Plain is the source of truth. *codeplain turns it into production code with no human in the loop. When something breaks, you regenerate. You don't maintain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
