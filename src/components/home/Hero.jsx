import React from "react"
import "./styles/Hero.scss"

import { Canvas, useFrame } from "@react-three/fiber"

import Box from "../animation/Box"
import HeroOrbit from "../animation/HeroOrbit"
import GatsbyStars from "../animation/GatsbyStars"

import useSmoothScroll from "../../hook/useSmoothScroll"

const MouseCamera = () => {
  useFrame((state) => {
    const { mouse, camera } = state

    camera.position.x += (mouse.x * 0.7 - camera.position.x) * 0.025
    camera.position.y += (mouse.y * 0.7 - camera.position.y) * 0.025

    camera.lookAt(0, 0, 0)
  })

  return null
}

const Hero = () => {
  const scrollTo = useSmoothScroll()

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg" aria-hidden="true">
        <Canvas className="canvas" camera={{ position: [0, 0, 5], fov: 65 }}>
          <color attach="background" args={["#eef6ff"]} />

          <GatsbyStars color="#2a5fea" />
        </Canvas>
      </div>

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
            <button
              type="button"
              className="button-pr"
              onClick={() => scrollTo("Project")}
            >
              Project
            </button>

            <button
              type="button"
              className="button-wh"
              onClick={() => scrollTo("Contact")}
            >
              Contact
            </button>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <Canvas
            className="canvas"
            camera={{ position: [0, 0, 5], fov: 65 }}
            gl={{ alpha: true }}
          >
            <MouseCamera />

            <ambientLight intensity={0.7} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />

            {/* <Box position={[0, 0, 0]} scale={0.75} /> */}
            <HeroOrbit />
          </Canvas>
        </div>
      </div>
    </section>
  )
}

export default Hero