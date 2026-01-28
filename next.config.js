/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    // Optimize for production
    productionBrowserSourceMaps: false,
    // Enable React strict mode
    reactStrictMode: true,
};

export default nextConfig;
