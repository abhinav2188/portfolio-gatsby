import React from "react"
import skillsSvg from "../assets/svg-icons/skills.svg"
import gdSvg from "../assets/svg-icons/design.svg"
import programmingSvg from "../assets/svg-icons/data.svg"
import webSvg from "../assets/svg-icons/cms.svg"
import Container from "./Container";

const Skill = props => {
  return (
    <div className="flex flex-col w-3/4 my-6 mx-auto md:px-8">
      <div className="flex md:flex-col md:items-center items-start justify-between">
        <div className={`md:border-0 border border-blue-600 border p-4 rounded-lg ${props.toRight?"lg:order-1 order-2 lg:ml-4":"mr-4"}`}>
          <img className="lg:h-12 md:h-8 h-6" src={props.icon} alt="" />
        </div>
        <div className={`flex flex-col md:items-center ${props.toRight?"lg:order-2 order-1":""}`}>
          <h3 className=" md:mb-4 font-bold">{props.title}</h3>
          {props.children}
        </div>
      </div>
    </div>
  )
}
const Skills = () => {
  return (
    <>
      <div className="bg-blue-x text-white w-full">
        <Container>
          <div className="flex items-center my-8">
            <img className="mx-2 lg:h-16 md:h-12 h-10" src={skillsSvg} alt="" />
            <h2 className="mx-2 font-black">My Skills</h2>
          </div>
          <div className="flex md:flex-row flex-col justify-around w-full my-8">
            <Skill icon={programmingSvg} title="Programming">
              <p className="flex">
                <span className="mr-2">Languages:</span>
                <span className="">JAVA, C++, Python</span>
              </p>
            </Skill>
            <Skill icon={webSvg} title="Web Development" toRight>
              <div>
                <p>UI/UX : Figma</p>
                <p className="flex">
                  <span className="mr-2">Frontend:</span>
                  <span className="flex flex-col">
                    <span>HTML5</span>
                    <span>CSS3 : tailwindCss, bootstrap4</span>
                    <span>JavaScript : Vue js, React</span>
                  </span>
                </p>
              </div>
            </Skill>
            <Skill icon={gdSvg} title="Graphic Designing">
              <p className="flex">
                <span className="mr-2">Tools:</span>
                <span className="">
                  Adobe Photoshop,
                  <br /> Adobe Illustrator, Figma
                </span>
              </p>
            </Skill>
          </div>
        </Container>
      </div>
      <svg
        className="w-full lg:h-16 md:h-24"
        viewBox="0 0 360 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path id="tpath2" d="M360 0H0V45L360 0Z" fill="#0047FF" />
      </svg>
    </>
  )
}

export default Skills
