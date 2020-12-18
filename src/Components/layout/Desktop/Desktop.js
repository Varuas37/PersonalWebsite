import React, { Fragment,useState,useEffect } from "react";
import "./Desktop.css";
import Icons from "./Icons";
import Draggable from "react-draggable";
import OutsideAlerter from "../OutsideClick/OutsideClick";
import CustomBox from "../CustomRightClick/CustomBox";
import { Cutout } from "react95";
import { Children } from "react";
const iconUser = require("../Assets/userIcon.png");
const iconNetwork = require("../Assets/network.png");

const Desktop = ({children}) => {
  const [custombox,setCustomBox] = useState({
    visible:false,
    x:0,
    y:0
  })


  // For Custom right click options. 
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   if (document.addEventListener) {
  //     document.addEventListener('contextmenu', function(e) {
  //       e.preventDefault();
  //       const clickX = e.clientX;
  //       const clickY = e.clientY;
  //       setCustomBox({visible:true,x:clickX,y:clickY})
  //     }, false);


  //     } else {
  //     document.attachEvent('oncontextmenu', function() {
  //       alert("You've tried to open context menu");
  //       window.event.returnValue = false;
  //     });
  //     }
  // });
  return (
    <Fragment>
      <div className="desktop-applications">
        <a href="https://github.com/Varuas37" target="_blank">
          <Icons icon={iconNetwork} text="Github"></Icons>
        </a>
        <br />
        <a href="https://twitter.com/spanthee07" target="_blank">
          <Icons icon={iconUser} text="Twitter"></Icons>
        </a>
       
      </div>
     { custombox.visible? <OutsideAlerter><CustomBox x={custombox.x} y={custombox.y} visible={custombox.visible}></CustomBox></OutsideAlerter> :null}
      {children}
    </Fragment>
  );
};
export default Desktop;
