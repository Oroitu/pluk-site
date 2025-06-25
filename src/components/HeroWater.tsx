"use client"
// HeroWater — WebGL hero section for PLUK site

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

/**
 * Separate component rendered *inside* <Canvas> so we can safely use R3F hooks.
 */
function AnimatedLogo() {
  const mesh = useRef<THREE.Mesh>(null!)

  // Vertical float animation (simple sine wave)
  useFrame(({ clock }) => {
    mesh.current.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.2 - 0.5
  })

  // TODO: replace <boxGeometry> with extruded SVG logo once available
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={mesh} castShadow receiveShadow>
        <boxGeometry args={[2, 2, 0.5]} />
        <MeshTransmissionMaterial
          thickness={0.5}
          chromaticAberration={0.4}
          anisotropy={0.1}
          transparent
        />
      </mesh>
    </Float>
  )
}

export default function HeroWater() {
  return (
    <section className="h-screen w-full">
      <Canvas camera={{ position: [0, 0, 5] }} shadows>
        <color attach="background" args={["#ffffff"]} />
        <ambientLight intensity={0.5} />
        {/* Lights / environment can be tweaked later */}

        <AnimatedLogo />
      </Canvas>
    </section>
  )
}
