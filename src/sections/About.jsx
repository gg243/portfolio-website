import { section } from "motion/react-client";
import React from "react";

function About() {
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-6 md:auto-rows-[18rem] gap-4">
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I am drey</p>
            <p className="subtext">
              Over the past 4 years I have developed my programming skills to be
              able to deliver state of the art web Applications
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        <div className="grid-default-color grid-2"></div>
        <div className="grid-black-color grid-3"></div>
        <div className="grid-special-color grid-4"></div>
        <div className="grid-default-color grid-5"></div>
      </div>
    </section>
  );
}

export default About;
