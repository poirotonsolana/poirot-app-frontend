import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
const space = Space_Grotesk({ subsets: ["latin"] });
import Layout from '../../components/Layout'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopButtonsNav from "../../components/TopButtonsNav";
import AppKitProvider from "../../config/context";
import { cookieToInitialState } from 'wagmi'
import { headers } from 'next/headers'
import { config} from '../../config'



export const metadata: Metadata = {
  title: "Poirot - Open Platform For Conducting Private or Open Competitive Security Audits",
  description: "Poirot - a decentralized application (dApp) on the Solana ecosystem using the Next.js framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html lang="en" className={space.className}>
      <body>
          <TopButtonsNav/>
          <ToastContainer />
          <AppKitProvider initialState={initialState}>
            <Layout>
              {children}
            </Layout>
          </AppKitProvider>
      </body>
    </html>
  );
}
