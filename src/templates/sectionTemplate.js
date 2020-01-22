import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import Layout from "../components/layout"
import SEO from "../components/seo"

const ArticleLink = ({data}) => <Link to={data.path}>{data.title}</Link>

const Articles = ({articles}) => {
    return articles.map(article => <ArticleLink key={article.id} data={article}/>)
}

const ArticlesContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const sectionTemplate = props => {
  const { pageContext, location } = props
  const { articles, title } = pageContext
  
  return (
  <Layout location={location}>
    <SEO title={title} />
    <h2>{title}</h2>
    <ArticlesContainer>
        <Articles articles={articles} />
    </ArticlesContainer>
  </Layout>
  )
}
export default sectionTemplate