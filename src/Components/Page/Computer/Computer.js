import React, { useState, useRef, useEffect } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Canvas, extend, useThree } from "react-three-fiber"
import { useSpring, a } from "react-spring/three"
extend({ OrbitControls });
function Computer(props) {
    const [model,setModel] = useState();

    useEffect(()=>{
      new GLTFLoader().load('../../../../public/scene.gltf',setModel);
      console.log(model);
  })
    return model? <primitive object={model.scene}/>:<h1>No Model Found</h1>
        
    
}

Computer.propTypes = {

}

export default Computer

