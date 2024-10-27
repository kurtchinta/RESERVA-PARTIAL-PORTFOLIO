/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    remotePatterns: [
      // Add any remote image patterns if needed
    ],
    unoptimized: true,
  },
};
