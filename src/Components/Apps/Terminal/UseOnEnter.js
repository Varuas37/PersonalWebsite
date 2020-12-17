import React ,{useState} from "react"

const commands ={
    help:"quit: exit the applicaiton , clear: clears the text",
    quit:"Qutting the application",
    open:"",
    folderStructure:{
        currentpath:"home"
    },
    clear:"clear"
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
