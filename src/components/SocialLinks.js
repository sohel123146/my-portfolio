import React from "react";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const SocialLinks = () => {
  return (
    <div className="links mt-6 p-6 h-[70px] w-[470px] flex flex-row justify-around items-center">
      <div id="email" className="email hover:text-indigo-800">
        <Link to={`mailto:mohammadsohelbaig178@gmail.com?subject=Contact&body=Hello!`}>
          <IoIosMail className="text-6xl" />
        </Link>
      </div>
      <div id="email" className="email hover:text-indigo-800">
        <Link to={`https://github.com/sohel123146`} target="_blank">
          <FaGithub className="text-6xl" />
        </Link>
      </div>
      <div id="email" className="email hover:text-indigo-800">
        <Link to={`https://www.linkedin.com/in/mohammad-suhel-baig-b82a21172/`} target="_blank">
          <FaLinkedin className="text-6xl" />
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;
