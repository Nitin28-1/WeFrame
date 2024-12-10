/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: true, // Ensure Swiper's ESM compatibility
  },
};

module.exports = nextConfig;
