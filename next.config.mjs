/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "brandslogos.com",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                pathname: "/images/yl9xajmz/production/**",
            },
        ],
    },
};

export default nextConfig;
