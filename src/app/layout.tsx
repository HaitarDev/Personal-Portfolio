import type { Metadata } from "next";
import { Fira_Code as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/Sidebar";

import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "HaitarDev Portfolio",
  description: "This is my minimalist portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background font-sans antialiased ",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className=" flex relative ">
            {/* <ModalProvider /> */}
            {/* <Sidebar /> */}
            <main className="min-h-screen w-full">{children}</main>
          </div>
        </ThemeProvider>
        {/* <Toaster /> */}
      </body>
    </html>
  );
}
