import React from "react"
import Container from "./Container"
import edSvg from "../assets/svg-icons/owl.svg"
import ed1 from "../assets/svg-icons/insurance.svg"
import ed2 from "../assets/svg-icons/mortarboard.svg"
import ed3 from "../assets/svg-icons/book.svg"

const Ed = props => {
  return (
    <div class="flex flex-col w-3/4 mb-8 mx-auto ">
      <div class="flex items-start ">
        <div class="border p-2 rounded-lg mr-4">
          <img class="lg:h-8 md:h-6 h-4" src={props.icon} alt="" />
        </div>
        <div class="flex flex-col">
          <h4 className="font-bold text-blue-x ">{props.title}</h4>
          <p class="">{props.content}</p>
        </div>
      </div>
    </div>
  )
}

const education = () => {
  return (
    <div>
      <Container>
        <div class="flex items-center my-8">
          <img class="mx-2 lg:h-16 md:h-12 h-10" src={edSvg} alt="" />
          <h2 class="mx-2 font-black">My Education</h2>
        </div>
        <div className="my-12 flex flex-col w-full">
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
