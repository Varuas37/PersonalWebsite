import React,{useRef,useState,useEffect} from 'react'
import PropTypes from 'prop-types'

// import Astronaut from "./Astronaut.glb";
import Ds from "./model.gltf"
function Model(props) {
    useEffect(() => {
        document
          .getElementById("my-model-viewer")
          .addEventListener("error", e =>
            console.log(`Error: ${JSON.stringify(e)}`)
          );
        document
          .getElementById("my-model-viewer")
          .addEventListener("load", e => console.log(`Load: ${JSON.stringify(e)}`));
        document
          .getElementById("my-model-viewer")
          .addEventListener("ar-status", e =>
            console.log(`AR-Status: ${JSON.stringify(e)}`)
          );
      });
    return (
       
       
       <model-viewer
        id="my-model-viewer"
        alt="astronaut"
        src={Ds}
        auto-rotate
        camera-controls
        style={{height:"500px",width:"500px",backgroundColor:"red"}}
      />
      
        
    )
}

Model.propTypes = {

}

export default Model
