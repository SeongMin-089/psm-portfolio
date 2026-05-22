import React from "react"
import { motion } from "framer-motion"
import projects from "../../utils/project"
import "./styles/Project.scss"
import { useTheme } from "../../context/ThemeContext"

const Project = () => {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 36,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  }

  const cardWrapVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.section
      id="Project"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="inner project-inner">
        <div className="section-badge">
          <span className="section-badge-dot"></span>
          <span className="section-badge-text">Project</span>
        </div>

        <div className="project-title-box">
          <h2>프로젝트 모음</h2>
          <p>구현 결과를 정리했습니다.</p>
        </div>

        <motion.div className="project-list" variants={cardWrapVariants}>
          {projects.map((project, index) => {
            const thumbnail =
              isDark && project.darkThumbnail
                ? project.darkThumbnail
                : project.thumbnail

            return (
              <motion.article
                className={`project-card ${index % 2 === 1 ? "reverse" : ""}`}
                variants={cardVariants}
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
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Project