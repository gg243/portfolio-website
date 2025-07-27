import { section } from "motion/react-client";
import React from "react";

function About() {
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-6 md:auto-rows-[18rem] gap-4">
        <div className="flex items-center grid-default-color grid-1"></div>
        <div className="grid-default-color grid-2"></div>
        <div className="grid-black-color grid-3"></div>
        <div className="grid-special-color grid-4"></div>
        <div className="grid-default-color grid-5"></div>
      </div>
    </section>
  );
}

export default About;
