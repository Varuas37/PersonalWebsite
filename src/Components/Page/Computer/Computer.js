import React, { useState, useRef, useEffect } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Canvas, extend, useThree,useFrame } from "react-three-fiber"
import { useSpring, a } from "react-spring/three"
// import Typing from 'react-typing-animation';
import {connect} from "react-redux"
import { Link, Redirect } from "react-router-dom";
import {openComputer} from "../../../Redux/action/computer"
import PropTypes from 'prop-types'
import CustomSwitch from "../../layout/switch/CustomSwitch"

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
        // maxPolarAngle={Math.PI / 3}
        // minPolarAngle={Math.PI / 3}
        // maxAzimuthAngle = {[Math.PI/3,Math.PI/2]}
        // enablePan={false}
        enableZoom={false}
        maxDistance={100}
        args={[camera, gl.domElement]}
        ref={orbitRef}
      />
    )
  }


function Model({openComputer}) {
    const [model,setModel] = useState();
   
    useEffect(()=>{
        let loader = new GLTFLoader();
        loader.load('/scene.gltf',setModel)
  })
    return model ? <> <primitive object={model.scene}/> </>:null;
}

const Computer = ({computerOpen,openComputer})=>{
  const [text,setText]= useState("Power on")
    const isBrowser = typeof window !== "undefined"
    if (computerOpen) {
      return <Redirect to="/" />;
    }
   
    const handleClick=()=>{
      setText("Starting the PC")
      openComputer();
    }

  return (
    <>
   <div style={{display:"flex", justifyContent:"center", alignContent:"center", flexDirection:"column", gap:"10px", padding:"20px", width:"100%"}}>
     <CustomSwitch onClick={handleClick}>
     <p className="terminalText" style={{fontSize:'2em'}}>{text}</p>
     </CustomSwitch>
     
      </div>
  

      
      {isBrowser && (
        <>
      
        <Canvas
          camera={{ position: [0,30,80] }}
          onCreated={({ gl }) => {
            gl.shadowMap.enabled = true
            gl.shadowMap.type = THREE.PCFSoftShadowMap
          }}

          style={{positon:"relative"}}
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
  openComputer: PropTypes.func.isRequired,
}

const mapStateToProps=(state)=>({
  computerOpen:state.computer.computerOpen
  
})

export default connect(mapStateToProps,{openComputer})(Computer);



// ../../../assets/3DAssets/scene.gltf