import React from "react"
import Container from "./container"
import workSvg from "../assets/svg-icons/work.svg"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Works = props => {
  const data = useStaticQuery(
    graphql`
      query {
        posterImg: file(relativePath: { eq: "pni.png" }) {
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
        devImg: file(relativePath: { eq: "programming.png" }) {
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
    `
  )

  const sources1 = [
    data.posterImg.childImageSharp.mobile,
    {
      ...data.posterImg.childImageSharp.tablet,
      media: `(min-width:768px && max-width:1023px)`,
    },
    {
      ...data.posterImg.childImageSharp.desktop,
      media: `(min-width:1024px)`,
    },
  ]
  const sources2 = [
    data.devImg.childImageSharp.mobile,
    {
      ...data.devImg.childImageSharp.tablet,
      media: `(min-width:768px && max-width:1023px)`,
    },
    {
      ...data.devImg.childImageSharp.desktop,
      media: `(min-width:1024px)`,
    },
  ]

  return (
    <div className="w-full bg-gray-x">
      <Container className="flex flex-col items-center lg:py-16 py-12">
        <div className="flex items-center my-8">
          <img className="mx-2 lg:h-16 md:h-12 h-10" src={workSvg} alt="" />
          <h2 className="mx-2 font-black">My Work</h2>
        </div>
        <div className="flex font-black my-8">
          <Link to="/designs/" className="bg-white relative rounded-lg shadow-sm hover:shadow-lg lg:mx-4 mx-2"> 
            <Img fixed={sources1} />
            <p className="lg:p-4 p-2 absolute top-0">Posters and Icon Designs</p>
          </Link>
          <Link to="/development/" className="bg-white relative rounded-lg shadow-sm hover:shadow-lg lg:mx-4 mx-2"> 
          <Img fixed={sources2} />
            <p className="lg:p-4 p-2 absolute top-0">Development Projects</p>
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default Works
