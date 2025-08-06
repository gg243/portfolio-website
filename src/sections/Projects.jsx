import { section } from "motion/react-client";
import React from "react";
import { myProjects } from "../constant/index";
import Project from "../components/Project";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useState } from "react";

function Projects() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (event) => {
    x.set(event.clientX);
    y.set(event.clientY);
  };

  const [preview, setPreview] = useState(null);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing font-jetbrains"
    >
      <h2 className="text-4xl sm:text-7xl">
        <span className="bg-amber-300">My</span> Selected Projects
      </h2>
      <div className="bg-gradient-to-r from from-transparent via-neutral-700 to-transparent h-[1px] mt-12 w-full"></div>
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {preview && (
        <motion.img
          src={preview}
          alt="project preview"
          className="w-80 h-56 object-cover rounded-lg fixed z-50 top-0 left-0 pointer-events-none shadow-lg"
          style={{ x, y }}
        />
      )}
    </section>
  );
}

export default Projects;
