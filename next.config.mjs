/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    reactCompiler: false,
    experimental: {
        webpackMemoryOptimizations: true,
    },
    // Optimisations mémoire agressives
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    webpack: (config, { isServer }) => {
        // Réduire l'utilisation mémoire de webpack
        config.optimization = {
            ...config.optimization,
            minimize: true,
        };
        // Désactiver le cache si problème mémoire
        config.cache = false;
        return config;
    },
};

export default nextConfig;
