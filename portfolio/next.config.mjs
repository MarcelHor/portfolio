import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin("./locale/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, swcMinify: true, output: "standalone",
};

export default withNextIntl(nextConfig);