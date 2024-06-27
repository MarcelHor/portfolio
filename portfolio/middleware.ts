import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'cs'],
    defaultLocale: 'en'
});

export const config = {
    // Match only internationalized pathnames
    matcher: [
        '/', '/(cs|en)/:path*',
        '/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest).*)'
    ]
}