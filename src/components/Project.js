import React from "react"
import PropTypes from "prop-types"
import Container from "./Container"
import Carousel from "./UI/Carousel"

const Project = props => {
  return (
      <Container className="py-16">
    <div className="py-8 flex flex-col rounded-lg border shadow-lg px-4 items-center w-full">
      <h2 className="font-bold self-center font-black capitalize">{props.title}</h2>
      <p className="self-center mb-8 font-bold ">{props.description}</p>
      <div className="flex md:flex-row flex-col md:justify-between justify-center">
        <div className="flex md:mx-6">
          <Carousel
            elements={props.images}
            elementIds={Object.keys(props.images)}
            activeIndex={0}
            fade
          />
        </div>
        <div className="flex flex-col md:mx-6 border rounded p-4 md:self-start md:mt-0 mt-8">
          <p className="font-bold">Technology Stack</p>
          <hr className="md:my-4 my-2"/>
          {props.technologyStack.map((tech, index) => (
            <h6 key={index} className="font-black text-blue-x">
              {tech}
            </h6>
          ))}
        </div>
      </div>
    </div>
    </Container>
  )
}

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  technologyStack: PropTypes.array,
  images: PropTypes.array,
}

export default Project
