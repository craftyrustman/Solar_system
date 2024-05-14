import { useHelper } from '@react-three/drei'
import React, { useRef } from 'react'
import AnimatedStars from './AnimatedStars'
import Earth from './scenes/earth/Earth'
import * as THREE from "three"
import Sun from './scenes/sun/Sun'
import { Perf } from "r3f-perf"

import CameraPositionLogging from './helpers/cameraPositionLogging'

const MainContainer = () => {
  const directionalLightRef = useRef()
  const directionalLightRef2 = useRef()
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'hotpink')
  useHelper(directionalLightRef2, THREE.DirectionalLightHelper, 1, 'hotpink')
  
  return (
    <>
        {/* <Perf /> */}
        <CameraPositionLogging event="mousedown" />
        <AnimatedStars />
        {/* <directionalLight castShadow  ref={directionalLightRef} position={[0, 0, 10]} intensity={1}/>
        <directionalLight castShadow  ref={directionalLightRef2} position={[0, 0, -10]}/> */}
        <ambientLight intensity={0.1} />
        <Sun />
        <Earth displacementScale={0.15} />
    </>
  )
}

export default MainContainer