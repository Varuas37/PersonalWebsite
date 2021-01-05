import React ,{useRef,useEffect}from "react";
import Prompt from "./Prompt"
// import {connect} from "react-redux"
// import { closeTerminal } from "../../../Redux/action/applications";

const MapConsoleOutput = ({consoleOutput})=>{
    const scrollRef = useRef()

    useEffect(() => {
        if (scrollRef.current){
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
        
     })
     return(
        <div className="console-output" ref={scrollRef}>
      {consoleOutput.map((item, index) => (
        <div key={index} className="terminalText">
          
         { item.toLowerCase()=="clear"?null:<><Prompt /> <span >{item}</span></>}
         {/* { item.toLowerCase()=="exit"? closeTerminal():null} */}

        </div>
      ))}
    </div>
     )
}
export default MapConsoleOutput;