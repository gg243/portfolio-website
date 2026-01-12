import { motion } from "motion/react";
import React from "react";

const ProjectDetails = ({
  title,
  description,
  href,
  subDescription,
  image,
  tags,
  closeModal,
}) => {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm w-full h-full overflow-hidden px-4"
      onClick={closeModal}
    >
      <motion.div
        className="relative max-w-lg w-full max-h-[90vh] border shadow-xl rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 overflow-y-auto custom-scrollbar"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-full top-3 right-3 bg-midnight/80 backdrop-blur-md hover:bg-gray-700 z-20 transition-colors border border-white/10"
        >
          <img src="assets/close.svg" className="w-5 h-5" />
        </button>
        <div className="flex flex-col h-full">
          <img
            src={image}
            alt={title}
            className="w-full h-48 md:h-64 object-cover rounded-t-2xl shrink-0"
          />
          <div className="p-6 md:p-8 flex flex-col gap-4">
            <div>
              <h5 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {title}
              </h5>
              <p className="text-neutral-300 font-medium">{description}</p>
            </div>

            <div className="space-y-2">
              {subDescription.map((item, index) => (
                <div key={index} className="flex gap-2 items-start">
                  <span className="text-sand mt-1.5 shrink-0">•</span>
                  <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
              <div className="flex -space-x-2">
                {tags.map((tag) => (
                  <div
                    key={tag.id}
                    className="p-1.5 bg-navy rounded-full border border-white/10 hover:-translate-y-1 transition-transform"
                    title={tag.name}
                  >
                    <img src={tag.path} alt={tag.name} className="size-6 md:size-8" />
                  </div>
                ))}
              </div>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sand/10 text-sand hover:bg-sand/20 transition-all font-semibold"
              >
                View Project
                <img src="assets/arrow-up.svg" className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
{
  /* <div className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10">
        <button className="absolute p-2 rounded-sm top-5 right-5"> </button>
      </div>
      Project Details */
}
