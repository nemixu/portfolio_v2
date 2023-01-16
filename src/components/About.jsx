import { React, useState } from "react";
import "../styles/AboutStyles.css";
import { FaReact } from "react-icons/fa";
import {
  DiHtml5,
  DiJsBadge,
  DiPython,
  DiDjango,
  DiCss3,
  DiNetmagazine,
  DiBootstrap,
} from "react-icons/di";

import { motion } from "framer-motion";

function About() {
  const [inView, setInView] = useState(false);
  return (
    <section className="text-white about-section" id="about">
      <motion.div
        inital={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        animate={inView ? { x: 100 } : { x: -500 }}
        onViewportEnter={() => setInView(!inView)}
        onViewportLeave={() => setInView(!inView)}
        className="about-container"
      >
        <h1 className="text-center">About Me</h1>
        <p className="text-center">
          I am a software engineer with a passion for technology and a drive to
          learn and grow. I began my journey in the tech industry in mid-2021,
          after making a career change. I took on a new challenge and landed my
          first role as a Xamarin front-end software engineer, something I never
          thought I could do as I had no experience with app development, I
          completed a 5-month internship and was subsequently promoted to an
          associate software engineer. My experience has given me a strong
          foundation in front-end development, as well as an eagerness to
          continue learning and expanding my skillset. I am excited to be a part
          of the dynamic and constantly evolving tech industry, and look forward
          to the opportunities and challenges it presents. I am currently
          dabbling in react and would love to pursue a carrer with this
          technology.
        </p>
        <h2 className="text-center text-white">Technologies I use</h2>
        <span className="font-size d-flex text-center justify-content-center">
          <FaReact />
          <DiHtml5 />
          <DiCss3 />
          <DiJsBadge />
          <DiNetmagazine />
          <DiPython />
          <DiDjango />
          <DiBootstrap />
        </span>
      </motion.div>
    </section>
  );
}

export default About;
