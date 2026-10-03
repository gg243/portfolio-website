import React, { useState } from "react";
import { myProjects } from "../constant/index";
import Project from "../components/Project";
import { motion, useMotionValue, useSpring } from "motion/react";

function Projects() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { damping: 15, stiffness: 100, mass: 0.5 });
  const springY = useSpring(y, { damping: 15, stiffness: 100, mass: 0.5 });
  
  const handleMouseMove = (event) => {
    // Add offset so cursor is centered
    x.set(event.clientX - 160);
    y.set(event.clientY - 112);
  };

  const [preview, setPreview] = useState(null);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing font-jetbrains"
      id="Projects"
    >
      <div className="mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-8">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sand to-amber-300">My</span> Selected Projects
          </h2>
          <motion.a
            href="https://drive.google.com/drive/folders/1OV4xpkK5xEIxWJhE1onbqwWbgRtYgPUm"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-aqua to-royal text-white rounded-full font-semibold shadow-lg shadow-royal/20"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Click to View Cloud Documented Projects</span>
            <img src="assets/arrow-right.svg" alt="arrow" className="w-5 brightness-0 invert" />
          </motion.a>
        </div>
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] mt-8 w-full opacity-50"></div>
      </div>
      
      <div className="flex flex-col">
        {myProjects.map((project) => (
          <Project key={project.id} {...project} setPreview={setPreview} />
        ))}
      </div>
      
      {preview && (
        <motion.div
          className="fixed z-50 top-0 left-0 pointer-events-none"
          style={{ x: springX, y: springY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={preview}
            alt="project preview"
            className="w-80 h-56 object-cover rounded-xl shadow-2xl border border-white/10"
          />
        </motion.div>
      )}
    </section>
  );
}

export default Projects;
