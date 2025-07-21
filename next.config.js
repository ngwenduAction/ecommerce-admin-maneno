/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // Your allowed domains for images
  },
  experimental: {
    // Remove "appDir" if it's present
  },
};

module.exports = nextConfig;
