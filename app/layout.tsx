import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://walking-with-jesus-taupe.vercel.app"),

  title: {
    default: "Walking With Jesus",
    template: "%s | Walking With Jesus",
  },

  description:
    "A peaceful Christian space for prayer, Scripture reflection, journaling, quiet time, and growing in your relationship with Jesus.",

  applicationName: "Walking With Jesus",

  keywords: [
    "Walking With Jesus",
    "Christian prayer",
    "Bible reflection",
    "Christian journaling",
    "Scripture",
    "quiet time with Jesus",
    "Christian encouragement",
    "relationship with Jesus",
  ],

  authors: [
    {
      name: "Daylise Hill",
    },
  ],

  creator: "Daylise Hill",

  openGraph: {
    title: "Walking With Jesus",
    description:
      "Come as you are. A peaceful Christian space for prayer, Scripture reflection, journaling, and quiet time with Jesus.",
    url: "https://walking-with-jesus-taupe.vercel.app",
    siteName: "Walking With Jesus",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Walking With Jesus",
    description:
      "A peaceful Christian space for prayer, Scripture reflection, journaling, and quiet time with Jesus.",
  },

  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}