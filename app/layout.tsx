import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ML Manager - Gestão Mercado Livre",
  description: "Plataforma de gestão completa para logistas do Mercado Livre",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased bg-slate-50`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
