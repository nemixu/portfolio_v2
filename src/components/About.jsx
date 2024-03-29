import { React, useState } from "react";
import "../styles/AboutStyles.css";
import { FaReact } from "react-icons/fa";
import {
  DiJsBadge,
  DiDjango,
  DiNetmagazine,
  DiBootstrap,
} from "react-icons/di";

import { motion } from "framer-motion";

function About() {
  const [inView, setInView] = useState(false);

  const tech = [
    {
      technology: "React",
      icon: FaReact,
      Usage:
        "I recently began learning React around the Christmas season, dedicating my time to building personal projects and actively seeking out new knowledge to enhance my understanding of the technology.",
    },
    {
      technology: ".Net",
      icon: DiNetmagazine,
      Usage:
        "When I secured an internship with Oneview, I had no prior experience with C# or Xamarin Forms. However, through on-the-job training and self-study, I was able to quickly acquire the necessary skills and eventually progressed with a promotion to become a front-end Xamarin software engineer.",
    },
    {
      technology: "Django",
      icon: DiDjango,
      Usage:
        "Django was the first web development framework I ever learned and used. I had the opportunity to apply my knowledge during college when I completed a major project, an e-commerce web application, using Django. The application featured Stripe payments, user profiles, and guest checkouts.",
    },
    {
      technology: "JavaScript",
      icon: DiJsBadge,
      Usage:
        "JavaScript has been a part of my toolset for some time, although it has not been my primary technology. I am motivated to improve my proficiency in it. I have applied JavaScript to various personal projects and also use it occasionally in my daily job.",
    },
    {
      technology: "Bootstrap",
      icon: DiBootstrap,
      Usage:
        "Bootstrap was the first CSS library I ever learned and has been a staple in almost all of my personal projects. I appreciate its ease of use and how quickly it allows me to create visually appealing applications with its built-in styling and features. Recently, I have been exploring the newest version of the library.",
    },
  ];
  return (
    <section className="about-section" id="about">
      <motion.div
        transition={{ duration: 0.7, ease: [0, 0.71, 0.2, 1.01] }}
        animate={
          inView
            ? { scale: [0, 0, 1], opacity: 1 }
            : { scale: [0, 0, 0], opacity: 0 }
        }
        onViewportEnter={() => setInView(!inView)}
        onViewportLeave={() => setInView(!inView)}
        className="about-container"
      >
        <h1 className="text-center fz-heading heading-color aboutme">
          About Me
        </h1>
        <p className="text-center text-white fz-xl">
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
      </motion.div>
    </section>
  );
}

export default About;
