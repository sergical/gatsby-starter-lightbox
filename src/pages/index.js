import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import Lightbox from '../components/Lightbox'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hi people</h1>
    <p>
      This is a very basic lightbox example using <code>gatsby-image</code>. You can use the buttons within the lightbox
      or press ESC to close the lightbox and navigate between images with your left and right arrows.
    </p>
    <p>
      Here's the github repo:{' '}
      <a href="https://github.com/416serg/gatsby-starter-lightbox">
        https://github.com/416serg/gatsby-starter-lightbox
      </a>
    </p>
    <Lightbox images={data.allImageSharp.edges} />
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
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
