import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import Providers from "@/components/providers";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

const title = "OG Tester";
const description =
  "Trust your Open Graph tags. OG Tester is a tool to help you debug and preview your meta, Twitter, and Open Graph tags.";
const ogImageUrl = "https://ogtester.app/og.png";
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    locale: "en_US",
    siteName: "OG Tester",
    title,
    description,
    url: "https://ogtester.app",
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "OG Tester",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@thealexkates",
    description,
    site: "@thealexkates",
    title,
    images: [
      {
        url: ogImageUrl,
        alt: "OG Tester",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "container")}>
        <Providers>
          <div className="flex h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
