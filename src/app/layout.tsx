import AppLayout from "@/components/app-layout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hakan Angın Blog Sitesi",
  description:
    "Hakan Angın kişisel blog sitesi. Blog içeriğinde yazılım hayatımdaki tecrübelerimi paylaşıyorum.",
  name: "google-adsense-account",
  content: "ca-pub-7940059310086042",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
