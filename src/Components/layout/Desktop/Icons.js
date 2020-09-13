import React, { Fragment } from "react";
import "./Desktop.css";

const Icons = ({ icon, text }) => {
  return (
    <Fragment>
      <div className="desktop-icons">
        <img src={icon} alt="" height="50px" width="50px" />
        <p>{text}</p>
      </div>
    </Fragment>
  );
};
export default Icons;
