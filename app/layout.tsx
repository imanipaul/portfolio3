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
    description: "Software Engineer based in New York. Previously Nike / S23NYC.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${dmSans.variable} ${dmMono.variable} antialiased`}>
        <MobileNav />
        <div className="flex min-h-[calc(100vh-41px)] max-w-[1100px] mx-auto">
          <SidebarWrapper>
            <div>
              <Header />
              <Nav />
            </div>
            <PanelFooter />
          </SidebarWrapper>
          <main className="flex-1 max-w-[680px] px-[52px] pt-[56px] pb-[80px] md:max-lg:px-8 md:max-lg:pt-10 md:max-lg:pb-[60px] max-md:px-5 max-md:pt-7 max-md:pb-16 max-md:max-w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
