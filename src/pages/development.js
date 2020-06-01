import React from "react"
import Layout from "../HOC/layout"
import Project from "../components/project"
import Img from "gatsby-image"
import {graphql} from "gatsby"

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
  const projectsData = [
    {
      title: "keeper",
      description: "A simple notes webapp with authentication",
      technologyStack: [
        "html5",
        "tailwindCSS",
        "React js",
        "Node js, Express",
        "MongoDB",
      ],
      images: fetchImageComponents(data.notesApp),
      githubLink: "https://github.com/abhinav2188/Keeper-Webapp",
      deployLink: "https://keeperx1.herokuapp.com/",
    },
    {
      title: "Simon game",
      description: "A simple game to test memory and visualization",
      technologyStack: ["html5", "tailwindCSS", "Vue js"],
      images: fetchImageComponents(data.simonGame),
      githubLink: "https://github.com/abhinav2188/simon-game",
    },
    {
      title: "Todo list",
      description: "A simple todo list webapp",
      technologyStack: ["html5", "Vanilla CSS", "Node js", "ejs view engine"],
      images: fetchImageComponents(data.todo),
      githubLink: "https://github.com/abhinav2188/todo",
      deployLink: "https://immense-plains-58178.herokuapp.com/",
    },
  ]

  return (
    <Layout setSvgWhite>
      <h1 className="text-blue-x font-black capitalize my-4 text-center">
        My Projects
      </h1>
      {projectsData.map(projectData => (
        <Project
          title={projectData.title}
          description={projectData.description}
          technologyStack={projectData.technologyStack}
          images={projectData.images}
          githubLink={projectData.githubLink}
          deployLink={projectData.deployLink}
        />
      ))}
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
    },
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
    todo: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativePath: { regex: "/projectScreens/todo-list/" }
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
