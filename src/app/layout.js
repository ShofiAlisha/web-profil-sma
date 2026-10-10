import "./globals.css";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "SMA Laboratorium UPGRIS",
  description:
    "Website profil SMA Laboratorium Universitas PGRI Semarang.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${jakartaSans.variable} ${playfair.variable} flex min-h-screen flex-col bg-gray-50 text-gray-800`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}