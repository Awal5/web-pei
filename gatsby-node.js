/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path");

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
      },
    },
  });
};

// exports.createPages = async ({ actions, graphql }) => {
//   const { createPage } = actions;

//   const response = await Axios.get("http://localhost:4000/blog/articles");

//   response.data.forEach(node => {
//     createPage({
//       path: `/articleDetail/${node.slug}`,
//       component: path.resolve("./src/pages/articleDetail.js"),
//       context: {
//         slug: node.slug,
//       },
//     });
//   });
// };
