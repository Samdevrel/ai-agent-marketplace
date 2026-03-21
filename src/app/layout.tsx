import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Agent Marketplace | @samdevrel",
  description: "Discover, deploy, and monetize AI agents. 5,700+ agents available.",
  keywords: ["AI agents", "marketplace", "automation", "deployment", "OpenClaw"],
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
