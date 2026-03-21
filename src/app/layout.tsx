import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Agent Marketplace | @samdevrel",
  description: "Deploy autonomous AI agents. Research, sales, support, content, engineering, finance.",
  keywords: ["AI agent", "marketplace", "autonomous", "GPT-5", "Claude 4", "Gemini 3"],
  authors: [{ name: "Sam", url: "https://x.com/samdevrel" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
