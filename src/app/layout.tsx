import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NavigationProvider } from "@/lib/navigation";
import { ThemeProvider } from "@/lib/theme";

export const metadata: Metadata = {
  title: "백승현 — Frontend Developer",
  description:
    "Frontend developer building thoughtful web experiences with AI-native workflows and strong design sensibility.",
  keywords: [
    "frontend developer",
    "UI developer",
    "React",
    "Next.js",
    "TypeScript",
  ],
  openGraph: {
    title: "백승현 — Frontend Developer",
    description:
      "Frontend developer building thoughtful web experiences with AI-native workflows and strong design sensibility.",
    type: "website",
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t)t=window.matchMedia('(prefers-color-scheme:light)').matches?'light':'dark';if(t==='light')document.documentElement.classList.add('light')}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <ThemeProvider>
          <NavigationProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </NavigationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
