import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "./globals.css"
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import Head from "next/head";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "One Month",
  description: "A monthly budgeting app, and birthday present for my mom.",
  keywords: ["budgeting", "money", "finance", "personal finance", "budget", "monthly budget", "monthly budgeting", "budget app", "money app", "finance app", "personal finance app", "budgeting app", "monthly budgeting app", "budgeting app for mom", "monthly budgeting app for mom", "budget app for mom", "money app for mom", "finance app for mom", "personal finance app for mom", "budgeting app", "monthly budgeting app", "budget app", "money app", "finance app", "personal finance app"],
  creator: "Thabani Takwena",
  manifest: "/site.webmanifest",
  icons: [
    {
      rel: "shortcut icon",
      url: "/images/logo.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/images/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/images/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/images/favicon-16x16.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={
        {
          layout: {
            socialButtonsPlacement: 'bottom',
            socialButtonsVariant: 'auto',
          },
          variables: {
            colorPrimary: "#173d4c",
          }
        }
      }
    >
      <html lang="en">
        <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
