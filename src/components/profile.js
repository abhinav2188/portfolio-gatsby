import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import buid from "../assets/svg-bgs/section2.svg"
import work from "../assets/svg-icons/company.svg"
import home from "../assets/svg-icons/sun.svg"
import Img from "gatsby-image"

const Profile = props => {

  const data = useStaticQuery(
    graphql`
    query  {
      desktopImage: file(relativePath: {eq: "img1.jpg"}) {
        childImageSharp {
          fixed(fit:COVER, height: 250, width: 250, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      tabletImage:file(relativePath: {eq: "img1.jpg"}) {
        childImageSharp {
          fixed(fit:COVER, height:200, width: 200, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mobileImage:file(relativePath: {eq: "img1.jpg"}) {
        childImageSharp {
          fixed(fit:COVER, height: 150, width: 150, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `
  )

  const sources = [
    {
      ...data.mobileImage.childImageSharp.fixed,
      media: `(max-width:600px)`
    },
    {
      ...data.tabletImage.childImageSharp.fixed,
      media: `(min-width:601px && max-width:1023px)`
    },
    {
      ...data.desktopImage.childImageSharp.fixed,
      media: `(min-width:1024px)`
    }
  ]

  return (
    <div className="w-full">
      <div className="flex flex-col items-center mt-8">
        <Img fixed={sources} className="rounded-full shadow mb-2"/>
        <p className="text-center text-blue-x font-black">
          FullStack Developer | Designer | Freelancer
        </p>
        <div className="flex items-baseline text-center text-black font-bold mt-2">
          <img className="h-4 inline-block mx-1" src={work} alt="" />
          <h6 className="mr-2">New Delhi</h6>
          <img className="h-4 inline-block mx-1 " src={home} alt="" />
          <h6>Bareilly, UP</h6>
        </div>
        <a
          href="mailto:abhinav.26aug@gmail.com"
          className="bg-blue-x px-4 py-2 rounded mt-12 mb-8 text-white transform hover:scale-110 transition-all duration-100"
          target="_top"
        >
          <p>CONTACT ME</p>
        </a>
      </div>

      <div className="flex lg:w-4/5 mx-auto">
        <img
          className="md:w-1/2 w-full inline-block"
          style={{ transform: "scaleX(-1) translateY(0.5rem)" }}
          src={buid}
          alt=""
        />
        <img
          className="md:w-1/2 w-full transform translate-y-2 md:inline-block hidden"
          src={buid}
          alt=""
        />
      </div>
    </div>
  )
}

export default Profile;

