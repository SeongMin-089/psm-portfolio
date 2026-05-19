import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

const GatsbyStars = ({ color = "#2a5fea" }) => {
  const starsRef = useRef(null)

  const positions = useMemo(() => {
    const count = 1800
    const arr = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 22
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10
    }

    return arr
  }, [])

  const circleTexture = useMemo(() => {
    const canvas = document.createElement("canvas")
    canvas.width = 64
    canvas.height = 64

    const ctx = canvas.getContext("2d")
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)

    gradient.addColorStop(0, "rgba(255, 255, 255, 1)")
    gradient.addColorStop(0.35, "rgba(255, 255, 255, 0.9)")
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(32, 32, 32, 0, Math.PI * 2)
    ctx.fill()

    const texture = new THREE.CanvasTexture(canvas)
    texture.needsUpdate = true

    return texture
  }, [])

  useFrame((state, delta) => {
    if (!starsRef.current) return

    const { mouse, camera } = state

    starsRef.current.rotation.x += delta * 0.006
    starsRef.current.rotation.y += delta * 0.018

    camera.position.x += (mouse.x * 0.35 - camera.position.x) * 0.02
    camera.position.y += (mouse.y * 0.35 - camera.position.y) * 0.02

    camera.lookAt(0, 0, 0)
  })

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color={color}
        map={circleTexture}
        size={0.045}
        transparent
        opacity={0.5}
        alphaTest={0.01}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </points>
  )
}

export default GatsbyStars