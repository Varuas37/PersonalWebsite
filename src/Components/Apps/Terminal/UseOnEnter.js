import React ,{useState} from "react"

const commands ={
    help:"quit: exit the applicaiton , clear: clears the text, cd_dir: Please make sure to include the _ after cd",
    quit:"Qutting the application",
    open:"",
    folderStructure:{
        currentpath:"home"
    },
    ls:"Portfolio  Profile  Minesweeper  Github  Twitter  Document  Help  Shutdown  Programs",
    cd_Document:"resume.pdf",
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
