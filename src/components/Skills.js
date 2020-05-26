import React from "react"
import skillsSvg from "../assets/svg-icons/skills.svg"
import gdSvg from "../assets/svg-icons/design.svg"
import programmingSvg from "../assets/svg-icons/data.svg"
import webSvg from "../assets/svg-icons/cms.svg"
import Container from "./Container";

const Skill = props => {
  return (
    <div class="flex flex-col w-3/4 my-12 mx-auto md:px-8">
      <div class="flex md:flex-col md:items-center items-start justify-between">
        <div class="md:border-0 border border-blue-600 border p-4 rounded-lg mr-4">
          <img class="lg:h-12 md:h-8 h-6" src={props.icon} />
        </div>
        <div class="flex flex-col md:items-center">
          <h3 class=" md:mb-4 font-bold">{props.title}</h3>
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
          <div class="flex items-center my-8">
            <img class="mx-2 lg:h-16 md:h-12 h-10" src={skillsSvg} />
            <h2 class="mx-2 font-black">My Skills</h2>
          </div>
          <div class="flex md:flex-row flex-col justify-around w-full">
            <Skill icon={programmingSvg} title="Programming">
              <p class="flex">
                <span class="mr-2">Languages:</span>
                <span class="">JAVA, C++, Python</span>
              </p>
            </Skill>
            <Skill icon={webSvg} title="Web Development">
              <div>
                <p>UI/UX : Figma</p>
                <p class="flex">
                  <span class="mr-2">Frontend:</span>
                  <span class="flex flex-col">
                    <span>HTML5</span>
                    <span>CSS3 : tailwindCss, bootstrap4</span>
                    <span>JavaScript : Vue js, React</span>
                  </span>
                </p>
              </div>
            </Skill>
            <Skill icon={gdSvg} title="Graphic Designing">
              <p class="flex">
                <span class="mr-2">Tools:</span>
                <span class="">
                  Adobe Photoshop,
                  <br /> Adobe Illustrator, Figma
                </span>
              </p>
            </Skill>
          </div>
        </Container>
      </div>
      <svg
        class="w-full lg:h-16 md:h-24"
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
