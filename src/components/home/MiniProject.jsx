import React from "react"
import miniProjects from "../../utils/miniProject"
import "./styles/MiniProject.scss"

const MiniProject = () => {
  const normalProjects = miniProjects.filter((project) => !project.wide)
  const wideProjects = miniProjects.filter((project) => project.wide)

  const leftProjects = normalProjects.filter((_, index) => index % 2 === 0)
  const rightProjects = normalProjects.filter((_, index) => index % 2 === 1)

  const renderMiniCard = (project, index) => (
    <a
      href={project.link}
      className={`mini-card ${project.wide ? "wide" : ""}`}
      key={project.id}
      target="_blank"
      rel="noreferrer"
    >
      <div className="mini-top">
        <span className="mini-category">{project.category}</span>

        <span className="mini-icon">
          <img src={project.icon} alt="" />
        </span>
      </div>

      <div className="mini-text">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <div className="tags">
        {project.tags.map((tag, i) => (
          <span key={i}>
            {tag.icon && <img src={tag.icon} alt="" />}
            {tag.name}
          </span>
        ))}
      </div>

      <div className="mini-bottom">
        <span className="mini-summary">
          <img src={project.summaryIcon} alt="" />
          {project.summary}
        </span>

        <strong>MINI {String(index + 1).padStart(2, "0")}</strong>
      </div>
    </a>
  )

  return (
    <section id="MiniProject">
      <div className="inner mini-inner">
        <div className="section-badge">
          <span className="section-badge-dot"></span>
          <span className="section-badge-text">MINI-Project</span>
        </div>

        <div className="mini-title-box">
          <h2>미니 프로젝트 모음</h2>
          <p>간단한 구현을 정리했습니다.</p>
        </div>

        <div className="mini-card-wrap">
          <div className="mini-column">
            {leftProjects.map((project) =>
              renderMiniCard(
                project,
                miniProjects.findIndex((item) => item.id === project.id)
              )
            )}
          </div>

          <div className="mini-column">
            {rightProjects.map((project) =>
              renderMiniCard(
                project,
                miniProjects.findIndex((item) => item.id === project.id)
              )
            )}
          </div>

          {wideProjects.map((project) =>
            renderMiniCard(
              project,
              miniProjects.findIndex((item) => item.id === project.id)
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default MiniProject