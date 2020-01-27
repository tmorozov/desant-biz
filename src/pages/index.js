import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {DynamicLayout} from "../components/dynamic-layout";
import {Preview} from "../components/preview";
import {MoreArticles} from "../components/more-articles";
import {homePageArticles, homePageMoreArticles} from "../../data/articles";

const exampleStructure = homePageArticles.map(row => {
  return row.map(({title, introtext, path, fulltext}) => (
  <Preview 
    title={title} 
    introtext={introtext} 
    path={path} 
    fulltext={fulltext}
  />)
  );
})


const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Home" />
    <h2>Страйкбольная команда Сфинкс. Город Львов.</h2>
    
    <DynamicLayout structure={exampleStructure} />
    <MoreArticles articles={homePageMoreArticles}/>
  </Layout>
)

export default IndexPage
