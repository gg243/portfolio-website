import React, { useState } from "react";
import { motion } from "motion/react";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#Home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#About">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#Work">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#Contact">
          Contact
        </a>
      </li>
    </ul>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 w-full z-20 backdrop-blur-lg bg-black/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex justify-between items-center py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Drey
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden  hover:text-white focus:outline-none text-neutral-400"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="Menu"
              className="w-6 h-6"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
        {isOpen && (
          <motion.div
            className="block overflow-hidden text-center sm:hidden"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ maxHeight: "100vh" }}
            transition={{ duration: 1 }}
          >
            <nav className="pb-5">
              <Navigation />
            </nav>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
