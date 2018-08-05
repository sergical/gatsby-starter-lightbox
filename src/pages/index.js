import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Lightbox from '../components/Lightbox'

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Lightbox images={data.allImageSharp.edges} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allImageSharp {
      edges {
        node {
          sizes(maxWidth: 1800) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`
