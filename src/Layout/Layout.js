import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Footer from "./Footer";

const Layout = props => {
  return (
    <>
      <Helmet>
        <title>Abhinav's Portfolio</title>
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <header>
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
            className="w-full xl:h-12 lg:h-16 md:h-24"
            viewBox="0 0 360 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path id="tpath1" d="M0 0H360V45L0 0Z" fill="black" />
          </svg>
        </header>
        <main className="flex-grow mx-auto w-full">{props.children}</main>
        <footer>
        <svg className="w-full lg:h-24" viewBox="0 0 360 97" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M360 97L1.52588e-05 97L6.77878e-06 3.14722e-05L360 97Z" fill="black"/>
        <path d="M360 97L1.52588e-05 97L6.77878e-06 3.14722e-05L360 97Z" fill="black"/>
        <path d="M0 0L360 6.29444e-05L360 97.0001L0 0Z" fill="#8C8C8C"/>
        <path d="M0 0L360 6.29444e-05L360 97.0001L0 0Z" fill="#8C8C8C"/>
        </svg>
        <Footer />
        </footer>
      </div>
    </>
  )
}

export default Layout
