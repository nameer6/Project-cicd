/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Other configurations...
  target: 'experimental-serverless-trace',
  output: 'out',
};

module.exports = nextConfig;
