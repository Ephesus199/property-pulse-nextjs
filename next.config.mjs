/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // or '5mb', '20mb'
    },
  },
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  //   images: {
  //   domains: [
  //     'lh3.googleusercontent.com',
  //     'res.cloudinary.com',
  //   ],
  // },

};

export default nextConfig;
