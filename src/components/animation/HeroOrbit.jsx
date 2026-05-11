import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

const HeroOrbit = () => {
  const groupRef = useRef(null)
  const coreRef = useRef(null)
  const ring1Ref = useRef(null)
  const ring2Ref = useRef(null)

  useFrame((state) => {
    const time = state.clock.elapsedTime

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(time * 0.35) * 0.18
      groupRef.current.position.y = Math.sin(time * 0.6) * 0.08
    }

    if (coreRef.current) {
      coreRef.current.rotation.x += 0.004
      coreRef.current.rotation.y += 0.006
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += 0.003
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= 0.002
    }
  })

  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.45}>
      <group ref={groupRef} scale={1.35}>
        {/* 중앙 오브젝트 */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[0.85, 1]} />
          <meshStandardMaterial
            color="#1f4fd8"
            emissive="#1f4fd8"
            emissiveIntensity={0.35}
            roughness={0.28}
            metalness={0.45}
            wireframe
          />
        </mesh>

        {/* 바깥 링 1 */}
        <mesh ref={ring1Ref} rotation={[1.25, 0.35, 0.2]}>
          <torusGeometry args={[1.35, 0.008, 16, 120]} />
          <meshBasicMaterial color="#5aa7ff" transparent opacity={0.75} />
        </mesh>

        {/* 바깥 링 2 */}
        <mesh ref={ring2Ref} rotation={[1.05, -0.55, -0.6]}>
          <torusGeometry args={[1.75, 0.006, 16, 120]} />
          <meshBasicMaterial color="#7c5cff" transparent opacity={0.45} />
        </mesh>

        {/* 작은 포인트 1 */}
        <mesh position={[1.35, 0.45, 0.15]}>
          <sphereGeometry args={[0.055, 24, 24]} />
          <meshBasicMaterial color="#8ecbff" />
        </mesh>

        {/* 작은 포인트 2 */}
        <mesh position={[-1.25, -0.5, 0.1]}>
          <sphereGeometry args={[0.045, 24, 24]} />
          <meshBasicMaterial color="#8f7cff" />
        </mesh>
      </group>
    </Float>
  )
}

export default HeroOrbit