import React from "react";

const Project = ({ title, description, subDescription, href, image, tags }) => {
  return (
    <>
      <div className="flex-wrap items-center justify-between space-y-14 py-10 sm:flex sm:space-y-0">
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button className="flex item-center justify-center gap-1 hover-animation cursor-pointer">
          Readmore
          <img
            src="assets/arrow-right.svg"
            alt="arrow right icon"
            className="w-5"
          />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
    </>
  );
};

export default Project;
