import React, { useState } from "react"
import PropTypes from "prop-types"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import "./animations.css"

const Carousel = props => {
  const [activeIndex, setActiveIndex] = useState(props.activeIndex)
  const [transitionType, setTransitionType] = useState("next")

  function setTranstionClass(value, callback) {
    setTransitionType(value)
    callback()
  }

  const next = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % props.elementIds.length)
  }
  const previous = () => {
    setActiveIndex(prevIndex =>
      prevIndex - 1 < 0
        ? prevIndex + props.elementIds.length - 1
        : prevIndex - 1
    )
  }
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <SwitchTransition>
        <CSSTransition
          key={props.elementIds[activeIndex]}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false)
          }}
          classNames={transitionType}
        >
          {props.elements[props.elementIds[activeIndex]]}
        </CSSTransition>
      </SwitchTransition>
      <div className="flex mt-4">
        <button
          className="p-2 bg-gray-x rounded-sm mx-1"
          onClick={() => setTranstionClass("prev", previous)}
        >
          <svg
            className="lg:w-4 w-2"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
              <path
                d="M3.33306 8.0853L10.0082 14.7604C10.1626 14.9149 10.3687 15 10.5885 15C10.8082 15 11.0143 14.9149 11.1687 14.7604L11.6603 14.2689C11.9802 13.9487 11.9802 13.4282 11.6603 13.1084L6.05499 7.50311L11.6665 1.89157C11.8209 1.73706 11.9062 1.53108 11.9062 1.31145C11.9062 1.09158 11.8209 0.885602 11.6665 0.730968L11.1749 0.239632C11.0204 0.0851201 10.8145 -9.54393e-08 10.5947 -1.14651e-07C10.375 -1.33862e-07 10.1689 0.08512 10.0145 0.239631L3.33306 6.9208C3.1783 7.0758 3.0933 7.28274 3.09379 7.50274C3.0933 7.72359 3.1783 7.93042 3.33306 8.0853Z"
                fill="white"
              />
          </svg>
        </button>
        <button
          className="p-2 bg-gray-x rounded-sm mx-1"
          onClick={() => setTranstionClass("next", next)}
        >
          <svg
            className="lg:w-4 w-2"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6669 6.9147L4.99169 0.239632C4.8373 0.0851213 4.63121 0 4.41145 0C4.1917 0 3.9856 0.0851213 3.83121 0.239632L3.33963 0.731092C3.01976 1.05133 3.01976 1.57182 3.33963 1.89157L8.94495 7.49689L3.33341 13.1084C3.17902 13.2629 3.09378 13.4689 3.09378 13.6885C3.09378 13.9084 3.17902 14.1144 3.33341 14.269L3.82499 14.7604C3.97951 14.9149 4.18548 15 4.40523 15C4.62499 15 4.83108 14.9149 4.98547 14.7604L11.6669 8.0792C11.8216 7.9242 11.9066 7.71725 11.9061 7.49726C11.9066 7.2764 11.8216 7.06958 11.6669 6.9147Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

Carousel.propTypes = {
  elements: PropTypes.array,
  activeIndex: PropTypes.number,
  elementIds: PropTypes.array,
}

export default Carousel
