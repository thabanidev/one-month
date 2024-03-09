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
  applicationName: "One Month",
  keywords: ["budgeting", "money", "finance"],
  creator: "Thabani Takwena",
  manifest: "/site.webmanifest",
  icons: [
    {
      rel: "shortcut icon",
      url: "/assets/images/logo.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/assets/images/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/assets/images/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/assets/images/favicon-16x16.png",
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
            termsPageUrl: 'https://clerk.com/terms',
            logoImageUrl: '/assets/images/logo.png',
            logoPlacement: 'outside'
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
