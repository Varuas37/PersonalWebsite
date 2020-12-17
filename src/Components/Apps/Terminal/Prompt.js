import React from "react";
// import "../../../App.css"
const Prompt = ({currentDir}) => <span className="terminalText">Personal Website:\ {currentDir} <span style={{fontSize:"14px"}}>{">"}</span> </span>;

export default Prompt;