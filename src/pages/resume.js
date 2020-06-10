import React, { useState } from "react"
import Img from "gatsby-image"
import Layout from "../HOC/layout"
import Container from "../components/container"
import { graphql } from "gatsby"

const Resume = props => {
  const [d, setD] = useState("Download PDF")
  const f = () => {
    setD("Downloading...")
    setTimeout(() => {
      setD("Download PDF")
    }, 1000)
  }
  return (
    <Layout setSvgWhite>
      <Container>
        <div className="mb-8">
          <a
            href={require("../assets/abhinav_resume.pdf")}
            className="px-2 py-1 rounded bg-blue-x text-white md:text-xs text-2xs"
            download
            onClick={f}
          >
            {d}
          </a>
        </div>
        <div className="flex flex-col items-center w-full">
          {props.data.resumeImages.edges.map(({ node }) => {
            const sources = [
              {
                ...node.childImageSharp.mobile,
                media: `(max-width:767px)`,
              },
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
                alt="Loading pdf"
                className="p-2 border lg:my-2 my-1 rounded shadow-sm"
              />
            )
          })}
        </div>
      </Container>
    </Layout>
  )
}

export default Resume

export const query = graphql`
  query {
    resumeImages: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativePath: { regex: "/abhinav_resume/" }
      }
      sort: { fields: birthTime, order: DESC }
    ) {
      edges {
        node {
          id
          childImageSharp {
            desktop: fixed(fit: CONTAIN, width: 700, quality: 100) {
              ...GatsbyImageSharpFixed
            }
            tablet: fixed(fit: CONTAIN, width: 600, quality: 100) {
              ...GatsbyImageSharpFixed
            }
            mobile: fixed(fit: CONTAIN, width: 320, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
