import React from "react";
import { motion, useInView } from "framer-motion"; // Import motion and useInView from framer-motion
import { useRef } from "react";
import TypedComponent from "./TypedComponent";
import SocialLinks from "./SocialLinks";

const Myname = ({variants}) => {
  const refLeft = useRef(null);
  const isInViewLeft = useInView(refLeft, { once: false });
  return (
    <>
      {/* Left Section with animation */}
      <motion.div
        ref={refLeft} // Reference for the left section
        className="h-[625px] w-full md:w-[45rem] flex flex-col justify-center items-start"
        initial="hidden"
        animate={isInViewLeft ? "visible" : "hidden"} // Animate based on visibility
        exit="exit"
        variants={variants}
        transition={{ duration: 1 }}
      >
        <div className="mb-44 mx-9">
          <h1 className="text-4xl mb-7">Hola! 👋 My name is</h1>
          <h1 className="text-7xl mb-3 font-Rocksalt">Mohammad</h1>
          <h1 className="text-7xl mb-3 font-Rocksalt">Suhel Baig</h1>
          <div className="text-4xl mt-7 text-indigo-700">
            <TypedComponent
              strings={[
                "I'm a Frontend Developer",
                "I Build Scalable Services",
                "I Solve Complex Problems",
                "I Love Web Development",
              ]}
              typeSpeed={50}
              loop={true}
              cursorChar="|"
            />
          </div>
          <SocialLinks />
        </div>
      </motion.div>
    </>
  );
};

export default Myname;
