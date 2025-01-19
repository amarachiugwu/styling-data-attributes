import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Data Attributes",
  description:
    "Demonstrating how to target and style elements by data attributes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-poppins`}>{children}</body>
    </html>
  );
}
