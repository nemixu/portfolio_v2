import React from "react";
import "../styles/ProjectsStyles.css";
import { FiGithub } from "react-icons/fi";
import { IoMdOpen } from "react-icons/io";
function Projects() {
  const projects = [
    {
      title: "DN Fitness",
      image:
        "https://stevo-portfolio.s3.eu-west-1.amazonaws.com/static/images/dn-img.png",
      github: "https://github.com/nemixu/Milestone4",
      deployed: "https://dn-fitness.onrender.com/",
      description:
        "An e-commerce web application built using the Django framework. It includes features such as integration with Stripe for payment processing at checkout, a custom shopping cart, a checkout page, user profiles, guest checkout options, and a specially designed navigation sidebar for mobile devices.",
      technologies: ["Django", "Python", "HTML", "CSS", "JavaScript", "Stripe"],
    },
    {
      title: "Trivia Rooms",
      image:
        "https://stevo-portfolio.s3.eu-west-1.amazonaws.com/static/images/tr-img.png",
      github: "https://github.com/nemixu/trivia-rooms",
      deployed: "https://nemixu.github.io/trivia-rooms/",
      description:
        "My first JavaScript application is an interactive trivia game that utilizes the DOM to respond to user input. The game pulls questions and answers from an API, keeps track of the user's correct and incorrect answers, provides instant feedback to the user by highlighting the answers in green or red depending on if they are correct or incorrect, and finally displays the final score at the end.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
      title: "Pokemon app",
      image:
        "https://stevo-portfolio.s3.eu-west-1.amazonaws.com/static/images/pm-img.png",
      github: "https://github.com/nemixu/pokemon-app",
      deployed: "https://nemixu.github.io/pokemon-app?offset=0",
      description:
        "My first React application is a web app that utilizes the Pokemon API and Axios library to fetch information on all Pokemon. It features a custom Pokemon card component that displays each Pokemon's name, image, and associated stats, pagination functionality to fetch the next set of Pokemon, and a Pokemon detail page that provides further information on a selected Pokemon when clicked",
      technologies: ["React", "Bootstrap"],
    },
    {
      title: "Movies Manager",
      image:
        "https://stevo-portfolio.s3.eu-west-1.amazonaws.com/static/images/mm-img.png",
      github: "https://github.com/nemixu/Movies-Manager",
      deployed: "https://movies-manager-twad.onrender.com/",
      description:
        "Movies Manager is a web application built using Flask, Python, JavaScript, and MongoDB. The goal of the project is to provide a platform for users to search for movies, create an account and store their favorite movies to their profile, it allows for CRUD functionality on their list of favorite movies.",
      technologies: ["Python", "Flask", "Bootstrap"],
    },
    {
      title: "Giphy App",
      image:
        "https://stevo-portfolio.s3.eu-west-1.amazonaws.com/static/images/gy-img.png",
      github: "https://github.com/nemixu/giphy-app-2",
      deployed: "https://nemixu.github.io/giphy-app-2/",
      description:
        "Giphy App is a JavaScript application that was built to practice JavaScript skills. It fetches gifs from the Giphy API, a user can type in a keyword and click search, the application will display a list of gifs that match the keyword in order on the page.",
      technologies: ["JavaScript"],
    },
    {
      title: "Fibromyalgia Ireland",
      image:
        "https://stevo-portfolio.s3.eu-west-1.amazonaws.com/static/images/fm-img.png",
      github: "https://github.com/nemixu/Milestone1",
      deployed: "https://www.fibromyalgia.ie/",
      description:
        "Fibromyalgia Ireland is my first web application that I built using HTML, CSS, and Bootstrap. This was my first project for university and I scored 98% on it. The goal was to create a single-page, static application that had clear sections and good contrast. It passed all Lighthouse accessibility testing.",
      technologies: ["HTML", "CSS", "Bootstrap"],
    },
  ];

  return (
    <section
      className="projects-container text-center justify-content-center"
      id="work"
    >
      <h2 className="text-center heading-color fz-heading container-fluid">
        Some Things I've Built
      </h2>
      <ul className="projects-outter-grid">
        {projects.map((project, index) => {
          const { image, title, github, deployed, description } = project;

          return (
            <li className="projects-inner-grid" key={index}>
              <div className="project-content">
                <div>
                  <h3 className="project-title">
                    <a href={deployed}>{title}</a>
                  </h3>

                  <div className="project-description">{description}</div>
                  <div className="d-inline-flex tech-container">
                    {project.technologies.map((tech, idx) => {
                      return (
                        <p
                          className="text-capitalize px-1 tech-text pt-3"
                          key={idx}
                        >
                          {tech}
                        </p>
                      );
                    })}
                  </div>
                  <div className="project-links">
                    <a
                      target="_blank"
                      href={github}
                      aria-label="Visit the github page for this project"
                    >
                      <FiGithub />
                    </a>
                    <a
                      target="_blank"
                      href={deployed}
                      aria-label="Visit the deployed page for this project"
                    >
                      <IoMdOpen />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-image">
                <img
                  className="img"
                  src={image}
                  alt={`project image ${index}`}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Projects;
