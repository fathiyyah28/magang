import React, { useContext, useState } from "react";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import ProjectDetailModal from "./ProjectDetailModal";

export default function StartupProject() {
  const { isDark } = useContext(StyleContext);
  const [selectedProject, setSelectedProject] = useState(null);

  if (!bigProjects.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {/* Large Screenshot Section */}
                  {project.image ? (
                    <div className="project-image-wrapper">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="project-screenshot-large"
                      />
                    </div>
                  ) : null}

                  {/* Card Content Section */}
                  <div className="project-card-content">
                    {/* Role Tag */}
                    <div className="project-role-container">
                      <span className="project-role-badge">{project.role}</span>
                    </div>

                    {/* Project Title */}
                    <h3 className={isDark ? "dark-mode card-title" : "card-title"}>
                      {project.projectName}
                    </h3>

                    {/* Tech Stack Badges */}
                    <div className="tech-badge-container-inline">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="tech-badge-card">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Short Description */}
                    <p className={isDark ? "dark-mode card-description" : "card-description"}>
                      {project.projectDesc}
                    </p>

                    {/* Custom Action Buttons Footer */}
                    <div className="project-card-actions">
                      <button
                        className="action-button detail-button"
                        onClick={() => setSelectedProject(project)}
                      >
                        Detail
                      </button>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={isDark ? "action-button github-button-dark" : "action-button github-button-light"}
                        >
                          <i className="fab fa-github"></i> GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Project Detail Modal Portal */}
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </Fade>
  );
}
