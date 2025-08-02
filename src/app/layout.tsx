import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

// Load Inter font for non-Apple devices
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Devarshi Wadadkar Portfolio",
  description: "AI-powered portfolio with a chatbot that talks all about me — skills, experience, and more!",
  keywords: [
    "Devarshi", 
    "Portfolio", 
    "Developer", 
    "AI", 
    "Interactive", 
    "Memoji", 
    "Web Development",
    "Full Stack",
    "Next.js",
    "React",
    "Python",
    "Machine Learning",
    "Data Science",
    "AI",
    "Deep Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Streamlit",
    "GenAI",
    "AI Agent",
    "AI Chatbot",
    "AI Assistant",
    "AI Chatbot",
  ],
  authors: [
    {
      name: "Devarshi Wadadkar",
      url: "http://localhost:3000",
    },
  ],
  creator: "Devarshi Wadadkar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "http://localhost:3000",
    title: "Devarshi Wadadkar Portfolio",
    description: "AI-powered portfolio with a chatbot that talks all about me — skills, experience, and more!",
    siteName: "Devarshi Wadadkar Portfolio",
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
          "min-h-screen bg-background font-sans antialiased transition-colors duration-300",
          inter.variable,
        )}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
        >
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