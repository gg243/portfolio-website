import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import { motion } from "motion/react";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <motion.div
        className="group flex-wrap items-center justify-between space-y-8 py-12 sm:flex sm:space-y-0 cursor-pointer transition-all duration-300 hover:bg-white/5 rounded-2xl px-6 -mx-6"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
        onClick={() => setIsHidden(true)}
      >
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl md:text-5xl font-bold text-neutral-200 group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          <div className="flex flex-wrap gap-3 mt-2">
            {tags.map((tag) => (
              <span 
                key={tag.id}
                className="px-3 py-1 rounded-full text-xs font-jetbrains font-medium bg-white/10 text-neutral-300 border border-white/5 group-hover:border-white/20 transition-all duration-300"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        <button
          className="flex items-center justify-center gap-2 group-hover:translate-x-2 transition-transform duration-300 text-neutral-400 group-hover:text-white"
        >
          <span className="font-light tracking-wide text-sm md:text-base uppercase">View Project</span>
          <img
            src="assets/arrow-right.svg"
            alt="arrow right icon"
            className="w-6 opacity-70 group-hover:opacity-100 transition-opacity"
          />
        </button>
      </motion.div>
      <div className="bg-gradient-to-r from-transparent via-neutral-800 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          tags={tags}
          image={image}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
