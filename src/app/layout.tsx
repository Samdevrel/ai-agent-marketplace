import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Agent Marketplace | @samdevrel",
  description: "Discover, deploy, and scale AI agents for your workflows. Customer service, code review, research, and more.",
  keywords: ["AI agent", "marketplace", "OpenAI", "automation", "chatbot"],
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
