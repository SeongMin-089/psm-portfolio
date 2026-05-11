import React from "react"
import "./styles/Skills.scss"
import skills from "../../utils/skill"

const Skills = () => {
  return (
    <section id="Skills">
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

        <div className="skills-card-wrap">
          {skills.categories.map((category) => (
            <article className="skill-card" key={category.title}>
              <div className="skill-card-title">
                <img
                  src={category.icon}
                  alt=""
                  className="skill-title-icon"
                />
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
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills