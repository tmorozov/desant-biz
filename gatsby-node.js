/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const byId = (arr) => arr.reduce((acc, cur) => {
  acc[cur.id] = cur;
  return acc;
}, {});

const content = require("./content/jos_content.json")[2].data;
const categories = require("./content/jos_categories.json")[2].data;
const categoriesById = byId(categories);
const sections = require("./content/jos_sections.json")[2].data;
const sectionsById = byId(sections);
const users = require("./content/users.json");

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  content.forEach(({id, title, alias, fulltext, introtext, created_by, sectionid, catid}) => {
    const categoryPart = categoriesById[catid] ? `/${categoriesById[catid].alias}` : '';
    const sectionPart = sectionsById[sectionid] ? `/${sectionsById[sectionid].alias}` : '';
    const contentPart = `/${id}-${alias}`;
    createPage({
      path: [sectionPart, categoryPart, contentPart].join(''),
      component: require.resolve("./src/templates/basicTemplate.js"),
      context: {
        title,
        author: users[created_by],
        pageContent: fulltext || introtext,
      }
    })
  })
}