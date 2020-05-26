import React from "react"
import pic from "../assets/img1.jpg"
import buid from "../assets/svg-bgs/section2.svg"
import work from "../assets/svg-icons/company.svg"
import home from "../assets/svg-icons/sun.svg"

const Profile = props => {
  return (
    <div className="w-full">
      <div className="profile flex flex-col items-center mt-8">
        <img
          src={pic}
          alt="abhinav rastogi"
          className="md:h-64 md:w-64 w-48 h-48 object-cover object-top rounded-full my-2"
        />
        <p className="text-center text-blue-x font-black">
          Developer | Designer | Freelancer
          <br />
        </p>
        <p className="flex items-center text-center text-black font-black">
          <img className="h-4 inline-block mx-1" src={work} alt="" />
          New Delhi
          <img className="h-4 inline-block mx-1 ml-4" src={home} alt="" />
          Bareilly, UP
        </p>
        <a
          href="mailto:abhinav.26aug@gmail.com"
          className="bg-blue-x px-4 py-2 rounded mt-12 mb-8 text-white transform hover:scale-110 transition-all duration-100"
          target="_top"
        >
          <p>CONTACT ME</p>
        </a>
      </div>

      <div className="flex lg:w-4/5 mx-auto">
        <img
          className="md:w-1/2 w-full inline-block"
          style={{ transform: "scaleX(-1) translateY(0.5rem)" }}
          src={buid}
          alt=""
        />
        <img
          className="md:w-1/2 w-full transform translate-y-2 md:inline-block hidden"
          src={buid}
          alt=""
        />
      </div>
    </div>
  )
}

export default Profile
