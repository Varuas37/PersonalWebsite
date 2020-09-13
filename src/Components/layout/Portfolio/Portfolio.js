import React, { Fragment, useState } from "react";
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

const Portfolio = (handleOpen) => {
  const [state, setState] = useState({
    activeTab: 0,
  });
  const [open, setOpen] = useState(true);
  const handleChange = (e, value) => setState({ activeTab: value });

  const { activeTab } = state;
  return (
    open && (
      <Fragment>
        <Draggable bounds="parent">
          <Window
            style={{
              width: "40%",
              height: "fit-content",

              position: "absolute",
              left: "10%",
              top: "10%",
              overflowY: "auto",
            }}
          >
            <WindowHeader>
              <span role="img" aria-label="dress">
                💻 {"  "}
              </span>
              PortFolio
              <Button
                style={{ position: "absolute", right: "15px" }}
                onClick={() => setOpen(false)}
              >
                {/* <span className="close-icon" />x */}
                <span style={{ fontWeight: "bolder" }}>x</span>
              </Button>
            </WindowHeader>
            <WindowContent>
              <Tabs value={activeTab} onChange={handleChange}>
                <Tab value={0}>In Progress</Tab>
                <Tab value={1}>All Projects</Tab>
                <Tab value={2}>Feedbacks</Tab>
              </Tabs>
              <TabBody style={{ height: "fit-content", minHeight: "100%" }}>
                {activeTab === 0 && (
                  <div>
                    <Fieldset label="MERN Stack ❤️">Libri</Fieldset>
                    <br></br>
                    <Fieldset label="Data Structures 📚">
                      <p>Sorting Algorithms</p>
                      <p>Path Finding Algorithms</p>
                    </Fieldset>
                  </div>
                )}
                {activeTab === 1 && (
                  <div>
                    <div>I will soon update this list</div>
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
};
export default Portfolio;
