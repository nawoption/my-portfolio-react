import { CpuChipIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <CpuChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <h2 className="text-white text-justify font-bold leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Mobile App Development
          </h2>
          <p className="text-white text-justify text-white leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            - Android Studio with React Native
          </p>
          <p className="text-white text-justify leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            - Developed and published 10+ apps on the Google Play Store.
          </p>
          <p className="text-white text-justify leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            - Integrated AdMob for effective monetization strategies.
          </p>

          <h2 className="text-white text-justify font-bold leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mt-5">
            Deployment Web Applications
          </h2>
          <p className="text-white text-justify text-white leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            - Deployed web applications to Heroku, Render, and Vercel.
          </p>
          <p className="text-white text-justify leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            - Configured and optimized deployment settings for seamless
            application hosting.
          </p>

          <h2 className="text-white text-justify font-bold leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mt-5">
            Firebase Services:
          </h2>
          <p className="text-white text-justify text-white leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            - Authentication: Implemented secure user authentication for mobile
            applications.
          </p>
          <p className="text-white text-justify leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            - Realtime Database: Designed and utilized Firebase Realtime
            Database for real-time data synchronization.
          </p>
          <p className="text-white text-justify leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            - Cloud Messaging: Integrated Firebase Cloud Messaging for push
            notifications and communication.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
