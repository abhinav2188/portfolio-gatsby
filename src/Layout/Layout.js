import React from "react"
import { Helmet } from "react-helmet"
import Footer from "./Footer";
import Header from "./Header";

const Layout = props => {
  return (
    <>
      <Helmet>
        <title>Abhinav's Portfolio</title>
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow mx-auto w-full">{props.children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
