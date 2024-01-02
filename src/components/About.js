import { UserCircleIcon } from "@heroicons/react/24/solid";

import React from "react";

export default function Projects() {
  return (
    <section id="about" className="text-gray-400 body-font">
      <div className="container px-5 py-10 mx-auto text-center">
        <div className="flex flex-col w-full mb-20">
          <UserCircleIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            About
          </h1>
          <p className="lg:w-3/3 mx-auto leading-relaxed text-base text-justify text-white">
            I am particularly excited about the prospect of applying my skills
            in a junior developer role, where I can further enhance my
            capabilities, contribute to meaningful projects, and grow within a
            collaborative and innovative team environment. With a strong
            foundation in problem-solving and a proven track record of
            successfully delivering projects, I am ready to make valuable
            contributions as a junior developer.
          </p>
        </div>
      </div>
    </section>
  );
}
