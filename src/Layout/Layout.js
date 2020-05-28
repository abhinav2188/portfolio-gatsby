import React from "react"
import { Helmet } from "react-helmet"
import Footer from "./Footer"
import Header from "./Header"

const Layout = props => {
  return (
    <>
      <Helmet>
        <title>Abhinav's Portfolio</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="flex flex-col min-h-screen" style={{fontFamily:"'Montserrat', sans-serif"}}>
        <Header />
        <main className="flex-grow mx-auto w-full">{props.children}</main>
        <Footer setSvgWhite={props.setSvgWhite} />
      </div>
    </>
  )
}

export default Layout
