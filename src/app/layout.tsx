import { Analytics } from "@vercel/analytics/react"
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { Github, Linkedin, Download } from 'lucide-react';
import { LeetCodeIcon } from '@/components/ui/leetcode-icon';

// Load Inter font for non-Apple devices
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Toukoum Portfolio",
  description: "Interactive portfolio with an AI-powered Memoji that answers questions about me, my skills, and my experience",
  keywords: [
    "Toukoum", 
    "Portfolio", 
    "Developer", 
    "AI", 
    "Interactive", 
    "Memoji", 
    "Web Development",
    "Full Stack",
    "Next.js",
    "React"
  ],
  authors: [
    {
      name: "Toukoum",
      url: "https://toukoum.fr",
    },
  ],
  creator: "Toukoum",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://toukoum.fr",
    title: "Toukoum Portfolio",
    description: "Interactive portfolio with an AI-powered Memoji that answers questions about me",
    siteName: "Toukoum Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toukoum Portfolio",
    description: "Interactive portfolio with an AI-powered Memoji that answers questions about me",
    creator: "@toukoum",
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        sizes: "any",
      }
    ],
    shortcut: "/favicon.svg?v=2",
    apple: "/apple-touch-icon.svg?v=2",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Social and Resume Links */}
          <div className="absolute top-6 right-8 z-20 flex items-center gap-4">
            <a href="https://github.com/mohammed-nihad" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6 text-foreground transition-colors hover:text-muted-foreground" />
            </a>
            <a href="https://linkedin.com/in/mohammed-nihad" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-foreground transition-colors hover:text-muted-foreground" />
            </a>
            <a href="YOUR_LEETCODE_URL" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              <LeetCodeIcon className="h-6 w-6 text-foreground transition-colors hover:text-muted-foreground" fill="currentColor" />
            </a>
            <a
              href="/resume_giraud.pdf"
              download="Mohammed_Nihad_Resume.pdf"
              className="flex items-center gap-2 rounded-full border bg-white/30 px-3 py-1.5 text-sm font-medium text-black shadow-md backdrop-blur-lg transition hover:bg-white/60 dark:border-white dark:text-white dark:hover:bg-neutral-800"
              aria-label="Download Resume"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}