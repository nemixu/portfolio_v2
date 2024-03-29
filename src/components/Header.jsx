import React, { useEffect, useState } from "react";
import "../styles/HeaderStyles.css";
import { motion } from "framer-motion";
import { BiUpArrowCircle } from "react-icons/bi";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Header() {
  const [show, setShow] = useState(false);

  const toTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", toTopVisibility);
  }, []);

  const toTopVisibility = () => {
    if (window.scrollY > 700) {
      setShow(true);
    } else if (window.scrollY < 600) {
      setShow(false);
    }
  };
  return (
    <>
      <motion.div
        animate={{ x: [-500, 100, 0.5] }}
        className="header-container justify-content-center"
      >
        <div className="intro-container">
          <div className="intro-child">
            <p className="hero-text-small">Hi, my name is</p>
            <h2 className="hero-text">Stephen Seagrave.</h2>
            <h3 className="hero-text-sub">
              I Build things for web and mobile.
            </h3>
            <p className="fz-xl">
              A driven and enthusiastic software engineer based in Dublin, I am
              dedicated to staying current with the latest technologies and
              continuously improve my skills. My passion for technology is
              evident in my approach to problem-solving and my eagerness to take
              on new challenges. Explore my portfolio to see examples of my work
              and don't hesitate to reach out to me for opportunities or
              collaborations.
            </p>
          </div>
        </div>
        <motion.div
          animate={{ scale: [0, 0, 1] }}
          className="background-image"
        ></motion.div>
      </motion.div>
      <motion.div
        role="toolbar"
        className="totop-button"
        initial={{ opacity: 0 }}
        animate={show ? { opacity: 1, x: [500, 100, 0.5] } : { opacity: 0 }}
      >
        <a
          role="button"
          className="d-flex h-100 text-white"
          aria-label="To Top"
          onClick={toTop}
        >
          <span className="to-topbutton-icon" aria-hidden="true">
            <BiUpArrowCircle />
          </span>
        </a>
      </motion.div>
      <motion.div
        className="socials-links text-white"
        initial={{ opacity: 0 }}
        animate={show ? { opacity: 1, x: [-500, -100, 1] } : { opacity: 0 }}
      >
        <ul>
          <li>
            <a
              className="social-links-icons"
              href="https://www.linkedin.com/in/steseagrave/"
              target="_blank"
              aria-label="Link to stephens linkedin profile"
            >
              <AiFillLinkedin />
            </a>
          </li>
          <li>
            <a
              className="social-links-icons"
              href="https://github.com/nemixu"
              target="_blank"
              aria-label="Link to stephens github profile"
            >
              <AiFillGithub />
            </a>
          </li>
        </ul>
      </motion.div>
    </>
  );
}

export default Header;
