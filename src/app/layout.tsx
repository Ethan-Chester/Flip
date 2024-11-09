'use client';

// import { usePathname } from 'next/navigation';
// import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Noto_Sans } from '@next/font/google'
import { Oswald } from "@next/font/google";

const NotoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-noto-sans',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-oswald',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${NotoSans.variable} ${oswald.variable} bg-white font-sans`}> 
        {children}
      </body>
    </html>
  );
}
