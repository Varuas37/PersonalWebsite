import React, { useState, useRef, useEffect } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Canvas, extend, useThree,useFrame } from "react-three-fiber"
import { useSpring, a } from "react-spring/three"
import Typing from 'react-typing-animation';

extend({ OrbitControls });


const Controls = () => {
    const orbitRef = useRef()
    const { camera, gl } = useThree()
  
    useFrame(() => {
      orbitRef.current.update()
    })
  
    return (
      <orbitControls
        // autoRotate
        maxPolarAngle={Math.PI / 3}
        minPolarAngle={Math.PI / 3}
        // maxAzimuthAngle = {[Math.PI/3,Math.PI/2]}
        // enablePan={false}
        enableZoom={false}
        maxDistance={100}
        args={[camera, gl.domElement]}
        ref={orbitRef}
      />
    )
  }


function Model(handleClick) {
    const [model,setModel] = useState();
   
    useEffect(()=>{
        let loader = new GLTFLoader();
        loader.load('/scene.gltf',setModel)
  })
    return model ? <primitive object={model.scene}/> : null;
}

const Computer = (props)=>{
    const isBrowser = typeof window !== "undefined"

  return (
    <>
   
       <h1 className="terminalText" style={{fontSize:"4em", textAlign:"center"}}>Welcome,  turn the computer on to get started</h1>
       {/* <Typing.Backspace speed={200} /> */}
       
   
   
      {isBrowser && (
        <>
      
        <Canvas
          camera={{ position: [0,30,80] }}
          onCreated={({ gl }) => {
            gl.shadowMap.enabled = true
            gl.shadowMap.type = THREE.PCFSoftShadowMap
          }}
        >
          
           <ambientLight intensity={1} />
          <spotLight position={[10, 25, 5]} penumbra={1} castShadow />
          {/* <fog attach="fog" args={["gray", 0, 5]} /> */}
          <Controls />
         
        
       
          <Model/>
          
        </Canvas>
        </>
      )}
    </>
  )
}

Computer.propTypes = {

}

export default Computer;

// ../../../assets/3DAssets/scene.gltf