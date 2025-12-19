/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    reactCompiler: false, // Désactivé pour économiser la mémoire
    experimental: {
        webpackMemoryOptimizations: true, // Optimisation mémoire
    },
};

export default nextConfig;
