import React from "react"
import Layout from "../Layout/Layout"
import "../css/tailwind.css"
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Works from "../components/Works";

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
