import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
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
function StartMenuBar({setOpen,setOpenProfile,openProfile,setOpenPortFolio,openPortFolio}) {
    return (
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
    )
}

StartMenuBar.propTypes = {

}

export default StartMenuBar

