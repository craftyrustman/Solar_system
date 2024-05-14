import React, { useState, useEffect, useRef, useCallback } from 'react'
import { OrbitControls, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from "three"

const Moon = React.memo(() => {
    
    const moonRef = useRef()
    const clockRef = useRef(new THREE.Clock())

    const [moonTexture] =
     useTexture([
        './assets/moon_map.jpg'
    ])

    const [hovered, hover] = useState(false)

    const xAxis = 4

    const updateMoonPosition = useCallback(() => {
              //Orbit rotation
              moonRef.current.position.x = Math.sin(clockRef.current.getElapsedTime() * 0.8) * xAxis
              moonRef.current.position.z = Math.cos(clockRef.current.getElapsedTime() * 0.8) * xAxis
              //Axis Rotation
              moonRef.current.rotation.y += 0.002
    })

    useEffect(() => {
      document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])

    useFrame(() => {
      updateMoonPosition()
    })

  return (
  <mesh castShadow 
  ref={moonRef} position={[xAxis, 0, 0]}
  onPointerOver={() => hover(true)}
  onPointerOut={() => hover(false)}
  >
    <sphereGeometry args={[0.5, 32, 32]} />
    <meshPhongMaterial 
    map={moonTexture}
    emissiveMap={moonTexture}
    emissiveIntensity={ hovered ? 200 : 0.05}
    />
  </mesh>)
})

export default Moon