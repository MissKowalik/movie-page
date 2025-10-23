import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";


const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My-MDB",
  description: "Movie page created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${afacad.variable} ${afacad.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
