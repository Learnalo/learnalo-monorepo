const withNextIntl = require("next-intl/plugin")();
module.exports = withNextIntl({
  reactStrictMode: true,
  transpilePackages: ["ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img-c.udemycdn.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
});
