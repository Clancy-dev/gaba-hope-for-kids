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
  metadataBase:new URL('https://www.gabahopeforkids.org/'),
  title: 'Gaba Hope For Kids | Empowering Underprivileged Children & Youth in Uganda.',
  description: 'Gaba Hope For Kids in Wakiso Mutundwe, Kampala, Uganda supports children with education, healthcare, and empowerment. Contact us at +256 708 856553 or +256 787 343415.',
  applicationName: 'Gaba Hope For Kids',
  keywords: [
    "Gaba Hope For Kids",
    "Gaba Hope",
    "Gaba Hope For",
    "Gaba",
    "Charity for children",
    "Empowering youth Uganda",
    "Donate to children in need",
    "Support children Uganda",
    "Education for underprivileged children",
    "Youth empowerment Uganda",
    "Child welfare Uganda",
    "Gaba Hope Uganda",
    "Charitable organizations in Uganda",
    "Helping needy children Uganda",
    "Community support Uganda",
    "Education programs for children",
    "Children’s health programs Uganda",
    "Nonprofit for children Uganda",
    "Volunteer for children Uganda",
    "Support for vulnerable youth",
    "Children's rights Uganda",
    "Donate for children’s education",
    "Ugandan children’s charity",
    "Hope for children in Uganda",
    "Empower children and youth Uganda",
    "Youth development programs Uganda",
    "Donate to Gaba Hope For Kids",
    "Charity work in Kampala",
    "Wakiso children’s charity",
    "Helping children and youth Uganda",
    "Nonprofit donations Uganda",
    "Ugandan charity organizations",
    "Child welfare in Mutundwe"
  ],
  authors: [{name:'Clancy Ssekisambu | At Desishub'},{url:'https://desishub.com'}],
  creator: 'Clancy Ssekisambu',
  publisher: 'Clancy Ssekisambu',
  alternates:{
    canonical:'/',
    languages:{
      'en-US':'/en-US',
      'de-DE':'/de-DE',
    }
  

  },
  openGraph:{
    title:'Gaba Hope For Kids | Empowering Children & Youth in Need.',
    description: 'Gaba Hope For Kids in Wakiso Mutundwe, Kampala, Uganda supports children with education, healthcare, and empowerment. Contact us at +256 708 856553 or +256 787 343415.',
    url:'https://www.gabahopeforkids.org/',
    siteName: 'Gaba Hope For Kids',
    type:'website',
    locale:'en_US',
  },
  twitter:{
    title:'Gaba Hope For Kids | Empowering Children & Youth in Need.',
    description: 'Gaba Hope For Kids in Wakiso Mutundwe, Kampala, Uganda supports children with education, healthcare, and empowerment. Contact us at +256 708 856553 or +256 787 343415.',
    site: 'Gaba Hope For Kids',

  },
  
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
