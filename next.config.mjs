import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bovio-sas-gray.vercel.app',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'crehana-blog.imgix.net',
      },
      {
        protocol: 'https',
        hostname: 'serveiestacio.com',
      },
      {
        protocol: 'https',
        hostname: 'homepro.com.mx',
      },
      {
        protocol: 'https',
        hostname: '*.imgix.net',
      },
      {
        protocol: 'https',
        hostname: '*.com',
      },
      {
        protocol: 'https',
        hostname: '*.org',
      },
      {
        protocol: 'https',
        hostname: '*.net',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SERVER_URL:
      process.env.NEXT_PUBLIC_SERVER_URL || 'https://bovio-sas-gray.vercel.app',
  },
  reactStrictMode: true,
}

export default withPayload(nextConfig)
