import React from "react";
import { FiGithub, FiLinkedin,FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className=" px-5 py-10  ">
        <div
          netlify
          name="contact"
          className="lg:p-4 mx-auto lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white text-center sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <div className="flex justify-between mt-5">
            <a href="https://www.linkedin.com/in/kyaw-thet-624845177?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="p-5 bg-gray-800">
              <FiLinkedin className="text-green-400" />
            </a>
            <a href="https://github.com/nawoption" className="p-5 bg-gray-800">
              <FiGithub className="text-green-400"/>
            </a>
            <a href="mailto:kyawthetkhaing.ktk.ktk@gmail.com" className="p-5 bg-gray-800">
              <FiMail className="text-green-400"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
