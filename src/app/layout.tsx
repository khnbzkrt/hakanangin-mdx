import AppLayout from "@/components/app-layout";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Hakan Angın Blog Sitesi",
    description: "Hakan Angın kişisel blog sitesi. Blog içeriğinde yazılım hayatımdaki tecrübelerimi paylaşıyorum.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Script
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7940059310086042"
                crossOrigin="anonymous"
            ></Script>
            <body className={inter.className}>
                <AppLayout>{children}</AppLayout>
            </body>
            <GoogleAnalytics gaId="GTM-593634GH" />
            <GoogleTagManager gtmId="G-QV271QJ8TW" />
        </html>
    );
}
