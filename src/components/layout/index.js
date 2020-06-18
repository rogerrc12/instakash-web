import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import 'normalize.css'
import '../../helpers/FontAwesome';

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, location }) => {
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
    <div id={location !== "/" ? 'main-layout' : ''}>
      <Header siteTitle={data.site.siteMetadata.title} location={location} />
      <main>{children}</main>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
