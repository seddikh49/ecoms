import createNextIntlPlugin from 'next-intl/plugin';


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, // <--- أضف هذا السطر
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin();


export default  withNextIntl(nextConfig);;
