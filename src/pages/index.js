import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { DynamicLayout } from "../components/dynamic-layout"
// import { Preview } from "../components/preview"
// import { MoreArticles } from "../components/more-articles"
// import { homePageArticles, homePageMoreArticles } from "../../data/articles"
import Dima from "../../static/images/stories/img_ls/image010.jpg"

// const exampleStructure = homePageArticles.map(row => {
//   return row.map(({ title, introtext, path, fulltext }) => (
//     <Preview
//       title={title}
//       introtext={introtext}
//       path={path}
//       fulltext={fulltext}
//     />
//   ))
// })

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <h2>Страйкбольна команда Сфінкс. Львів.</h2>

    <div style={{ textAlign: "center" }}>
      <img
        style={{ border: "10px solid black" }}
        src={Dima}
        title="Загинув наш товариш Діма"
        alt="Загинув наш товариш Діма"
      />
    </div>

    {/* <DynamicLayout structure={exampleStructure} /> */}
    {/* <MoreArticles articles={homePageMoreArticles} /> */}
  </Layout>
)

export default IndexPage
