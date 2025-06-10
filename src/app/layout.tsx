import type { Metadata } from "next";
import { Geist, Geist_Mono, Ubuntu, Sansita, Kanit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import SmoothScrollProvider from "@/components/shared/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const sansita = Sansita({
  variable: "--font-sansita",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nikita Quazi - UX/UI Designer with Front-end Skills",
  description:
    "UX/UI designer portfolio combining analytical thinking with creative expression to create accessible and engaging digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ubuntu.variable} ${sansita.variable} ${kanit.variable} antialiased min-h-screen`}
        suppressHydrationWarning={true}
      >
        <SmoothScrollProvider>
          <Navigation />
          <main className="min-h-screen">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
