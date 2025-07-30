import { section } from "motion/react-client";
import React, { use, useRef } from "react";
import Card from "../components/card";
import { Globe } from "../components/Globe";

function About() {
  const grid2Container = useRef();
  return (
    <section id="About" className="c-space section-spacing scroll-mt-20">
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
        <div className="grid-default-color grid-2">
          <div
            className="flex items-center justify-center w-full h-full "
            ref={grid2Container}
          >
            <p className="flex items-end text-5xl text-grey-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="DESIGN PRINCIPLE"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "45deg", top: "55%", left: "0%" }}
              text="DESIGN PATTERNS"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/blazor-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "10%", left: "10%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm somewhere in UTC+1 and open to remote work Worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        <div className="grid-special-color grid-4"></div>
        <div className="grid-default-color grid-5 p-2">
          <div className="overflow-auto h-full">
            <div className="subtext p-1 font-jetbrains">
              I'm a software engineer with a diverse background in cloud
              engineering and full-stack development. My expertise spans across
              multiple technologies including:
            </div>
            <ol className=" subtext text-white">
              <li>
                <span className="font-extrabold text-3xl">.</span> AWS, Azure,
                for cloud Engineerinf and Devops
              </li>
              <li>
                <span className="font-extrabold text-3xl">.</span> TypeScript
                and Flutter for application development
              </li>
              <li>
                <span className="font-extrabold text-3xl">.</span> NextJS,
                React, Nodejs and FastAPI as primary frameworks
              </li>
            </ol>
            <p className="subtext mt-1 ">
              Currently exploring the exciting world of Web3, diving deep into
              cryptocurrency concepts and learning Solidity for smart contract
              development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
