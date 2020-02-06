import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { HtmlContentWrapper } from "../components/html-content-wrapper"

const onClick = (e) => {
  if(e.target instanceof HTMLImageElement) {
    window.open(e.target.src, 'blank');
  }
}

const basicTemplate = props => {
  const { pageContext, location } = props
  const { fulltext, introtext, title, author, created } = pageContext
  
  return (
  <Layout location={location}>
    <SEO title={title} />
    <h1>{title}</h1>
    <HtmlContentWrapper onClick={onClick} dangerouslySetInnerHTML={{__html: fulltext || introtext }} />
    <div>Автор: {author}</div>
    <div>Дата: {created}</div>
  </Layout>
  )
}
export default basicTemplate