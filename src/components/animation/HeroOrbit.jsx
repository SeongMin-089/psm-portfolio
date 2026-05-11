import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Edges, Float } from '@react-three/drei'
import * as THREE from 'three'

const HeroOrbit = () => {
  const groupRef = useRef(null)
  const coreRef = useRef(null)
  const shellRef = useRef(null)
  const glowRef = useRef(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.18
      groupRef.current.rotation.x = Math.sin(t * 0.45) * 0.08
      groupRef.current.position.y = Math.sin(t * 0.65) * 0.045
    }

    if (coreRef.current) {
      coreRef.current.rotation.y = -t * 0.32
      coreRef.current.rotation.z = Math.sin(t * 0.5) * 0.12
      coreRef.current.scale.setScalar(0.62 + Math.sin(t * 1.4) * 0.025)
    }

    if (shellRef.current) {
      shellRef.current.rotation.z = Math.sin(t * 0.35) * 0.05
    }

    if (glowRef.current) {
      glowRef.current.material.opacity = 0.2 + Math.sin(t * 1.2) * 0.04
    }
  })

  return (
    <Float speed={0.8} rotationIntensity={0.08} floatIntensity={0.14}>
      <group
        ref={groupRef}
        scale={1.85}
        position={[0, 0, 0]}
        rotation={[0.14, -0.34, 0.08]}
      >
        {/* 내부에서 퍼지는 밝은 빛 */}
        <mesh ref={glowRef} scale={[1.25, 1.25, 1.25]}>
          <sphereGeometry args={[0.72, 64, 64]} />
          <meshBasicMaterial
            color="#68d8ff"
            transparent
            opacity={0.22}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* 밝은 내부 코어 */}
        <mesh ref={coreRef} scale={[0.62, 0.62, 0.62]}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#c9f5ff"
            emissive="#55cfff"
            emissiveIntensity={1.45}
            roughness={0.22}
            metalness={0.08}
            flatShading
          />
        </mesh>

        {/* 바깥 투명 쉘 */}
        <mesh ref={shellRef} scale={[1, 1, 1]}>
          <icosahedronGeometry args={[1, 1]} />
          <meshPhysicalMaterial
            color="#2f8cff"
            transparent
            opacity={0.22}
            roughness={0.12}
            metalness={0.1}
            transmission={0.25}
            thickness={0.65}
            clearcoat={1}
            clearcoatRoughness={0.08}
            side={THREE.DoubleSide}
            depthWrite={false}
          />

          <Edges
            color="#b9efff"
            linewidth={1.15}
            transparent
            opacity={0.55}
          />
        </mesh>

        {/* 아주 은은한 외곽 후광 */}
        <mesh scale={[1.55, 1.55, 1.55]}>
          <sphereGeometry args={[0.8, 64, 64]} />
          <meshBasicMaterial
            color="#1f8cff"
            transparent
            opacity={0.075}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </group>
    </Float>
  )
}

export default HeroOrbit