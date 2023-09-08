import "./globals.css";

import { Inter } from "next/font/google";
import { Layout } from "@/components/Layout";
import type { Metadata } from "next";
import clsx from "clsx";
import { notFound } from "next/navigation";
import { useLocale } from "next-intl";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const locale = useLocale();

  // Validate that the incoming `locale` parameter is a valid locale
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale} className={clsx(inter.className)}>
      <body className="overflow-x-hidden antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}