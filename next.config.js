/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/chat",
        destination: "https://discord.gg/5crMTTt6",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/uploadfly",
        permanent: true,
      },
      {
        source: "/docs",
        destination: "https://docs.uploadfly.co",
        permanent: true,
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
