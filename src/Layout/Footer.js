import React from "react"
import fb from "../assets/svg-icons/facebook.svg"
import insta from "../assets/svg-icons/instagram.svg"
import git from "../assets/svg-icons/cat.svg"
import linkedin from "../assets/svg-icons/linkedin.svg"
import mylogo from "../my logo.svg"

const ImgLink = props => (
  <a href={props.link} className="mx-2">
    <img
      className="md:h-5 h-4 transform hover:scale-125 transition-all duration-100 "
      src={props.imgSrc}
      type=""
    ></img>
  </a>
)

export default function Home() {
  return (
    <div className="w-full bg-black py-4 text-white">
      <div className="flex flex-col md:w-4/5 w-11/12 mx-auto justify-center">
        <div className="flex">
          <ImgLink
            link="https://www.facebook.com/abhinav.rastogi.77985"
            imgSrc={fb}
          />
          <ImgLink
            link="https://www.linkedin.com/in/abhinav-rastogi-4706a0157/"
            imgSrc={linkedin}
          />
          <ImgLink link="https://github.com/abhinav2188" imgSrc={git} />
          <ImgLink
            link="https://www.instagram.com/abhinav2188/"
            imgSrc={insta}
          />
        </div>
        <img className="md:h-8 h-6 my-2 self-center" src={mylogo} />
        <div className="flex flex-col items-end font-bold">
          <p>+919808727553</p>
          <a href="mailto:abhinav.26aug@gmail.com">
          <p>abhinav.26aug@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  )
}
