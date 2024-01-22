import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";

export const metadata = {
  title: 'Shivam Mishra • Developer',
  description: 'Full-Stack developer, Android enthusiast, and learner.',
  image: 'https://raw.githubusercontent.com/mshivam019/mshivam019/master/Banner.png',
  type: 'website',
}

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <meta
                name="google-site-verification"
                content="EAXj6V5Le6nzMLOyiulp0wXZ8cbCqbZCle9g77i6NWs"
            />
      <meta name="robots" content="follow, index" />
            <meta content={metadata.description} name="description" />
            <meta
                property="og:url"
                content={`https://shivam-mishra.vercel.app/`}
            />
            <link rel="canonical" href={`https://shivam-mishra.vercel.app/`} />
            <meta property="og:type" content={metadata.type} />
            <meta property="og:site_name" content="Shivam Mishra" />
            <meta property="og:description" content={metadata.description} />
            <meta property="og:title" content={metadata.title} />
            <meta property="og:image" content={metadata.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@mshivam0019" />
            <meta name="twitter:title" content={metadata.title} />
            <meta name="twitter:description" content={metadata.description} />
            <meta name="twitter:image" content={metadata.image} />
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
