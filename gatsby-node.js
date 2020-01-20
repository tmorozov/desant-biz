/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const content = require("./content/jos_content.json")[2].data;
const users = require("./content/users.json");

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  content.forEach(({title, alias, fulltext, introtext, created_by}) => {
    createPage({
      path: `/${alias}`,
      component: require.resolve("./src/templates/basicTemplate.js"),
      context: {
        title,
        author: users[created_by],
        pageContent: fulltext || introtext,
      }
    })
  })
}