// next.config.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // generate static pages
  images: {
    loader: 'custom',
    loaderFile: './app/lib/imageLoader.ts',
  },
  // Enable experimental Turbopack support
  experimental: {
    turbo: {
      "enabled": true,
    }
    // Optional: specify any Turbopack-specific configurations
    // turbopack: {
    //   // Your Turbopack configurations
    // },
  },
  reactStrictMode: true,
  // Remove any Webpack-specific configurations if possible
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   // Custom Webpack configurations
  //   return config;
  // },
};

module.exports = nextConfig;
