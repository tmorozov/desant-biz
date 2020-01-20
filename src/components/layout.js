/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 790,
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <main style={{
        background: '#A86242',
        padding: '10px'
      }}>{children}</main>
      <footer style={{
        background: 'transparent url(../images/bottom.jpg) 0 0 no-repeat',
        height: '100px'
      }} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
