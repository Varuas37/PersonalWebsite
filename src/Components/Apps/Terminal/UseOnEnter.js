import React ,{useState} from "react"
import { closeTerminal } from "../../../Redux/action/applications";


const commands ={
    help:"quit: exit the applicaiton , clear: clears the text, cd: Goes inside the folder",
    quit:"Qutting the application",
    ls:"Portfolio  Profile  Minesweeper  Github  Twitter  Document  Help  Shutdown  Programs",
    "cd Document":"resume.pdf",
    "cd Portfolio":"This Window contains my Portfolio",
    clear:"clear",
    exit:"Don't be lazy, click the cross icon."
}

const UseOnEnter = ()=>{
    const [consoleOutput, updateConsoleOutput] = React.useState([]);

    const onEnter = (value, key) => {
      if (key === "Enter") {
          if (value.toLowerCase()=="clear"){
              updateConsoleOutput([]);
          }
        
        const newConsoleLine = commands[value.toLowerCase()] || `invalid command: ${value}`;
        return updateConsoleOutput(consoleOutput =>
          consoleOutput.concat(newConsoleLine)
        );
      }
    };
  
    return [consoleOutput, onEnter];
}
export default UseOnEnter;
