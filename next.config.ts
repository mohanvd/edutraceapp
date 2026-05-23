import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    compress: true,
    poweredByHeader: false,
    outputFileTracingRoot: path.join(__dirname),
    turbopack: {
        resolveAlias: {
            '@': '.',
        },
    },
    experimental: {
        optimizePackageImports: ['katex', 'highlight.js'],
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: '**.githubusercontent.com',
            },
        ],
    },
};

export default nextConfig;
