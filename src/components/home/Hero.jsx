import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './styles/Hero.scss'

const Hero = () => {
  const visualRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.orb-1', {
        x: 18,
        y: -16,
        scale: 1.04,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to('.orb-2', {
        x: -14,
        y: 18,
        scale: 0.96,
        duration: 4.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to('.orb-3', {
        x: 10,
        y: 12,
        rotate: 8,
        duration: 5.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to('.hero-dot', {
        opacity: 0.35,
        scale: 1.6,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        stagger: 0.22,
        ease: 'sine.inOut',
      })

      gsap.to('.hero-line', {
        y: -8,
        rotate: 2,
        duration: 4.2,
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
        ease: 'sine.inOut',
      })
    }, visualRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="inner hero-inner">
      <div className="hero-content">
        <h1 className="tit">
          <span>박성민</span>
          <span className="gradient-text">Fullstack Developer</span>
        </h1>

        <p className="txt">
          사용자 경험과 시스템 구조를 함께 고민하는 개발자입니다. <br />
          React와 Spring Boot 기반으로 실제 서비스 흐름을 설계하고 구현합니다.
        </p>

        <div className="btn-wrap">
          <button className="button-pr">Project</button>
          <button className="button-wh">Contact</button>
        </div>
      </div>

      <div className="hero-visual" ref={visualRef} aria-hidden="true">
        <div className="hero-orb orb-1"></div>
        <div className="hero-orb orb-2"></div>
        <div className="hero-orb orb-3"></div>

        <span className="hero-dot dot-1"></span>
        <span className="hero-dot dot-2"></span>
        <span className="hero-dot dot-3"></span>
        <span className="hero-dot dot-4"></span>

        <span className="hero-line line-1"></span>
        <span className="hero-line line-2"></span>
      </div>
    </div>
  )
}

export default Hero