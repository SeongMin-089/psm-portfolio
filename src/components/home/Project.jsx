import React from 'react'
import projects from '../../utils/project'
import './styles/Project.scss'

const Project = () => {
  return (
    <div className="inner work-inner">
      <h3 className="sub-tit-2">projects.</h3>

      <ul className="work-lst">
        {projects.map((project) => (
          <li key={project.id}>
            <a href={project.links.notion} className="lst-t-wrap">
              <h4 className="lst-tit">{project.title}</h4>

              <p className="lst-dsc">{project.description}</p>

              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </a>

            <a href={project.links.demo} className="lst-img-wrap">
              <div
                className="bg"
                style={{ backgroundImage: `url(${project.thumbnail})` }}
              ></div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Project