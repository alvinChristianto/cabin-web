import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default : "The Cabin Hotel",
    template : "%s | The Cabin Hotel"
  },
  description:
    "The Cabin Hotel Group, jaringan Hotel terbaik di Yogyakarta yang mengedepankan pelayanan maksimal kepada tamu ",
  openGraph: {
    title: "The Cabin Hotel Group",
    type: "website",
    url: "https://thecabinhotelgroup.com/",
    description:
      "hotel, penginapan, yogyakarta, jogja, diy, malioboro, keraton",
    images: "/img/room1.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
