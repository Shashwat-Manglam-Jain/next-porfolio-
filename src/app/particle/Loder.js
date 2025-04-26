"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Loader = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Certificates", "Forms", "Images", "Cards", "Buttons", "Videos"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="loader">
      <p className="load">SHASHWAT MANGLAM Jain</p>
      <p className="p2">
        Loading <span ref={el} className="change_item" style={{ color: "#483285" }}></span>
      </p>
    </div>
  );
};

export default Loader;
