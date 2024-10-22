import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";


const Darkmode = ({toggleMode,mode}) => {
  return (
    <div className="moon cursor-pointer">
        {mode === 'light' ? <FaMoon className="text-3xl" onClick={toggleMode}/> : <FaSun className="text-3xl" onClick={toggleMode}/>}
    </div>
  );
};

export default Darkmode;
