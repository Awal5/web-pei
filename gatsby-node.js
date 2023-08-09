/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path");
const axios = require("axios");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/data": path.resolve(__dirname, "src/data/index"),
        "@/components": path.resolve(__dirname, "src/components"),
        "@/context": path.resolve(__dirname, "src/context/"),
        "@/assets": path.resolve(__dirname, "src/assets/"),
        "@/css": path.resolve(__dirname, "src/assets/css/"),
        "@/images": path.resolve(__dirname, "src/assets/images/"),
        "@/hooks": path.resolve(__dirname, "src/hooks/"),
        "@/config": path.resolve(__dirname, "src/config"),
      },
    },
  });
};
