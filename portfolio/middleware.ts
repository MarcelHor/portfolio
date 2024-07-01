import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'cs'],
    defaultLocale: 'en'
});

export const config = {
    // Match only internationalized pathnames
    matcher: [
        '/', '/(en|cs)', '/(en|cs)/projects', '/(en|cs)/projects/[slug]', '/(en|cs)/not-found', '/(en|cs)/[...rest]',
        '/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest|sitemap.xml).*)'
    ]
}

