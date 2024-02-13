/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },
  images: {
    domains: ['m.media-amazon.com', 'ia.media-imdb.com'],
  },
}

module.exports = nextConfig;
