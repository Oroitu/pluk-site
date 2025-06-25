'use client'
import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'
import { MeshTransmissionMaterial, Float } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function HeroWater() {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    mesh.current.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.2 - 0.5
  })

  return (
    <section className="h-screen w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <color attach="background" args={['#1F0802']} />
        <ambientLight intensity={0.5} />
        <Float speed={2} rotationIntensity={1}>
          {/* Sustituye Box por tu logo extruido */}
          <mesh ref={mesh}>
            <boxGeometry args={[2, 2, 0.5]} />
            <MeshTransmissionMaterial
              thickness={0.5}
              chromaticAberration={0.4}
              anisotropy={0.1}
              transparent
            />
          </mesh>
        </Float>
      </Canvas>
    </section>
  )
}
