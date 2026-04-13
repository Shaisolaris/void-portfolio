/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/void-portfolio',
  assetPrefix: '/void-portfolio/',
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
}
export default nextConfig
