import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </head>
        <body className={inter.className}>
        <Header/>
        <main
            className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-gradient-to-t from-base-200 to-base-100">
            {children}
        </main>
        </body>
        </html>
    );
}
