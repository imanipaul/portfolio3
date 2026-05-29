import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Nav } from "@/components/Nav";
import { PanelFooter } from "@/components/PanelFooter";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Imani Paul — Software Engineer",
  description: "Software Engineer based in New York. Previously Nike / S23NYC.",
  openGraph: {
    title: "Imani Paul — Software Engineer",
    description: "Software Engineer based in New York. Previously Nike / S23NYC.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmMono.variable} antialiased`}>
        <div className="site-layout">
          <aside className="sidebar">
            <div>
              <Header />
              <Nav />
            </div>
            <PanelFooter />
          </aside>
          <main className="main-panel">{children}</main>
        </div>
      </body>
    </html>
  );
}
