import "./globals.css";
import Navbar from "@/components/Navbar";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata = {
  title: "BITS Pilani Consulting Club",
  description: "Official Consulting Club of BITS Pilani",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${playfair.variable} ${inter.variable}`}
    >
      <body className="bg-neutral-100 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 antialiased font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
