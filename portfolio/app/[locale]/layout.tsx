import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import type {Metadata} from "next";
import {Nunito} from "next/font/google";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import "../globals.css";
import {locales} from "@/locale/i18n";

config.autoAddCss = false;
const inter = Nunito({subsets: ['latin'], weight: ['400', '700', '200']});

export const metadata: Metadata = {
    title: 'Marcel Horváth | Portfolio',
    description: 'Marcel Horváth, Software Engineer, Portfolio',
    keywords: [
        'Marcel Horváth',
        'Marcel Horvath Portfolio',
        'Portfolio',
        'Software Engineer',
        'Software Developer',
        'Web Developer',
        'Web Development',
        'Web applications',
        'Programming',
        'Custom Software Solutions',
        'Frontend',
        'Backend',
        'Consultation',
        'Developer',
        'Programátor',
        'Tvorba webových aplikací',
        'Vývojář',
        'Tvorba webových stránek',
    ],
    icons: [
       '/favicon.ico',
    ],
    openGraph: {
        type: 'website',
        url: 'https://marcel-horvath.com',
        title: 'Marcel Horváth | Portfolio',
        description: 'Marcel Horváth, Software Engineer, Portfolio',
        images: [
            {
                url: 'https://www.marcel-horvath.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.a188f25b.png&w=3840&q=75',
                width: 800,
                height: 600,
                alt: 'Marcel Horváth | Portfolio',
            },
        ],
    },
};

export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
}

export default async function RootLayout({children, params: {locale}}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    unstable_setRequestLocale(locale);
    const messages = await getMessages();

    return (
        <html lang={locale}>
        <body className={`${inter.className}`}>
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
