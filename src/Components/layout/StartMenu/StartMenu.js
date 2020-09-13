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

import DateTime from "../DateTime/DateTime";
import Profile from "../Profile/Profile";
import Portfolio from "../Portfolio/Portfolio";
import Desktop from "../Desktop/Desktop";
const iconWindow = require("../Assets/windows.png");
const StartMenu = (props) => {
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openPortFolio, setOpenPortFolio] = useState(false);

  return (
    <Fragment>
      <div className="startMenu">
        <div
          style={{
            height: "96vh",
            backgroundColor: "#268080",
            overflow: "none",
            overflowY: "hidden",
            overflowX: "hidden",
          }}
        >
          <Desktop></Desktop>
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
                <List
                  style={{
                    position: "absolute",
                    left: "0",
                    bottom: "20%",
                  }}
                  onClick={() => setOpen(false)}
                >
                  <div>
                    <ListItem
                      style={{ cursor: "pointer" }}
                      onClick={() => setOpenProfile(!openProfile)}
                    >
                      <span role="img" aria-label="👨‍💻">
                        👨‍💻
                      </span>
                      Profile
                    </ListItem>

                    <ListItem
                      style={{ cursor: "pointer" }}
                      onClick={() => setOpenPortFolio(!openPortFolio)}
                    >
                      <span role="img" aria-label="📁">
                        📁
                      </span>
                      Portfolio
                    </ListItem>

                    <Divider />
                    <ListItem style={{ cursor: "pointer" }}>
                      <span role="img" aria-label="🔙">
                        ❌
                      </span>
                      Close
                    </ListItem>
                  </div>
                </List>
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
