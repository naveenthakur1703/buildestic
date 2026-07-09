import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const playfairDisplayHeading = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' });

const notoSans = Noto_Sans({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://buildestic.com"),

  title: {
    default: "Buildestic - Construction Calculators",
    template: "%s | Buildestic",
  },

  description:
    "Free online construction calculators for brick, concrete, cement, paint, steel, tile, mortar, and more. Fast, accurate, and easy to use.",

  keywords: [
    "Buildestic",
    "Construction Calculators",
    "Brick Calculator",
    "Concrete Calculator",
    "Cement Calculator",
    "Paint Calculator",
    "Tile Calculator",
    "Steel Weight Calculator",
    "Mortar Calculator",
    "Building Material Calculator",
  ],

  applicationName: "Buildestic",

  authors: [
    {
      name: "Buildestic",
      url: "https://buildestic.com",
    },
  ],

  creator: "Buildestic",

  publisher: "Buildestic",

  alternates: {
    canonical: "https://buildestic.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buildestic.com",
    siteName: "Buildestic",
    title: "Buildestic - Construction Calculators",
    description:
      "Free online construction calculators for brick, concrete, cement, paint, steel, tile, mortar, and more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Buildestic",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Buildestic - Construction Calculators",
    description:
      "Free online construction calculators for builders, contractors and homeowners.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", notoSans.variable, playfairDisplayHeading.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
