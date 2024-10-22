import React from "react";
import Darkmode from "./Darkmode";

const Navbar = ({toggleMode,mode}) => {

  return (
    <div className="flex justify-between items-center p-4 shadow-lg">
      {/* Title */}
      <div className="title text-3xl font-Rocksalt">
        Suhel
        <span className="mx-2">&lt;/&gt;</span>
        Baig
      </div>

      {/* Navigation and Moon Icon */}
      <div className="navigation flex flex-row items-center space-x-4">
        <nav>
          <ul className="flex space-x-6 p-2">
            <li className="hover:text-indigo-800 font-Rocksalt px-4 py-2">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-indigo-800 font-Rocksalt px-4 py-2">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-indigo-800 font-Rocksalt px-4 py-2">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-indigo-800 font-Rocksalt px-4 py-2">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <Darkmode toggleMode={toggleMode} mode={mode} />
      </div>
    </div>
  );
};

export default Navbar;
