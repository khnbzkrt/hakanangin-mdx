import AppLayout from "@/components/app-layout";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hakan Angın Blog Sitesi",
  description:
    "Hakan Angın kişisel blog sitesi. Blog içeriğinde yazılım hayatımdaki tecrübelerimi paylaşıyorum.",
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
      <GoogleAnalytics gaId="GTM-593634GH" />
    </html>
  );
}
