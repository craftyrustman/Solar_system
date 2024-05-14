import { useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react"

function CameraPositionLogging({event}){
    const { camera } = useThree()
    const cameraRef = useRef()

    useEffect(() => {
        const logCameraPosition = () => {
            const {x, y, z} = cameraRef.current.position
            const roundx = Math.round(x * 100) / 100
            const roundy = Math.round(y * 100) / 100
            const roundz = Math.round(z * 100) / 100
            console.log(`Camera position = X: ${roundx}, Y: ${roundy}, Z: ${roundz} `);
        }

        cameraRef.current = camera
        window.addEventListener(event, logCameraPosition)

        return () => {
            window.removeEventListener(event, logCameraPosition)
        }
    }, [])
    return null
}

export default CameraPositionLogging