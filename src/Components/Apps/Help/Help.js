import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import {
  Window,
  WindowHeader,
  WindowContent,
  NumberField,
  Tabs,
  Tab,
  Fieldset,
  Checkbox,
  TabBody,
  Button,
} from "react95";
import Draggable from "react-draggable";
import { connect } from "react-redux";
import iconHelp from "../../layout/Assets/iconHelp.png";
import { closeHelp } from "../../../Redux/action/applications";
function Help({ closeHelp, help }) {
  const [state, setState] = useState({
    activeTab: 0,
  });
  const handleChange = (e, value) => setState({ activeTab: value });

  const { activeTab } = state;
  return (
    help && (
      <Fragment>
        <Draggable bounds="parent">
          <Window
            style={{
              width: "40%",
              minWidth: "fit-content",
              height: "fit-content",
              position: "absolute",
              left: "5%",
              top: "5%",
              overflowY: "auto",
            }}
          >
            <WindowHeader>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignContent: "center",
                }}
              >
                <img src={iconHelp} aria-label="dress"></img>
                <div style={{ paddingLeft: "5px" }}>Help</div>
                <Button
                  style={{ position: "absolute", right: "15px" }}
                  onClick={() => closeHelp()}
                >
                  {/* <span className="close-icon" />x */}
                  <span>x</span>
                </Button>
              </div>
            </WindowHeader>
            <WindowContent>
              <Tabs value={activeTab} onChange={handleChange}>
                <Tab value={0}>About</Tab>
                <Tab value={1}>Resources Used</Tab>
                <Tab value={2}>Feedbacks</Tab>
              </Tabs>
              <TabBody style={{ height: "fit-content", minHeight: "100%" }}>
                {activeTab === 0 && (
                  <div>
                    <Fieldset label="Why?">
                      <p>
                        I wanted my personal website to be a reflection of me.
                      </p>
                      <p>
                        This website represents my love for computers and what I
                        do.
                      </p>
                      <p>
                        There were a lot of generic personal websites but I
                        wanted mine to be a little different
                      </p>
                    </Fieldset>
                    <br />
                    <Fieldset label="How to use">
                      <p>
                        The website is still under development. I will be adding
                        more features with nodejs in the future{" "}
                      </p>
                      <p>Meanwhile, here are some tips: </p>
                      <p>
                        •You can find my portfolio in PDF form under Documents
                      </p>
                      <p>
                        •You can find all my personal projects under Portfolio
                      </p>
                      <p>
                        •You can find all my personal information under Saurav
                        Panthee
                      </p>
                      <p>
                        •Terminal is limited to few commands. Type help to list
                        all the commands available
                      </p>
                    </Fieldset>
                  </div>
                )}
                {activeTab === 1 && (
                  <div>
                    <Fieldset label="Youtube 🎥">
                      <p>
                        I got to learn a lot of different things while making
                        this website.{" "}
                      </p>
                      <p>
                        I could have not made this website without the following
                        tutorials
                      </p>
                      <br />
                      <ul>
                        <li>
                          <a href="https://www.youtube.com/watch?v=4b4MOAEBOyI">
                            {" "}
                            Power Button
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/watch?v=BLdd0zP">
                            {" "}
                            Minesweeper
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/watch?v=HVVNR96GhPk">
                            Terminal
                          </a>
                        </li>
                      </ul>
                    </Fieldset>
                    <br />

                    <Fieldset label="Stackoverflow 🙋🏽">
                      <p>
                        I can't list hundreds of Stackoverflow questions I
                        looked for, but I think it deserves a place in this
                        website
                      </p>
                    </Fieldset>
                    <br />
                    <Fieldset label="Assets">
                      <p>
                        I used React 95 to build this website You can check it
                        out
                        <a href="https://storybook.react95.io"> here</a>
                      </p>
                      <p>
                        <a href=" https://win98icons.alexmeub.com/">
                          {" "}
                          I used win98icons website to find icons
                        </a>
                      </p>
                    </Fieldset>
                  </div>
                )}
                {activeTab === 2 && (
                  <div>
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSf5UObxSifi5-DhovM8ZYWOo1UjO-O2nADRVDgKCiA9FDT5Tw/viewform?embedded=true"
                      width="640"
                      height="443"
                      frameborder="0"
                      marginheight="0"
                      marginwidth="0"
                    >
                      Loading…
                    </iframe>
                  </div>
                )}
              </TabBody>
            </WindowContent>
          </Window>
        </Draggable>
      </Fragment>
    )
  );
}

Help.propTypes = {};
const mapStateToProps = (state) => ({
  help: state.applications.help,
});

export default connect(mapStateToProps, { closeHelp })(Help);
