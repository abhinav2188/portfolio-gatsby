import React, { useState } from "react"
import Layout from "../HOC/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Container from "../components/container"
import Carousel from "../components/UI/carousel"
import Modal from "../components/UI/modal"

const ImagesContainer = props => {
  return (
    <div className="my-8">
      <h1 className="text-blue-x font-black capitalize mt-4 text-center">{props.title}</h1>
      <Container className="flex items-center justify-center flex-wrap py-8">
        {props.images.map(({ node }) => {
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
            <button onClick={() => {props.setActiveId(node.id); props.setShowModal(true)}}>
              <Img
                key={node.id}
                fixed={sources}
                alt=""
                className="rounded shadow-sm hover:shadow-lg transition-all ease-out duration-200 transform hover:scale-105 lg:m-4 md:m-2 m-1"
              />
            </button>
          )
        })}
      </Container>
    </div>
  )
}

export default function Designs(props) {
  const carouselElements = []
  props.data.allImages.edges.map(({ node }) => {
    const sources = [
      node.childImageSharp.mobile,
      {
        ...node.childImageSharp.desktop,
        media: `(min-width:768px)`,
      },
    ]
    carouselElements[node.id] = <Img fixed={sources} key={node.id} />
    return null
  })
  const carouselElementIds = Object.keys(carouselElements)
  const [activeId, setActiveId] = useState(carouselElementIds[0])

  const [showModal, setShowModal] = useState(false)

  return (
    <Layout setSvgWhite>
      <Modal show={showModal} close={() => setShowModal(false)}>
        <Carousel
          activeIndex={carouselElementIds.indexOf(activeId)}
          elements={carouselElements}
          elementIds={carouselElementIds}
        />
      </Modal>
      <ImagesContainer
        id="posterDesigns"
        title="poster designs"
        images={props.data.posterImages.edges}
        setActiveId={setActiveId}
        setShowModal={setShowModal}
      />
      <ImagesContainer
        id="iconDesigns"
        title="icon designs"
        images={props.data.iconImages.edges}
        setActiveId={setActiveId}
        setShowModal={setShowModal}
      />
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
    iconImages: allFile(filter: { sourceInstanceName: { eq: "icons" } }) {
      edges {
        node {  
          id
          childImageSharp {
            desktop: fixed(fit: COVER, width: 250, quality: 100) {
              ...GatsbyImageSharpFixed
            }
            tablet: fixed(fit: COVER, width: 200, quality: 100) {
              ...GatsbyImageSharpFixed
            }
            mobile: fixed(fit: COVER, width: 150, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    allImages: allFile(
      filter: { sourceInstanceName: { in: ["posters", "icons"] } }
    ) {
      edges {
        node {
          id
          childImageSharp {
            desktop: fixed(
              fit: CONTAIN
              width: 600
              height: 600
              quality: 100
              background: "rgba(0,0,0,0)"
            ) {
              ...GatsbyImageSharpFixed
            }
            mobile: fixed(
              fit: CONTAIN
              width: 300
              height: 300
              quality: 100
              background: "transparent"
            ) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
