import { PROJECTS } from "./Details/index";
import { useState } from "react";
import "./css/Projects.css"; 

const Projects = () => {
  const [hover, setHover] = useState(null); 

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>

      <div className="projects-list">
        {PROJECTS.map((project, index) => (
          <div key={index} className="project-card">
            <div
              className="project-image-container"
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(null)}
            >
              <div className="flip-container">
                <div className={`flipper ${hover === index ? "hover" : ""}`}>
                  <div className="front">
                    <img src={project.image} alt={project.title} className="project-image" />
                  </div>
                  <div className="back">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                      Explore on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-details">
              <h6 className="project-title">{project.title}</h6>
              <p className="project-description">{project.description}</p>

              <div className="technologies-container">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="technology">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

