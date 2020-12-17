import React ,{useRef,useEffect}from "react";
import Prompt from "./Prompt"

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
        
        </div>
      ))}
    </div>
     )
}
export default MapConsoleOutput;