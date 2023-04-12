const postcss = require("rollup-plugin-postcss");
const images = require("@rollup/plugin-image");

module.exports = {
  rollup(config, options) {
    config.plugins = [
      postcss({ module: true }),
      images({ include: ["**/*.png", "**/*.jpg", "**/*.webp"] }),
      ...config.plugins,
    ];
    return config;
  }
};