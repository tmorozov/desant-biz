const byId = (arr) => arr.reduce((acc, cur) => {
  acc[cur.id] = cur;
  return acc;
}, {});

const content = require("../content/jos_content.json")[2].data;
const categories = require("../content/jos_categories.json")[2].data;
const categoriesById = byId(categories);
const sections = require("../content/jos_sections.json")[2].data;
const sectionsById = byId(sections);
const users = require("../content/users.json");

const articles = content.map(({id, title, alias, fulltext, introtext, created, created_by, sectionid, catid}) => {
    const categoryPart = categoriesById[catid] ? `/${categoriesById[catid].alias}` : '';
    const sectionPart = sectionsById[sectionid] ? `/${sectionsById[sectionid].alias}` : '';
    const contentPart = `/${id}-${alias}`;
  
    const author = users[created_by];
    const path = [sectionPart, categoryPart, contentPart].join('');
    return {
      id, sectionid, catid, title, author, created, fulltext, path, alias, introtext
    }
});

function getByAlias(alias) {
  return articles.find(item => item.alias === alias)
}

const homePageArticles = [
  [getByAlias("o-nashej-komande")],
  [getByAlias("vooruzenie"), getByAlias("ekipirovka")],
  [getByAlias("obmundirovanie"), getByAlias("nabor-v-komandu")]
];

const homePageMoreArticles = [
  "razborka-gearbox-ver3-dboys",
  "razborka-ak47c-marui",
  "razborka-rk-diboys",
  "granati-gorohovie",
  "chto-brat-na-igri",
  "razborka-kwc-pm-co2",
  "karti-lvov",
  "lct-val-aeg",
  "vintorez"
].map(getByAlias);

const ustav = getByAlias("ustav");

module.exports = {
  articles,
  categories, 
  sections, 
  sectionsById,
  homePageArticles,
  homePageMoreArticles,
  ustav
}
