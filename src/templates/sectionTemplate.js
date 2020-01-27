import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {ArticlesLinks} from "../components/articles-links"

const sectionTemplate = props => {
  const { pageContext, location } = props
  const { articles, title } = pageContext
  
  return (
  <Layout location={location}>
    <SEO title={title} />
    <h2>{title}</h2>
    <ArticlesLinks articles={articles} />
  </Layout>
  )
}
export default sectionTemplate