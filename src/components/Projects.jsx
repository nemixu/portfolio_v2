import React from "react";
import "../styles/ProjectsStyles.css";

function Projects() {
  const projects = [
    {
      title: "DN Fitness",
      image:
        "https://stevo-portfolio.s3.eu-west-1.amazonaws.com/static/images/dn-fitness.png",
      github: "https://github.com/nemixu/Milestone4",
      deployed: "dn-fitness.onrender.com/",
      technologies: ["Django", "python", "html", "css", "javascript", "stripe"],
    },
    {
      title: "Trivia Rooms",
      image:
        "https://stevo-portfolio.s3.eu-west-1.amazonaws.com/static/images/triviarooms.png",
      github: "https://github.com/nemixu/trivia-rooms",
      deployed: "https://nemixu.github.io/trivia-rooms/",
      technologies: ["Html", "css", "javascript", "bootstrap"],
    },
    {
      title: "Pokemon app",
      image:
        "https://stevo-portfolio.s3.eu-west-1.amazonaws.com/static/images/Pokemon.JPG",
      github: "https://github.com/nemixu/pokemon-app",
      deployed: "https://nemixu.github.io/pokemon-app?offset=0",
      technologies: ["React", "bootstrap"],
    },
    {
      title: "Movies Manager",
      image:
        "https://stevo-portfolio.s3.eu-west-1.amazonaws.com/static/images/movies-manager.png",
      github: "https://github.com/nemixu/Movies-Manager",
      deployed: "https://movies-manager-twad.onrender.com/",
      technologies: ["Python", "flask", "bootstrap"],
    },
    {
      title: "Giphy App",
      image:
        "https://stevo-portfolio.s3.amazonaws.com/static/images/gifapp.PNG",
      github: "https://github.com/nemixu/giphy-app-2",
      deployed: "https://nemixu.github.io/giphy-app-2/",
      technologies: ["Javascript"],
    },
    {
      title: "Fibromyalgia Ireland",
      image: "https://stevo-portfolio.s3.amazonaws.com/static/images/fibro.png",
      github: "https://github.com/nemixu/Milestone1",
      deployed: "https://www.fibromyalgia.ie/",
      technologies: ["Html", "css", "bootstrap"],
    },
  ];

  return (
    <div className="projects-container text-center justify-content-center">
      <h2 className="text-center text-white container-fluid">My Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="text-white col-6" key={index}>
            <div className="d-flex flex-column align-items-center p-5">
              <h4>{project.title}</h4>
              <img
                className="project-image"
                src={project.image}
                alt={project.title}
              />
              <a href={project.github}>Repository</a>
              <a href={project.deployed}>Deployed Site</a>
              <div className="tech-container d-inline-flex">
                {project.technologies.map((e, idx) => {
                  return (
                    <p className="m-1" key={idx}>
                      {e}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
