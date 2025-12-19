/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,

    // Config vide pour Turbopack (Next.js 16+)
    turbopack: {},

    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
};

export default nextConfig;
