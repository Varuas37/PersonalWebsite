import React, { Fragment } from "react";
import "./Desktop.css";
import Icons from "./Icons";
import Draggable from "react-draggable";
const iconUser = require("../Assets/userIcon.png");
const iconNetwork = require("../Assets/network.png");

const Desktop = () => {
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
    </Fragment>
  );
};
export default Desktop;
