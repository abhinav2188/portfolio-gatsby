import React from "react"
import Layout from "../HOC/layout"
import "../css/tailwind.css"
import Profile from "../components/profile";
import Skills from "../components/skills";
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
