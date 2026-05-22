import React from "react"
import { motion } from "framer-motion"
import "./styles/Skills.scss"
import skills from "../../utils/skill"

const Skills = () => {
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
      id="Skills"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="inner skills-inner">
        <div className="circle-line circle-left"></div>
        <div className="circle-line circle-right"></div>

        <div className="section-badge">
          <span className="section-badge-dot"></span>
          <span className="section-badge-text">Skills</span>
        </div>

        <div className="skills-title-box">
          <h2>{skills.title}</h2>
          <p>{skills.description}</p>
        </div>

        <motion.div className="skills-card-wrap" variants={cardWrapVariants}>
          {skills.categories.map((category) => (
            <motion.article
              className="skill-card"
              variants={cardVariants}
              key={category.title}
            >
              <div className="skill-card-title">
                <img src={category.icon} alt="" className="skill-title-icon" />
                <strong>{category.title}</strong>
              </div>

              <ul>
                {category.items.map((item) => (
                  <li key={item.name}>
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="skill-icon"
                    />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Skills
