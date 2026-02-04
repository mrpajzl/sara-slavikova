import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sára Slavíková | Event Management & HR Services",
  description: "Profesionální event management a vzdálená HR podpora pro moderní firmy. Komplexní organizace firemních akcí a HR služby na míru.",
  keywords: ["event management", "HR services", "firemní akce", "teambuilding", "recruitment", "HR podpora"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
