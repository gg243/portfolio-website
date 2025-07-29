import React from "react";
import HeroText from "../components/HeroText";
import ParrallaxBackground from "../components/ParrallaxBackground";

function Hero() {
  return (
    <section
      id="Home"
      className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space"
    >
      <HeroText />
      <ParrallaxBackground />
    </section>
  );
}

export default Hero;
