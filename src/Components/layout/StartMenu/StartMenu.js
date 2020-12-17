import React, { Fragment, useState } from "react";
import {
  AppBar,
  Toolbar,
  TextField,
  Button,
  List,
  ListItem,
  Divider,
  Avatar,
  Bar,
} from "react95";
import moment from "moment";
import Clock from "react-live-clock";
import "./StartMenu.css";
import DateTime from "../DateTime/DateTime";
import Profile from "../Profile/Profile";
import Portfolio from "../Portfolio/Portfolio";
import Desktop from "../Desktop/Desktop";
import Minesweeper from "../../Apps/Minesweeper/Minesweeper";
import StartMenuBar from "../StartMenuBar/StartMenuBar";
const iconWindow = require("../Assets/windows.png");
const StartMenu = (props) => {
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openPortFolio, setOpenPortFolio] = useState(false);

  return (
    <Fragment>
      <div className="startMenu">
        <div style={{}}>
            <Minesweeper></Minesweeper>
          {openProfile ? <Profile handleOpen={setOpenProfile}></Profile> : null}
          {openPortFolio ? (
            <Portfolio handleOpen={setOpenPortFolio}></Portfolio>
          ) : null}
        </div>
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
                  setOpenProfile={setOpenProfile}
                  openProfile={openProfile}
                  setOpenPortFolio={setOpenPortFolio}
                  openPortFolio={openPortFolio}
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
      </div>
    </Fragment>
  );
};
export default StartMenu;
