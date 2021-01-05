import React from "react";

import styled from "styled-components";
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Panel,
  Cutout,
  Select,
} from "react95";
import iconFinder from "./iconFinder.png";
import iconNotepad from "./iconNotepad.png";
import PropTypes from "prop-types";
import Draggable from "react-draggable";
import "./Finder.css";
import {connect} from "react-redux";
import {openResume,closeDocuments} from "../../../Redux/action/applications"
import { Link } from "react-router-dom";
const SideIcons = ({ image, text,openResume }) => {

 
  return (
    <div
      className="sideIcons"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "bottom",
        justifyContent: "bottom",
        cursor: "pointer",
      }}
    >
      <img src={image} height="30px" width="30px" />
      <div style={{ padding: "5px" }}>My Computer</div>
    </div>
  );
};

function WindowsExplorer({openResume,resume,documents,closeDocuments}) {
  const options = [
    // { value: 1, label: 'My Computer' },
    { value: 2, label: "Documents" },
    // { value: 3, label: 'My Pictures' },
    // { value: 4, label: 'My Videos' },
    // { value: 5, label: 'Resume' },
  ];
  const onChange = (evt, nextSelection) => console.log(evt, nextSelection);
  const handleResume=()=>{
    closeDocuments();
    openResume();
   
  }
  return documents && (
    <>
      <Draggable bounds="parent">
        <Window className="window">
          <WindowHeader className="window-header">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <img src={iconFinder} height="26px" width="26px" />
              <span style={{ paddingLeft: "10px" }}>Documents</span>
            </div>

            <Button onClick={()=>closeDocuments()}>
              <i className="fas fa-times" />
            </Button>
          </WindowHeader>
          <Toolbar>
            <Button variant="menu" size="sm">
              File
            </Button>
            <Button variant="menu" size="sm">
              Edit
            </Button>
           
          </Toolbar>
          <div className="toolbar" style={{ padding: "10px", width: "800px" }}>
            <Select
              defaultValue={2}
              options={options}
              menuMaxHeight={160}
              width="30%"
              onChange={onChange}
              onOpen={(e) => console.log("open", e)}
              onClose={(e) => console.log("close", e)}
              onBlur={(e) => console.log("blur", e)}
              onFocus={(e) => console.log("focus", e)}
              className="selectOptions"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingBottom: "20px",
            }}
          >
            <Cutout
              style={{
                width: "100%",
                height: "40vh",
                backgroundColor: "white",
              }}
            >
              <Link
              to="/resume"
                style={{
                  display: "flex",
                  alignContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "fit-content",
                  width: "fit-content",
                  cursor:"pointer",
                  padding:"5px"
                }}
               
                className="resumeIcon"
              >
                <img src={iconNotepad} alt="" height="50px" width="50px" />
                <p style={{ color: "black" }}>Resume.pdf</p>     
              </Link>
              
            </Cutout>
          </div>
        </Window>
      </Draggable>
    </>
  );
}

WindowsExplorer.propTypes = {};
const mapStateToProps=(state)=>({
    
    documents:state.applications.documents
  })
  
  export default connect(mapStateToProps,{openResume,closeDocuments})(WindowsExplorer);
  