import React, { useState, useEffect, useRef } from "react";
import { Canvas, extend, useFrame, useThree } from "react-three-fiber";
import { BoxBufferGeometry } from "three";
import * as THREE from "three"
import { useSpring, a } from "react-spring/three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import as from ""
extend({ OrbitControls });


const Computer =()=>{
  const [model,setModel] = useState();

  useEffect(()=>{
    new GLTFLoader().load('../../../../public/scene.gltf',setModel);
    console.log(model);
})
  return null;
}

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();
  useFrame(() => {
    orbitRef.current.update();
  });
  return (
    <orbitControls
      autoRotate
    //   maxPolarAngle={Math.PI / 3}
    //   minPolarAngle={Math.PI / 2}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  );
};

const Plane = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0,-0.5,0]} recieveShadow>
    <planeBufferGeometry attach="geometry" args={[100, 100]} />
    <meshPhysicalMaterial attach="material" color="gray" />
  </mesh>
);

const Box = () => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const props = useSpring({
    scale: active ? [3, 4, 3] : [2, 2, 2],
    color: hovered ? "red" : "gray",
  });

  console.log("Hello World");
  return (
    <a.mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={props.scale}
      castShadow
    >
      <ambientLight />
      <spotLight position={[0, 5, 10]} penumbra={1} castShadow/>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshPhysicalMaterial attach="material" color={props.color} />
    </a.mesh>
  );
};

function Tutorial(props) {
  return (
    <Canvas camera={{position:[0,5,9]}}>
      <fog attach="fog" args={["white",5,15]}/>
      <Box />
      <Controls />
      <Plane />
      {/* <Computer/> */}
    </Canvas>
  );
}

Tutorial.propTypes = {};

export default Tutorial;
