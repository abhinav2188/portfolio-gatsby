import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <>
      <div className="bg-black text-white w-full">
        <div className="lg:w-4/5 md:w-5/6 w-11/12 mx-auto flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="md:mx-2 mx-1">
              <p className="font-bold">Abhinav Rastogi</p>
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/design/" className="md:mx-2 mx-1">
              <p>Designing</p>
            </Link>
            <Link to="/development/" className="md:mx-2 mx-1">
              <p>Development</p>
            </Link>
            <Link to="/resume/" className="md:mx-2 mx-1">
              <p>Resume</p>
            </Link>
          </div>
        </div>
      </div>
      <svg
        className="w-full lg:h-8 md:h-16"
        viewBox="0 0 247 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"      >
        <path
          d="M247 24V0H123.5H0V24C0 24 15.4375 5.53846 123.5 5.53846C231.562 5.53846 247 24 247 24Z"
          fill="black"
        />
      </svg>

    </>
  )
}

export default Header
