import type { Metadata } from "next";
import { Inter, Fira_Code, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/lib/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Aditya Chutia | Full-Stack Developer",
  description:
    "Full-Stack Developer & AI Enthusiast based in Osaka, Japan. Building intelligent applications with Python, Django, React, and AI/ML technologies.",
  keywords: [
    "Aditya Chutia",
    "Full-Stack Developer",
    "AI Developer",
    "Python",
    "Django",
    "React",
    "Japan",
    "Osaka",
    "Software Engineer",
    "チュティア アディティア",
    "フルスタック開発者",
  ],
  authors: [{ name: "Aditya Chutia" }],
  openGraph: {
    title: "Aditya Chutia | Full-Stack Developer",
    description:
      "Full-Stack Developer & AI Enthusiast based in Osaka, Japan. Building intelligent applications with Python, Django, React, and AI/ML technologies.",
    url: "https://adityachutiaportfolio.vercel.app",
    siteName: "Aditya Chutia Portfolio",
    locale: "en_US",
    alternateLocale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Chutia | Full-Stack Developer",
    description:
      "Full-Stack Developer & AI Enthusiast based in Osaka, Japan.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable} ${notoSansJP.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
