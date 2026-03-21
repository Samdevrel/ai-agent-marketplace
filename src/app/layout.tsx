import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Agent Marketplace | @samdevrel",
  description: "Discover and deploy autonomous AI agents for research, development, business, and more.",
  keywords: ["AI agent", "marketplace", "agentic AI", "automation", "productivity"],
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
