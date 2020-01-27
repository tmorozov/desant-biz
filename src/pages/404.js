import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({location}) => (
  <Layout location={location}>
    <SEO title="404: Not found" />
    <h1>Не найдено</h1>
    <p>Такой страницы нет.</p>
  </Layout>
)

export default NotFoundPage
