import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Codeplain: AI writes Code. Humans write Intent.",
  description:
    "Codeplain puts your team back in control of agentic coding through specification-driven development.",
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
