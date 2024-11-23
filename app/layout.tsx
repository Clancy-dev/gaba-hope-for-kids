import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// import { Inter } from 'next/font/google'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gaba Hope For Kids',
  description: 'Empowering children and youth since 2023',
}

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
        <Header />
        <main>{children}</main>
        <Footer />

        {/* <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body> */}
      
      </body>
    </html>
  );
}
