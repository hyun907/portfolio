import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "백승현 — Frontend Developer",
  description:
    "Frontend developer building thoughtful web experiences with AI-native workflows and strong design sensibility.",
  keywords: ["frontend developer", "UI developer", "React", "Next.js", "TypeScript"],
  openGraph: {
    title: "백승현 — Frontend Developer",
    description:
      "Frontend developer building thoughtful web experiences with AI-native workflows and strong design sensibility.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
