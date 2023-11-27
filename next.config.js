/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io", "res.cloudinary.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
