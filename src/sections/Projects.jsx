import { section } from "motion/react-client";
import React from "react";
import { myProjects } from "../constant/index";
import Project from "../components/Project";

function Projects() {
  return (
    <section className="relative c-space section-spacing ">
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from from-transparent via-neutral-700 to-transparent h-[1px] mt-12 w-full"></div>
      {myProjects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </section>
  );
}

export default Projects;
