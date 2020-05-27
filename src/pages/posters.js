import React from "react"
import Layout from "../Layout/Layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Container from "../components/Container"

export default function Posters(props) {
  return (
    <Layout setSvgWhite>
      <div className="flex flex-col w-full items-center mt-4">
        <h1 className="text-blue-x font-black">Posters</h1>
      </div>
      <Container className="flex items-center justify-center flex-wrap lg:py-12 py-8">
        {props.data.posterImages.edges.map(({ node }) => {
          const sources = [
            node.childImageSharp.mobile,
            {
              ...node.childImageSharp.tablet,
              media: `(min-width:768px && max-width:1023px)`,
            },
            {
              ...node.childImageSharp.desktop,
              media: `(min-width:1024px)`,
            },
          ]
          return (
              <Img
                key={node.id}
                fixed={sources}
                alt=""
                className="rounded shadow-sm hover:shadow-lg transition-all ease-out duration-200 transform hover:scale-105 lg:m-4 md:m-2 m-1"
              />
          )
        })}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    posterImages: allFile(filter: { sourceInstanceName: { eq: "posters" } }) {
      edges {
        node {
          id
          childImageSharp {
            desktop: fixed(fit: COVER, height: 250, width: 250, quality: 100) {
              ...GatsbyImageSharpFixed
            }
            tablet: fixed(fit: COVER, height: 200, width: 200, quality: 100) {
              ...GatsbyImageSharpFixed
            }
            mobile: fixed(fit: COVER, height: 150, width: 150, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
