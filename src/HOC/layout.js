import React from "react"
import Footer from "./footer"
import Header from "./header"
import SEO from "../components/seo"

const Layout = props => {
  return (
    <>
      <SEO/>
      <div
        className="flex flex-col min-h-screen"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <Header />
        <main className="flex-grow mx-auto w-full">{props.children}</main>
        <Footer setSvgWhite={props.setSvgWhite} />
      </div>
    </>
  )
}

export default Layout
