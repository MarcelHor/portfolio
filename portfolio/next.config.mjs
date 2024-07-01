import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin("./locale/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    output: "standalone",
    webpack: (config, { dev }) => {
        if (!dev) {
            config.resolve.alias = {
                ...config.resolve.alias,
                'react-dom$': 'react-dom/profiling',
                'scheduler/tracing': 'scheduler/tracing-profiling',
            };
        }
        return config;
    },
};

export default withNextIntl(nextConfig);