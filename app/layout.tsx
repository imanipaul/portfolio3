import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { MobileNav } from "@/components/MobileNav";
import { SidebarWrapper } from "@/components/SidebarWrapper";
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
    description:
      "Software Engineer based in New York. Previously Nike / S23NYC.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${dmSans.variable} ${dmMono.variable} antialiased`}>
        <MobileNav />
        <div className="site-layout">
          <SidebarWrapper>
            <div>
              <Header />
              <Nav />
            </div>
            <PanelFooter />
          </SidebarWrapper>
          <main className="main-panel">{children}</main>
        </div>
      </body>
    </html>
  );
}
