import React, { useRef } from 'react'
import { OrbitControls, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


const Sun = React.memo(() => {
    
    const sunRef = useRef()

    const [sunTexture] =
     useTexture([
        './assets/sun_map.jpg'
    ])

    useFrame(() => {
        sunRef.current.rotation.y -= 0.002
    })

  return (
  <mesh ref={sunRef} position={[0, 0, 0]}>
    <sphereGeometry args={[3, 32, 32]} />
    <meshPhongMaterial 
    map={sunTexture}
    emissiveMap={sunTexture}
    emissiveIntensity={0.6}
    emissive={0xffffff}
    />
    <pointLight castShadow intensity={700} />
  </mesh>)
})

export default Sun