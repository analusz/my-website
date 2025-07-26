import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ana Luiza Ribeiro",
  description: "Criado com Next.js e TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-black`}>
          <PageTransition/>
        <header>

          <Navbar />

        </header>

        {children}
        
        <footer className="sm:bg-zinc-50 sm:px-10 dark:sm:bg-zinc-950">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
