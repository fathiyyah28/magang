import React, { useContext } from "react";
import "./ProjectDetailModal.scss";
import StyleContext from "../../contexts/StyleContext";

export default function ProjectDetailModal({ project, onClose }) {
  const { isDark } = useContext(StyleContext);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className={isDark ? "modal-content modal-content-dark" : "modal-content modal-content-light"}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Section */}
        <div className="modal-header">
          <div className="header-info">
            <h2 className={isDark ? "dark-mode project-modal-title" : "project-modal-title"}>
              {project.projectName}
            </h2>
            <div className="project-modal-meta">
              <span className="project-modal-role-badge">{project.role}</span>
            </div>
          </div>
          <button
            className={isDark ? "close-button close-button-dark" : "close-button close-button-light"}
            onClick={onClose}
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        {/* Scrollable Body Section */}
        <div className="modal-body">
          {/* Main Enriched Details Grid */}
          <div className="details-grid">
            <div className="details-left">
              {/* Project Overview */}
              <div className="details-section">
                <h3 className={isDark ? "dark-mode section-heading" : "section-heading"}>
                  Project Overview
                </h3>
                <p className={isDark ? "dark-mode section-text" : "section-text"}>
                  {project.overview}
                </p>
              </div>

              {/* My Role */}
              <div className="details-section">
                <h3 className={isDark ? "dark-mode section-heading" : "section-heading"}>
                  My Role & Contributions
                </h3>
                <p className={isDark ? "dark-mode section-text" : "section-text"}>
                  {project.myRoleDetail}
                </p>
              </div>

              {/* System Architecture */}
              <div className="details-section">
                <h3 className={isDark ? "dark-mode section-heading" : "section-heading"}>
                  System Architecture
                </h3>
                <div className={isDark ? "architecture-box architecture-box-dark" : "architecture-box architecture-box-light"}>
                  <div className="architecture-diagram">
                    {project.architectureDiagram.split(" ──> ").map((node, index, arr) => (
                      <React.Fragment key={index}>
                        <span className="architecture-node">{node}</span>
                        {index < arr.length - 1 && <span className="architecture-arrow">➔</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="details-right">
              {/* Tech Stack */}
              <div className="details-section">
                <h3 className={isDark ? "dark-mode section-heading" : "section-heading"}>
                  Technologies Used
                </h3>
                <div className="tech-badge-container">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-badge-detail">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="details-section">
                <h3 className={isDark ? "dark-mode section-heading" : "section-heading"}>
                  Key Features
                </h3>
                <ul className="key-features-list">
                  {project.keyFeatures.map((feature, i) => (
                    <li key={i} className={isDark ? "dark-mode feature-item" : "feature-item"}>
                      <span className="checkmark">✔</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons Section */}
              <div className="project-actions-container">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repo-button"
                  >
                    <i className="fab fa-github"></i> Visit GitHub Repository
                  </a>
                )}
                {project.videoLink && (
                  <a
                    href={project.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="video-button"
                  >
                    <i className="fas fa-play-circle"></i> Video Dokumentasi Fitur
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Database Schema & Design Section */}
          {project.databaseDesign && (
            <div className="database-design-section">
              <h3 className={isDark ? "dark-mode section-heading" : "section-heading"}>
                <i className="fas fa-database mr-2"></i> Database Schema & Relation
              </h3>
              <div className="erd-container">
                {project.databaseDesign.erd.map((tableObj, index) => (
                  <div
                    key={index}
                    className={
                      isDark
                        ? "erd-table-card erd-table-card-dark"
                        : "erd-table-card erd-table-card-light"
                    }
                  >
                    <div className="erd-table-header">
                      <i className="fas fa-table"></i> {tableObj.table}
                    </div>
                    <ul className="erd-table-columns">
                      {tableObj.columns.map((col, idx) => {
                        const isPK = col.includes("(PK");
                        const isFK = col.includes("(FK");
                        return (
                          <li key={idx} className="erd-column-item">
                            <span>{col.split(" (")[0]}</span>
                            <div className="column-badges">
                              {isPK && <span className="col-badge pk-badge">PK</span>}
                              {isFK && <span className="col-badge fk-badge">FK</span>}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
              <ul className="database-details-list">
                {project.databaseDesign.details.map((detail, idx) => (
                  <li key={idx} className={isDark ? "dark-mode detail-item" : "detail-item"}>
                    <span className="bullet-point">🔸</span> {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* API Documentation Section */}
          {project.apiDocumentation && (
            <div className="api-documentation-section">
              <h3 className={isDark ? "dark-mode section-heading" : "section-heading"}>
                <i className="fas fa-network-wired mr-2"></i> REST API Endpoints (Swagger / Postman)
              </h3>
              <div className="swagger-container">
                {project.apiDocumentation.map((endpoint, index) => {
                  const methodClass = `swagger-method-${endpoint.method.toLowerCase()}`;
                  return (
                    <div
                      key={index}
                      className={
                        isDark
                          ? `swagger-row swagger-row-dark ${methodClass}`
                          : `swagger-row swagger-row-light ${methodClass}`
                      }
                    >
                      <span className="swagger-method-badge">{endpoint.method}</span>
                      <span className="swagger-path">{endpoint.path}</span>
                      <span className={isDark ? "dark-mode swagger-desc" : "swagger-desc"}>
                        {endpoint.desc}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Screenshots Gallery Section */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="screenshots-section">
              <h3 className={isDark ? "dark-mode section-heading" : "section-heading"}>
                Feature Screenshots
              </h3>
              <div className="screenshots-gallery">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="gallery-image-container">
                    <img
                      src={screenshot}
                      alt={`${project.projectName} Screenshot ${index + 1}`}
                      className="gallery-image"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
