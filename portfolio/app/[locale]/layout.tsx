import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import type {Metadata} from "next";
import {Nunito} from "next/font/google";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import "../globals.css";

config.autoAddCss = false;
const inter = Nunito({subsets: ['latin'], weight: ['400', '700', '200']});

export default async function RootLayout({children, params: {locale}}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const messages = await getMessages();

    return (
        <html lang={locale}>
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </head>
        <body className={inter.className}>
        <CustomCursor/>
        <Header/>
        <main className={"w-full flex flex-col items-center justify-center"}>
            <NextIntlClientProvider messages={messages}>
                {children}
            </NextIntlClientProvider>
        </main>
        <Footer/>
        </body>
        </html>
    );
}
