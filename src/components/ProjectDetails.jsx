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
    <div className=" fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm w-full h-full overflow-hidden">
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        intial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-6 h-6" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        <div className="p-5">
          <h5 className="mb-5 text-2xl font-bold text-white"> {title}</h5>
          <p className="mb-3 font-normal text-neutral-400"> {description}</p>
          {subDescription.map((item, index) => (
            <p className="font-normal mb-3 text-neutral-400">
              {subDescription}{" "}
            </p>
          ))}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
            <a className="inline-flex cursor-pointer hover-animation items-center gap-1 font-medium">
              View Poject{" "}
              <img src="assets/arrow-up.svg" className="size-4" href={href} />
            </a>
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
