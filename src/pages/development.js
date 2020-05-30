import React from "react"
import Layout from "../Layout/Layout"
import Container from "../components/Container"
import Project from "../components/Project"
import Img from "gatsby-image"

const fetchImageComponents = data => {
  const imgs = []
  data.edges.map(({ node }) => {
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
    imgs.push(
      <Img
        fixed={sources}
        alt=""
        className="lg:border-8 md:border-4 border-2 rounded-lg shadow border-gray-900"
      />
    )
  })
  return imgs
}

const development = ({ data }) => {
  const d1 = {
    title: "keeper",
    description: "a simple notes webapp with authentication",
    technologyStack: [
      "html5",
      "tailwindCSS",
      "React js",
      "Node js, Express",
      "MongoDB",
    ],
    images: fetchImageComponents(data.notesApp),
  }

  return (
    <Layout setSvgWhite>
        <h1 className="text-blue-x font-black capitalize mt-4 text-center">
          My Projects
        </h1>
        <Project
          title={d1.title}
          description={d1.description}
          technologyStack={d1.technologyStack}
          images={d1.images}
        />
    </Layout>
  )
}

export default development

export const query = graphql`
  query {
    notesApp: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativePath: { regex: "/projectScreens/notes-app/" }
      }
    ) {
      edges {
        node {
          id
          childImageSharp {
            desktop: fixed(width: 700, quality: 100) {
              ...GatsbyImageSharpFixed
            }
            tablet: fixed(width: 600, quality: 100) {
              ...GatsbyImageSharpFixed
            }
            mobile: fixed(width: 320, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    simonGame: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativePath: { regex: "/projectScreens/simon/" }
      }
    ) {
      edges {
        node {
          id
          childImageSharp {
            desktop: fixed(width: 700, quality: 100) {
              ...GatsbyImageSharpFixed
            }
            tablet: fixed(width: 600, quality: 100) {
              ...GatsbyImageSharpFixed
            }
            mobile: fixed(width: 320, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
