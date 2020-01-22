import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const basicTemplate = props => {
  const { pageContext, location } = props
  const { pageContent, title, author } = pageContext
  return (
  <Layout location={location}>
    <SEO title={title} />
    <h2>{title}</h2>
    <h4>Автор: {author}</h4>
    <div dangerouslySetInnerHTML={{__html: pageContent}} />
  </Layout>
  )
}
export default basicTemplate