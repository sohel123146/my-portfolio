import React from "react";
import Myname from "../components/Myname";
import Photo from "../components/Photo";

const Hello = () => {

  // Define the animation variants
  const variants = {
    hidden: { opacity: 0, x: '-100%' }, // Start off-screen to the left for the left card
    visible: { opacity: 1, x: 0 }, // End position (visible)
    exit: { opacity: 0, x: '100%' }, // Exit position (off-screen to the right)
  };

  return (
    <section id="home" className="h-[750px] flex flex-col md:flex-row justify-around items-center">
      <Myname variants={variants}/>
      <Photo/>
    </section>
  );
};

export default Hello;
