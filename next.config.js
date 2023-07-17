/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/chat" || "/community" || "/discord",
        destination: "https://discord.gg/5crMTTt6",
        permanent: true,
      },
      {
        source: "/github" || "/opensource",
        destination: "https://github.com/uploadfly",
        permanent: true,
      },
      {
        source: "/docs",
        destination: "https://docs.uploadfly.cloud",
      },
    ];
  },
};

module.exports = nextConfig;
