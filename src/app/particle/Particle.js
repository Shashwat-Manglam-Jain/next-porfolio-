"use client"; // Ensures this runs only on the client-side

import { useEffect, useRef } from "react";
import "particles.js"; // Ensure this package is properly installed
import Typed from "typed.js";

const Particle = () => {
    const el = useRef(null);
  
    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: [  "Data Scientist",
          "Machine Learning Engineer",
          "Artificial Intelligence Enthusiast",
          "Deep Learning Researcher",
          "Natural Language Processing Expert",
          "Computer Vision Specialist",
          "Big Data Analyst",
          "Neural Networks Enthusiast",
          "Algorithm Developer",
          "Technology Explorer",
          "Continuous Learner",],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true,
      });
  
      return () => {
        typed.destroy(); // Cleanup on unmount
      };
    }, []);
  useEffect(() => {
    if (typeof window !== "undefined" && window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 150,
            density: { enable: true, value_area: 800 },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.8 },
          size: { value: 4, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: { enable: true, speed: 6, direction: "none" },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  const openMenu = () => document.querySelector(".item_1").classList.remove("item_remove");
  const closeMenu = () => document.querySelector(".item_1").classList.add("item_remove");


  return (
    <div id="particles-js" style={{overflow:"hidden"}}>
      <div
        id="Home"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2 id="hello">Hello Everybody,</h2>
        <h1 id="hello">I'm SHASHWAT MANGLAM Jain</h1>
        <h3 id="hello">
          <span  ref={el}  className="text_change" style={{ color: "gray" }}> </span>
        </h3>
      </div>

      <div className="icon">
        <img
          src="https://res.cloudinary.com/domiypko6/image/upload/v1734713597/Portfolio/mernProject/vbo0mpppnfljacpx7l7i.png"
          alt=""
          className="i1"
        />

        <a href="https://github.com/Shashwat-Manglam-Jain" target="_blank" rel="noopener noreferrer">
          <img
            src="https://res.cloudinary.com/domiypko6/image/upload/v1734713488/Portfolio/mernProject/fops713yfxwoeybyc6ai.png"
            alt=""
            className="i2"
            style={{ zIndex: 10000 }}
          />
        </a>

        <img
          src="https://res.cloudinary.com/domiypko6/image/upload/v1734713642/Portfolio/mernProject/yglxrjnyxl8fb3mauqqc.png"
          alt=""
          className="i3"
        />

        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shashwat100K@gmail.com" target="_blank" rel="noopener noreferrer">
          <img
            className="i4"
            src="https://static.vecteezy.com/system/resources/previews/016/716/465/original/gmail-icon-free-png.png"
            alt=""
          />
        </a>

        <a href="https://www.instagram.com/shashwat_manglam_jain_/" target="_blank" rel="noopener noreferrer">
          <img
            className="i5"
            src="https://res.cloudinary.com/domiypko6/image/upload/v1734714375/Portfolio/mernProject/qxscao4rtzuotuiqpdjg.png"
            alt=""
          />
        </a>

        <a href="https://www.linkedin.com/in/shashwat-manglam-jain-5930b4275/" target="_blank" rel="noopener noreferrer">
          <img
            className="i6"
            src="https://res.cloudinary.com/domiypko6/image/upload/v1734713734/Portfolio/mernProject/wl9npolhelzbycl4i0kl.png"
            alt=""
          />
        </a>

        <img
          className="i7"
          src="https://static.thenounproject.com/png/44187-200.png"
          onClick={() => console.log("Open CV function")}
          alt=""
        />

        <a href="https://wa.link/wkvpig" target="_blank" rel="noopener noreferrer">
          <img
            className="i8"
            src="https://res.cloudinary.com/domiypko6/image/upload/v1734713766/Portfolio/mernProject/qansrzfnxggjyp1pd5qv.png"
            alt=""
          />
        </a>
      </div>

      <div className="menu"  onClick={openMenu}>
        <div className="m1"></div>
        <div className="m2"></div>
      </div>

      <div className="item_1 item_remove" style={{ textTransform: "uppercase" }}    onClick={closeMenu}>
        <img
          src="https://res.cloudinary.com/domiypko6/image/upload/v1734712213/Portfolio/mernProject/h5vxiyjr6v4r31ogqhsb.png"
          alt=""
          className="cross"
        />
        <li className="li"><a href="/#Home">Home</a></li>
        <li className="li"><a href="/#AboutMe">About</a></li>
        <li className="li"><a href="/#Skills_">Skills</a></li>
        <li className="li"><a href="/#Certificates">Certificates</a></li>
        <li className="li"><a href="/#Projects">Projects</a></li>
        <li className="li"><a href="/#Contact">Contact</a></li>
      </div>
    </div>
  );
};

export default Particle;
