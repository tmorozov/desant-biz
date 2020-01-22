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

const articles = content.map(({id, title, alias, fulltext, introtext, created_by, sectionid, catid}) => {
  const categoryPart = categoriesById[catid] ? `/${categoriesById[catid].alias}` : '';
  const sectionPart = sectionsById[sectionid] ? `/${sectionsById[sectionid].alias}` : '';
  const contentPart = `/${id}-${alias}`;

  const author = users[created_by];
  const pageContent = fulltext || introtext;
  const path = [sectionPart, categoryPart, contentPart].join('');
  return {
    id, sectionid, catid, title, author, pageContent, path
  }
});

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  articles.forEach(({title, author, pageContent, path}) => {
    createPage({
      path,
      component: require.resolve("./src/templates/basicTemplate.js"),
      context: {
        title,
        author,
        pageContent,
      }
    })
  })

  categories.forEach(({id, title, alias, section}) => {
    const sectionPart = sectionsById[section] ? `/${sectionsById[section].alias}` : '';
    const categoryArticles = articles
      .filter(art => art.catid === id)
      .sort((a, b) => a.order-b.order);
    const path = [sectionPart, `/${alias}`].join('');
    console.log("Cat:", path, title);
    createPage({
      path,
      component: require.resolve("./src/templates/sectionTemplate.js"),
      context: {
        title,
        articles: categoryArticles
      }
    })
  });

  sections.forEach(({id, title, alias}) => {
    const sessionArticles = articles
      .filter(art => art.sectionid === id)
      .sort((a, b) => a.order-b.order);

    createPage({
      path: `/${alias}`,
      component: require.resolve("./src/templates/sectionTemplate.js"),
      context: {
        title,
        articles: sessionArticles
      }
    })
  })

}