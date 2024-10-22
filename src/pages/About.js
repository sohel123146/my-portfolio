import React from "react";
import Aboutme from "../components/Aboutme";
import Skills from "../components/Skills";


const About = () => {
  return (
    <>
      <main
        id="about"
        className="mt-8 h-[600px]  flex flex-row justify-around items-center"
      >
        <Aboutme/>
        <Skills/>
      </main>
    </>
  );
};

export default About;
