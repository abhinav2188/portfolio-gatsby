import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <>
      <div className="bg-black text-white w-full">
        <div className="lg:w-4/5 md:w-5/6 w-11/12 mx-auto flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link to="/" className="md:mx-2 mx-1" activeClassName="font-black text-blue-x" className="font-bold">
              <p>Abhinav Rastogi</p>
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/designs/" className="md:mx-2 mx-1" activeClassName="font-bold text-blue-x">
              <h6>Designing</h6>
            </Link>
            <Link to="/development/" className="md:mx-2 mx-1" activeClassName="font-bold text-blue-x">
              <h6>Development</h6>
            </Link>
            <Link to="/resume/" className="md:mx-2 mx-1" activeClassName="font-bold text-blue-x">
              <h6>Resume</h6>
            </Link>
          </div>
        </div>
      </div>
      <svg
        className="w-full md:h-16"
        viewBox="0 0 360 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path id="tpath1" d="M0 0H360V45L0 0Z" fill="black" />
      </svg>
    </>
  )
}

export default Header
