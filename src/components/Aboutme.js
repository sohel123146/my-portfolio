import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Aboutme = () => {
  // Create refs to track when the sections come into view
  const refLeft = useRef(null);

  // Check if the sections are in view
  const isInViewLeft = useInView(refLeft, { once: false });
  return (
    <>
      <motion.section
        ref={refLeft} // Reference for the left section
        className="m-6 flex flex-col justify-around items-center"
        initial={{ opacity: 0, x: -100 }} // Initial state for left section
        animate={{
          opacity: isInViewLeft ? 1 : 0,
          x: isInViewLeft ? 0 : -100,
        }} // Animate based on visibility
        transition={{ duration: 0.5 }} // Animation duration
      >
        <div className="h-[70px] w-[45rem]  flex justify-center items-center">
          <h1 className="text-4xl font-bold font-Rocksalt p-2">ABOUT ME</h1>
        </div>
        <div className="h-[420px] w-[45rem] flex flex-col justify-center items-start p-6 space-y-4">
          <p className="text-xl">
            I'm a Frontend Developer based in India who is passionate about
            delivering value to businesses through technology. I love the
            challenge of finding creative solutions to problems, and I enjoy
            collaborating with teams to achieve great results.
          </p>
          <p className="text-xl">
            I am dedicated to keeping up-to-date with the latest technologies
            and trends to provide the best solutions for my clients.
          </p>
          <p className="text-xl">
            I pay great attention to detail in the design and development of my
            projects. My ultimate goal is to create software that is both
            user-friendly and impactful in achieving the client's objectives.
          </p>
        </div>
      </motion.section>
    </>
  );
};

export default Aboutme;
