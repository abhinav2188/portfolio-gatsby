import React from "react"
import { Helmet } from "react-helmet"

const Layout = props => {
  return (
    <>
      <Helmet>
        <title>Abhinav's Portfolio</title>
      </Helmet>
      <div className="flex flex-col min-h-screen bg-gray-300">
        <header>hello</header>
        <main className="flex-grow">{props.children}</main>
      </div>
    </>
  )
}

export default Layout
