import React from "react";

const Contacts = () => {
  return (
    <section className="w-full mx-0 section-spacing c-space p-14">
      <div className="mt-[12px] relative flex flex-col gap-2 font-jetbrains">
        <h2 className="uppercase px-1 text-white tracking-widest">
          you dream it, i code it
        </h2>

        <div className="text-5xl sm:text-9xl tracking-wider">CONTACT</div>
        <div className="relative">
          <div className="absolute border-t-2 inset-x-0" />
        </div>
        <p className="uppercase text-end">
          Got a question,have a project idea? we'd love to hear from you and
          discuss further
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-[64px] text-xl ">
        <h2>E-MAIL</h2>
        <div className="w-full h-px bg-white/20" />
        <p>forlanceyea@icloud.com</p>
        <h2>PHONE</h2>
        <div className="w-full h-px bg-white/20" />
        <p>08169741984</p>
        <h2>SOCIAL MEDIA</h2>
        <div className="w-full h-px bg-white/20" />
        <div className="flex tracking-widest ">
          <a className="hover:scale-105 cursor-pointer" href="">
            INSTAGRAM|
          </a>
          <a className="hover:scale-105 cursor-pointer" href="">
            {" "}
            X|
          </a>
          <a
            className="hover:scale-105 cursor-pointer"
            href="https://www.linkedin.com/in/emmanuel-damilare/"
          >
            LINKDELN|
          </a>
          <a
            className="hover:scale-105 cursor-pointer"
            href="https://github.com/gg243"
          >
            GITHUB
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
