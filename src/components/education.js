import React from "react"
import Container from "./Container"
import edSvg from "../assets/svg-icons/owl.svg"
import ed1 from "../assets/svg-icons/insurance.svg"
import ed2 from "../assets/svg-icons/mortarboard.svg"
import ed3 from "../assets/svg-icons/book.svg"

const Ed = props => {
  return (
    <div className="flex flex-col w-3/4 my-6 mx-auto ">
      <div className="flex items-start ">
        <div className="border p-2 rounded-lg mr-4">
          <img className="lg:h-8 md:h-6 h-4" src={props.icon} alt="" />
        </div>
        <div className="flex flex-col">
          <h4 className="font-bold text-blue-x ">{props.title}</h4>
          <p className="">{props.content}</p>
        </div>
      </div>
    </div>
  )
}

const education = () => {
  return (
    <div>
      <Container>
        <div className="flex items-center my-8">
          <img className="mx-2 lg:h-16 md:h-12 h-10" src={edSvg} alt="" />
          <h2 className="mx-2 font-black">My Education</h2>
        </div>
        <div className="my-8 flex flex-col w-full">
          <Ed
            icon={ed1}
            title="Masters in Computer Applications (MCA)"
            content="Department of Computer Science, University of Delhi"
          />
          <Ed
            icon={ed2}
            title="BSc(hons) Computer Science"
            content="PGDAV College, University of Delhi"
          />
          <Ed
            icon={ed3}
            title="10th and 12th"
            content="Sacred Hearts, CBSE, Bareilly, UP"
          />
        </div>
      </Container>
    </div>
  )
}

export default education
