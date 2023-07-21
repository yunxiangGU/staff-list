import "./globals.css";
import "@shoelace-style/shoelace/dist/themes/light.css";
import type { Metadata } from "next";
import { Work_Sans, Nunito_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: "Staff List",
  description: "Staff List",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${nunitoSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
