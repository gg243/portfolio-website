import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Reviews from "./sections/Reviews";
import Contacts from "./sections/Contacts";

const App = () => {
  return (
    <>
      <div className="container mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Reviews />

        {/* <section className="min-h-screen" />
        <section className="min-h-screen" /> */}
      </div>
      <Contacts />
    </>
  );
};

export default App;
