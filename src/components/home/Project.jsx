import React from "react"
import projects from "../../utils/project"
import "./styles/Project.scss"
import { useTheme } from "../../context/ThemeContext"

const Project = () => {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <section id="Project">
      <div className="inner project-inner">
        <div className="section-badge">
          <span className="section-badge-dot"></span>
          <span className="section-badge-text">Project</span>
        </div>

        <div className="project-title-box">
          <h2>프로젝트 모음</h2>
          <p>구현 결과를 정리했습니다.</p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => {
            const thumbnail =
              isDark && project.darkThumbnail
                ? project.darkThumbnail
                : project.thumbnail

            return (
              <article
                className={`project-card ${index % 2 === 1 ? "reverse" : ""}`}
                key={project.id}
              >
                <a
                  href={project.links.notion}
                  className="project-info"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="project-top">
                    <span className="project-category">{project.category}</span>

                    <span className="project-icon">
                      <img src={project.icon} alt="" />
                    </span>
                  </div>

                  <div className="project-text">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>

                  <div className="tags">
                    {project.tags.map((tag, i) => (
                      <span key={i}>
                        <img src={tag.icon} alt="" />
                        {tag.name}
                      </span>
                    ))}
                  </div>

                  <div className="project-bottom">
                    <span className="project-summary">
                      <img src={project.summaryIcon} alt="" />
                      {project.summary}
                    </span>

                    <strong>PROJECT {String(index + 1).padStart(2, "0")}</strong>
                  </div>
                </a>

                <a
                  href={project.links.demo}
                  className="project-visual"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={thumbnail} alt={`${project.title} preview`} />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Project