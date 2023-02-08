/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "image.tmdb.org",
      "cdn.pixabay.com",
      "www.99corporates.com",
    ],
  },
};
