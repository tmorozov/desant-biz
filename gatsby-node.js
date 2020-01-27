/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const {articles, categories, sections, sectionsById} = require("./data/articles");

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  articles.forEach(({title, author, created, fulltext, introtext, path}) => {
    createPage({
      path,
      component: require.resolve("./src/templates/basicTemplate.js"),
      context: {
        title,
        author,
        created,
        fulltext,
        introtext
      }
    })
  })

  categories.forEach(({id, title, alias, section}) => {
    const sectionPart = sectionsById[section] ? `/${sectionsById[section].alias}` : '';
    const categoryArticles = articles
      .filter(art => art.catid === id)
      .sort((a, b) => a.order-b.order);
    const path = [sectionPart, `/${alias}`].join('');

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