import React from "react";
import HeroText from "../components/HeroText";
import ParrallaxBackground from "../components/ParrallaxBackground";

function Hero() {
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParrallaxBackground />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
    </section>
  );
}

export default Hero;
