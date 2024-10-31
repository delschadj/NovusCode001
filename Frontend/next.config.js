const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
    images: {
        domains: ["utfs.io"],
    },
    eslint: {
        ignoreDuringBuilds: true, // Add this line to ignore ESLint warnings during builds
    },
    typescript: {
        ignoreBuildErrors: true, // Skip type checking during build
    },
    devIndicators: {
        autoPrerender: false, // Disable auto prerender indicator
    },
    experimental: {
        optimizeCss: true,
    },
});

module.exports = nextConfig;
