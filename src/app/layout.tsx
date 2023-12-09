import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { Component } from "@/lib/utils/component";
import type { PropsWithChildren } from "react";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lose with AI",
  description: "Project for Supabase Hackathon 2023 on Launch Week X"
};

export const Layout: Component<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default Layout;