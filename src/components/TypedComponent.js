import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedComponent = ({ strings, typeSpeed, loop, cursorChar }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings,
      typeSpeed,
      loop,
      loopCount: Infinity,
      cursorChar
    });

    return () => {
      typed.destroy();
    };
  }, [strings, typeSpeed, loop, cursorChar]);

  return <span ref={el} />;
};

export default TypedComponent;
