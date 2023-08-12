/** @type {import('next').NextConfig} */

const nextConfig = {
  // swcMinify: true,
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
