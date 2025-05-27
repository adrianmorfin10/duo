import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope" // Opcional: para usar como variable CSS
});

export const metadata: Metadata = {
  title: "Duo Talent Agency",
  description: "Agencia de influencer marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={manrope.className}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}