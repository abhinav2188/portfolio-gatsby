import React from "react"
import Layout from "../Layout/Layout"
import "../css/tailwind.css"
import Profile from "../components/profile";
import Skills from "../components/Skills";
import Education from "../components/education";
import Works from "../components/works";

export default function Home() {
  return (
    <Layout>
      <Profile/>
      <Skills />
      <Education />
      <Works />
    </Layout>
  );
}
