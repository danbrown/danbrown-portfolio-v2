// const runtimeCaching = require("next-pwa/cache");
// const withPWA = require("next-pwa")({
//   dest: "public",
//   runtimeCaching,
//   disable: process.env.NODE_ENV === "development" ? true : false,
//   skipWaiting: true,
//   register: true,
// });

module.exports = {
  pageExtensions: ["jsx", "js", "mdx", "md", "ts", "tsx"],
  reactStrictMode: true,
  redirects: require("./next-redirect"),
  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack: (config) => {
    config.resolve.fallback = { fs: false, child_process: false };

    return config;
  },
};
