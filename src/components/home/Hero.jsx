import React from 'react'
import "./styles/Hero.scss"
const Hero = () => {
  return (
    <div className='inner hero-inner'>
      <h1 className="tit">
        <span>
          박성민
        </span>
        <span className="gradient-text">
          Fullstack Developer
        </span>
      </h1>
      <p className="txt">
        사용자 경험과 시스템 구조를 함께 고민하는 개발자입니다. <br />
        React와 Spring Boot 기반으로  실제 서비스 흐름을  설계하고 구현합니다.
      </p>
      <div className="btn-wrap">
      <button className='button-pr'>Project</button>
      <button className='button-wh'>Contact</button>

      </div>
    </div>
  )
}

export default Hero