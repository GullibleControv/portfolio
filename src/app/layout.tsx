import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
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
  ],
  authors: [{ name: "Aditya Chutia" }],
  openGraph: {
    title: "Aditya Chutia | Full-Stack Developer",
    description:
      "Full-Stack Developer & AI Enthusiast based in Osaka, Japan. Building intelligent applications with Python, Django, React, and AI/ML technologies.",
    url: "https://adityachutia.dev",
    siteName: "Aditya Chutia Portfolio",
    locale: "en_US",
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
      <body className={`${inter.variable} ${firaCode.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
