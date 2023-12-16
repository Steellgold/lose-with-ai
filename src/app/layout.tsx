import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import type { Component } from "@/lib/utils/component";
import type { PropsWithChildren } from "react";
import { Providers } from "./providers";
import { SuperMegaCooooolNavbar } from "@/lib/utils/navbar";
import { cn } from "@nextui-org/react";

const n = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lose with AI",
  description: "Project for Supabase Hackathon 2023 on Launch Week X",
  applicationName: "Lose with AI - Supabase Hackathon 2023",
  keywords: ["supabase", "hackathon", "2023", "lose", "weight", "ai"]
};

const Layout: Component<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={cn("overflow-x-hidden", n.className)}>
        <Providers>
          <SuperMegaCooooolNavbar />
          <main className="max-w-5xl mx-auto px-6 m-6">{children}</main>
        </Providers>
      </body>
    </html>
  );
};

export default Layout;