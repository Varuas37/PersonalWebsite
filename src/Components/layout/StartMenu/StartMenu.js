import React, { Fragment, useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
} from "react95";

import Clock from "react-live-clock";
import "./StartMenu.css";
import DateTime from "../DateTime/DateTime";
import StartMenuBar from "../StartMenuBar/StartMenuBar";

const iconWindow = require("../Assets/windows.png");

const StartMenu = (props) => {
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openPortFolio, setOpenPortFolio] = useState(false);

  return (

      <footer className="startMenu">
   
        <AppBar
          style={{
            position: "absolute",
            bottom: "0px",
            top: "95%",
            margin: "0px",
            padding: "0px",
            // overflow: "none",å
            // overflowY: "hidden",
            // overflowX: "hidden",
          }}
        >
          <Toolbar
            style={{
              justifyContent: "flex-start",
              gap: "10px",
              padding: "6px",
            }}
          >
            <div style={{ position: "relative", display: "inline-block" }}>
              <Button
                onClick={() => setOpen(!open)}
                active={open}
                style={{ fontWeight: "bold" }}
              >
                <img
                  src={iconWindow}
                  alt="react95 logo"
                  style={{ height: "20px", marginRight: 4 }}
                />
                Start
              </Button>
              {open && (
                <StartMenuBar
                  setOpen={setOpen}
                ></StartMenuBar>
              )}
            </div>

            <span
              style={{ position: "absolute", right: "10px", padding: "6px" }}
            >
              <DateTime /> {"   "}
              <Clock
                format={"HH:mm:ss"}
                ticking={true}
                timezone={"US/Pacific"}
              />
            </span>
          </Toolbar>
        </AppBar>
      </footer>

  );
};
export default StartMenu;
