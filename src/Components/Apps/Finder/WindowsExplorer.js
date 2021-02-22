import React, { useEffect, useState } from "react";

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
import iconDir from "./iconDir.png";
import iconFinder from "./iconFinder.png";
import iconHome from "./iconHome.png";
import iconNotepad from "./iconNotepad.png";
import Draggable from "react-draggable";
import FileView from "./FileView";
import "./Finder.css";
import { connect } from "react-redux";
import { closeDocuments } from "../../../Redux/action/applications";
import {
  getRepos,
  setCurrRepo,
  getContents,
  setPath,
  goBack,
} from "../../../Redux/action/github";
import { Link } from "react-router-dom";
import Modal from "../../layout/Modal/Modal";

const Repos = ({ data, setCurrRepo, insideRepo, setPath, currRepo }) => {
  const [image, setImg] = useState(iconDir);
  const [openFile, setOpenFile] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  useEffect(() => {
    setSelectedData(data);
    if (insideRepo) {
      if (data.type === "file") {
        setImg(iconNotepad);
      }
      if (data.type === "dir") {
        setImg(iconDir);
      }
    } else {
      setImg(iconDir);
    }
  }, [data, insideRepo, currRepo]);

  useEffect(() => {
    if (!insideRepo) {
      setOpenFile(false);
    }
    setOpenFile(false)
  }, [currRepo]);

  return (
    <div
      onDoubleClick={
        insideRepo && data.type === "file"
          ? () => setOpenFile(!openFile)
          : !insideRepo
          ? () => setCurrRepo(data.name, true)
          : () => setPath(data.name)
      }
      className="sideIcons"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "bottom",
        justifyContent: "bottom",
        cursor: "pointer",
      }}
    >
      {insideRepo && openFile ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "start",
            alignItems: "start",
          }}
        >
         
          <FileView data={selectedData} link={data.download_url} />
          <Button onClick={() => setOpenFile(!openFile)}>Close</Button>
        </div>
      ) : (
        <>
          <img
            src={image && image}
            height="30px"
            width="30px"
            alt="File type"
          />
          <div style={{ padding: "5px" }}>{data.name}</div>
        </>
      )}
    </div>
  );
};

function WindowsExplorer({
  getContents,
  documents,
  closeDocuments,
  getRepos,
  repos,
  github,
  setCurrRepo,
  setPath,
  insideRepo,
  goBack,
}) {
  const { currRepo, content_path, repo_loading } = github;
  const options = [{ value: 2, label: `${currRepo + content_path}` }];
  const onChange = (evt, nextSelection) => {
    console.log("This is on Change in events" + evt);

    // getContents(currRepo, content_path);
  };
  const handleHome = async () => {
    await getRepos();
    setCurrRepo("Home", false);
  };
  useEffect(() => {
    insideRepo ? getContents(currRepo, content_path) : getRepos();
  }, [insideRepo, content_path, currRepo]);

  return (
    documents && (
      <>
        <Draggable bounds="parent">
          <Window className="window">
            <WindowHeader className="window-header">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  maxWidth:"100%",
                  maxHeight:"100%",
                  overflow:"hidden"
                }}
              >
                <img src={iconFinder} height="26px" width="26px" />
                <span style={{ paddingLeft: "10px" }}>Documents</span>
              </div>

              <Button onClick={() => closeDocuments()}>
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
            <div
              className="toolbar"
              style={{
                padding: "10px",
                width: "1200px",
                overflow:"none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Button
                onClick={() => goBack()}
                style={{ cursor: "pointer", marginRight: "15px" }}
              >
                Back
              </Button>
              <Select
                defaultValue={2}
                options={options}
                menuMaxHeight={160}
                width="60%"
                onChange={onChange}
                // onOpen={(e) => console.log("open", e)}
                // onClose={(e) => console.log("close", e)}
                // onBlur={(e) => console.log("blur", e)}
                // onFocus={(e) => console.log("focus", e)}
                className="selectOptions"
              />

              <div style={{ cursor: "pointer", marginLeft: "15px" }}>
                <Button
                  onClick={handleHome}
                  variant="menu"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={iconHome}
                    height="26px"
                    width="26px"
                    style={{ marginRight: "10px" }}
                  />{" "}
                  Home
                </Button>
              </div>
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
                  height: "70vh",
                  backgroundColor: "white",
                }}
              >
                {!insideRepo
                  ? !github.repo_loading &&
                    github.repos &&
                    github.repos.map((repo) => (
                      <Repos
                        data={repo}
                        id={repo.id}
                        setCurrRepo={setCurrRepo}
                        insideRepo={insideRepo}
                        currRepo={currRepo}
                      />
                    ))
                  : !github.content_loading &&
                    github.contents.length >= 1 &&
                    github.contents.map((item) => (
                      <Repos
                        setPath={setPath}
                        data={item}
                        id={item.id}
                        insideRepo={insideRepo}
                        currRepo={currRepo}
                      />
                    ))}
              </Cutout>
            </div>
          </Window>
        </Draggable>
      </>
    )
  );
}

WindowsExplorer.propTypes = {};
const mapStateToProps = (state) => ({
  documents: state.applications.documents,
  repos: state.github.repos,
  insideRepo: state.github.insideRepo,
  github: state.github,
});

export default connect(mapStateToProps, {
  closeDocuments,
  getRepos,
  setCurrRepo,
  getContents,
  setPath,
  goBack,
})(WindowsExplorer);
