import React from "react"
import Container from "./Container"
import workSvg from "../assets/svg-icons/work.svg"

const works = () => {
  return (
    <div className="w-full bg-gray-x">
      <Container className="flex flex-col items-center lg:py-16 py-12">
        <div className="flex items-center my-8">
          <img className="mx-2 lg:h-16 md:h-12 h-10" src={workSvg} alt=""/>
          <h2 className="mx-2 font-black">My Works</h2>
        </div>
      </Container>
    </div>
  )
}

export default works
