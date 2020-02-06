/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, {createGlobalStyle} from "styled-components"
import "normalize.css";
import headerImage from "../images/header.jpg";
import footerImage from "../images/bottom.jpg";
import backgroundImage from "../images/body-bg.jpg";

import {Menu} from './menu';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Verdana, Arial, Helvetica, sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    background: #000000 url(${backgroundImage}) 0 100px fixed no-repeat;
  }
  a {
      text-decoration: none;
      color: #E0E0E0;
  }

  a:hover {
    color: #FFFFFF;
  }
`

const Header = styled.header`
  background: transparent url(${headerImage}) 0 0 no-repeat;
  height: 388px;
`;

const Page = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: calc(790px + 184px);
`;

const Container = styled.div`
  width: 790px;
`;

const Main = styled.main`
  background: #A86242;
  padding: 10px;
  img {
    margin: 5px;
    padding: 1px;
    border-top: 1px solid #FFFFCC;
    border-right: 1px solid #FFFF99;
    border-bottom: 1px solid #FFFF99;
    border-left: 1px solid #FFFFCC;
  }
`;

const Footer = styled.footer`
  background: transparent url(${footerImage}) 0 0 no-repeat;
  height: 100px;
`;

const Aside = styled.aside`
  width: 184px;
  text-align: center;
  font-size: 12px;
  margin-top: 100px;
  background-color: #000000;
  color: #FFFFCC;
  min-height: 400px;
`;

const Layout = (props) => {
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
    <>
    <GlobalStyle />
    <Page>
      <Container>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main>{props.children}</Main>
        <Footer/>
      </Container>
      <Aside>
        <Menu location={props.location}/>
      </Aside>
    </Page>
    <div id="modal-root" />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
