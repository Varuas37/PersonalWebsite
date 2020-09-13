import React, { Fragment, useState, useEffect } from "react";
import {
  Window,
  WindowHeader,
  Button,
  WindowContent,
  Panel,
  Toolbar,
  Divider,
} from "react95";
import PropTypes from "prop-types";
import Draggable from "react-draggable";
import { Resizable, ResizableBox } from "react-resizable";

import "./Profile.css";
const profileIcon = require("./ProfilePicture.png");
const Profile = (handleOpen) => {
  const [open, setOpen] = useState(true);
  return (
    open && (
      <Fragment>
        <Draggable bounds="parent">
          <Window
            className="window"
            style={{
              width: "fit-content",
              minWidth: "50%",
              height: "fit-content",
              maxHeight: "90%",
              left: "10%",
              top: "10%",
              overflowY: "auto",
              paddingBottom: "10px",
            }}
          >
            <WindowHeader className="window-header">
              <span role="img" aria-label="user">
                🙎‍♂️ {"  "}
              </span>
              <span>Profile</span>
              <Button
                style={{ position: "absolute", right: "15px" }}
                onClick={() => setOpen(false)}
              >
                {/* <span className="close-icon" />x */}
                <span style={{ fontWeight: "bolder" }}>x</span>
              </Button>
            </WindowHeader>
            <Toolbar>
              <a href="mailto: spanthee@patriots.uttyler.com" target="_blank">
                <Button variant="menu" size="sm">
                  Hire Me
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/spanthee/" target="_blank">
                <Button variant="menu" size="sm">
                  LinkedIn
                </Button>
              </a>
            </Toolbar>
            <WindowContent>
              <div className="profile-Content">
                <div className="profile-Heading">
                  <div className="ph-intro">
                    <h1 className="heading">Personal Information</h1>
                    <p>Name: Saurav Panthee</p>
                    <p>Major: Computer Science</p>
                    <p>Graduation Year: 2021</p>
                  </div>

                  <div className="contact-info">
                    <img
                      src={profileIcon}
                      alt=""
                      height="100px"
                      width="100px"
                    />
                  </div>
                </div>
                <Divider />
                <div className="skills">
                  <h1 className="heading">Work Experience</h1>
                  <h3 className="sub-heading">
                    Teaching Assistant (2017-Present)
                  </h3>
                  <div className="experience-details">
                    <p>
                      ● Created an API using flask to assign USER IDs in canvas.{" "}
                    </p>
                    <p>
                      ● Developed a python program to automatically grade excel
                      worksheet using openpyxl.{" "}
                    </p>
                    <p>
                      ● Developed a python program to detect plagarism for Excel
                      Assignments .{" "}
                    </p>
                    <p>
                      ● Assisted Students during the class with Excel and Access
                      assignments.{" "}
                    </p>
                    <p>
                      {" "}
                      ● Guided students to finish the Sales and Distribution
                      module in SAP{" "}
                    </p>
                    <p>
                      {" "}
                      ● Helped Students design and develop e-commerce websites
                      using Wix, weebly and HTML/CSS.
                    </p>
                    <p>
                      {" "}
                      ● Helped Students work with data visualization tools such
                      as Tableau, and Power BI.
                    </p>{" "}
                    <p>● Helped prepare course materials and class exercises</p>
                  </div>
                  {/* SECOND EXPERIENCE */}
                  <h3 className="sub-heading">
                    Orientation Leader at UT Tyler(2017)
                  </h3>
                  <p>
                    {" "}
                    ● Helped organize the Orientation for freshmen during the
                    summer.
                  </p>{" "}
                  <p>
                    ● Leaded a group of 16 students each week during the
                    Orientation
                  </p>
                  <p>
                    ● Awarded as the best Orientation Leader for willingness to
                    work hard, help others and being a great leader for incoming
                    freshman.
                  </p>
                </div>
                <Divider />
                <div className="skills">
                  <h1 className="heading">Skills</h1>• Java, Python, JavaScript,
                  React, iOS development, UI design (Sketch), Tableau, Power BI
                </div>
              </div>
            </WindowContent>
          </Window>
        </Draggable>
      </Fragment>
    )
  );
};
Profile.propTypes = {
  // handleOpen: PropTypes.func.isRequired,
};

export default Profile;
