import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { List, ListItem, Divider } from "react95";
import iconPortfolio from "../Assets/iconPortfolio.png";
import iconUser from "../Assets/iconUser.png";
import iconClose from "../Assets/iconClose.png";
import iconShutDown from "../Assets/iconShutDown.png";
import iconRun from "../Assets/iconRun.png";
import iconHelp from "../Assets/iconHelp.png";
import iconDocuments from "../Assets/iconDocuments.png";
import iconSettings from "../Assets/iconSettings.png";
import iconProgram from "../Assets/iconProgram.png";
import iconSideArrow from "../Assets/iconSideArro.png";
import iconMinesweeper from "../Assets/iconMine.png"

// REDUX
import { connect } from "react-redux";

import {
  openTerminal,
  openMinesweeper,
  openPortfolio,
  openProfile,
  openNavigation,
  openSettings,
  openDocuments,
  openHelp,
  openProgram,

} from "../../../Redux/action/applications";
import {closeComputer} from "../../../Redux/action/computer"

function StartMenuBar({
  setOpen,
  openTerminal,
  openMinesweeper,
  openPortfolio,
  openProfile,
  openNavigation,
  openSettings,
  openDocuments,
  openHelp,
  openPrograms,
  closeComputer,
}) {
  const MenuWidth = "300px";
  const Liststyle = {
    cursor: "pointer",
    width: "fit-content",
    width: "100%",
    padding: "10px",
    display: "flex",
    justifyContent: "flex-start",
  };
  return (
    <List
      style={{
        position: "absolute",
        left: "0",

        bottom: "120%",
        height: "fit-content",
        display: "flex",
        justifyContent: "flex-end",
      }}
      onClick={() => setOpen(false)}
    >
      <div>
        <ListItem
          style={Liststyle}
          onClick={() =>openProfile()}
        >
          <img src={iconUser} style={{ height: "24px", width: "24px" }} />
          <span style={{ paddingLeft: "5px" }}>Saurav Panthee</span>
        </ListItem>

        <ListItem
          style={Liststyle}
          onClick={() => openPortfolio()}
        >
          <img src={iconPortfolio} style={{ height: "24px", width: "24px" }} />
          <span style={{ paddingLeft: "5px" }}>Portfolio</span>
        </ListItem>
        <ListItem
          style={Liststyle}
          onClick={() => openMinesweeper()}
        >
          <img src={iconMinesweeper} style={{ height: "24px", width: "24px" }} />
          <span style={{ paddingLeft: "5px" }}>Minesweeper</span>
        </ListItem>
        <ListItem
          style={Liststyle}
          onClick={() => openDocuments()}
        >
          <img src={iconDocuments} style={{ height: "24px", width: "24px" }} />
          <span style={{ paddingLeft: "5px" }}>Documents</span>
        </ListItem>
        <ListItem
          style={Liststyle}
          onClick={() => openSettings()}
        >
          <img src={iconRun} style={{ height: "24px", width: "24px" }} />
          <span style={{ paddingLeft: "5px" }}>Settings</span>
        </ListItem>
        <ListItem
          style={Liststyle}
          onClick={() => openHelp()}
        >
          <img src={iconHelp} style={{ height: "24px", width: "24px" }} />
          <span style={{ paddingLeft: "5px" }}>Help</span>
        </ListItem>
        <ListItem
          style={Liststyle}
          onClick={() => openTerminal()}
        >
          <img src={iconRun} style={{ height: "24px", width: "24px" }} />
          <span style={{ paddingLeft: "5px" }}>Terminal</span>
        </ListItem>
        <Divider style={{ width: MenuWidth }} />
        <ListItem style={Liststyle} onClick={()=>closeComputer()}>
          <img src={iconShutDown} style={{ height: "24px", width: "24px" }} />
          <span style={{ paddingLeft: "5px" }}>ShutDown</span>
        </ListItem>
        <ListItem style={Liststyle}>
          <img src={iconClose} style={{ height: "24px", width: "24px" }} />
          <span style={{ paddingLeft: "5px" }}>Close</span>
        </ListItem>
      </div>
    </List>
  );
}

StartMenuBar.propTypes = {};

const mapStateToProps=(state)=>({
  navigationMenu:state.applications.navigationMenu
})

export default connect(mapStateToProps,{  openTerminal,
  openMinesweeper,
  openPortfolio,
  openProfile,
  openNavigation,
  openSettings,
  openDocuments,
  openHelp,
  openProgram,closeComputer})(StartMenuBar);
