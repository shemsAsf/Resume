import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Unbounded } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["200", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shems Asfouri | Web Resume & Portfolio",
  description: "Discover my projects, skills, and experience in computer science. Let's connect and build something amazing together!",
  keywords: "Shems Asfouri, web developer, software engineer, portfolio, resume, frontend, backend, full-stack, React, TypeScript",
  authors: [{ name: "Shems Asfouri" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${unbounded.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
