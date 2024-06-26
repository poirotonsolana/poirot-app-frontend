import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Layout from '../../components/Layout'

export const metadata: Metadata = {
  title: "Poirot App",
  description: "Poirot - a decentralized application (dApp) on the Solana ecosystem using the Next.js framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
          <Layout>
            {children}
          </Layout>
      </body>
    </html>
  );
}
