import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HtmlContentWrapper } from "../components/html-content-wrapper"

import {ustav} from "../../data/articles"

const UstavPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Home" />
    <h2>Наш устав.</h2>
    <HtmlContentWrapper dangerouslySetInnerHTML={{__html: ustav.fulltext || ustav.introtext }} />
  </Layout>
)

export default UstavPage
