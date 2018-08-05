import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    carImages: imageSharp(id: { regex: "^/cars/?(?:[^/]+/?)*$" }) {
      sizes(maxWidth: 1250, quality: 90) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
