import React from "react";
import "../styles/HeaderStyles.css";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.div
      animate={{ x: [-500, 100, 0.5] }}
      className="d-flex justify-content-center"
    >
      <div className="intro-container">
        <div className="intro-child">
          <h1>Hi, I'm Stephen.</h1>
          <p>
            A driven and enthusiastic software engineer based in Dublin, I am
            dedicated to staying current with the latest technologies and
            continuously improving my skills. My passion for technology is
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
  );
}

export default Header;
