/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,

    // ⚠️ PAS d'optimisations agressives sur mutualisé
    experimental: {
        webpackMemoryOptimizations: false,
    },

    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },

    webpack: (config) => {
        // 🔥 TRÈS IMPORTANT : laisser webpack tranquille
        config.cache = false;
        return config;
    },
};

export default nextConfig;
