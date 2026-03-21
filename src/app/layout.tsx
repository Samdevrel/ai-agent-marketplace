import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Agent Marketplace | @samdevrel",
  description: "Browse and deploy AI agents for research, development, productivity, and more.",
  keywords: ["AI agent", "marketplace", "agents", "automation", "open source", "GPT"],
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
