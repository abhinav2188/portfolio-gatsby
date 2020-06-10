import React from "react"
import Container from "./container"
import workSvg from "../assets/svg-icons/work.svg"
import { Link } from "gatsby"
import pni from "../assets/svg-bgs/pni.svg";
import dev from "../assets/svg-bgs/dev.svg";

const Works = props => {
  return (
    <div className="w-full bg-gray-x">
      <Container className="flex flex-col items-center lg:py-16 py-12">
        <div className="flex items-center my-8">
          <img className="mx-2 lg:h-16 md:h-12 h-10" src={workSvg} alt="" />
          <h2 className="mx-2 font-black">My Work</h2>
        </div>
        <div className="flex font-black my-8">
          <Link to="/designs/" className="bg-white relative rounded-lg shadow-sm hover:shadow-lg lg:mx-4 mx-2"> 
            <img src={pni} alt="" className="lg:w-48 lg:h-48 md:w-40 md:h-40 w-32 h-32"/>
            <p className="lg:p-4 p-2 absolute top-0">Posters and Icon Designs</p>
          </Link>
          <Link to="/development/" className="bg-white relative rounded-lg shadow-sm hover:shadow-lg lg:mx-4 mx-2"> 
          <img src={dev} alt="" className="lg:w-48 lg:h-48 md:w-40 md:h-40 w-32 h-32"/>
            <p className="lg:p-4 p-2 absolute top-0">Development Projects</p>
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default Works
