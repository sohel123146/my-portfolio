import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
      // Create refs to track when the sections come into view
  const refRight = useRef(null);

  // Check if the sections are in view
  const isInViewRight = useInView(refRight, { once: false });

  return (
    <>
      <motion.section
        ref={refRight} // Reference for the right section
        className="m-6 flex flex-col justify-around items-center"
        initial={{ opacity: 0, x: 100 }} // Initial state for right section
        animate={{
          opacity: isInViewRight ? 1 : 0,
          x: isInViewRight ? 0 : 100,
        }} // Animate based on visibility
        transition={{ duration: 0.5 }} // Animation duration
      >
        <div className="h-[70px] w-[45rem]  flex justify-center items-center">
          <h1 className="text-4xl font-bold font-Rocksalt p-2">SKILLS</h1>
        </div>
        <div className="h-[420px] w-[45rem] grid grid-rows-5 grid-flow-col gap-4 p-6 space-y-4">
          {/* Add your skills content here */}
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
        </div>
      </motion.section>
    </>
  );
};

export default Skills;
