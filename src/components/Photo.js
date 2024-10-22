import React from "react";
import { motion, useInView } from "framer-motion"; // Import motion and useInView from framer-motion
import { useRef } from "react";

const Photo = () => {
  const refRight = useRef(null);
  const isInViewRight = useInView(refRight, { once: false });
  return (
    <>
      {/* Right Section with animation */}
      <motion.div
        ref={refRight} // Reference for the right section
        className="h-[625px] w-full md:w-[45rem] flex flex-col justify-center items-center"
        initial={{ opacity: 0, x: "100%" }} // Start off-screen to the right for the right card
        animate={
          isInViewRight ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }
        } // Animate based on visibility
        exit={{ opacity: 0, x: "-100%" }} // Exit position (off-screen to the left)
        transition={{ duration: 1 }}
      >
        <img
          src="https://placehold.co/600x400"
          alt="uploaded"
          className="w-full h-auto"
        />
      </motion.div>
    </>
  );
};

export default Photo;
