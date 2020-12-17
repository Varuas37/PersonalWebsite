import React, { useEffect, useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { styleReset, List, ListItem, Divider } from "react95";
// pick a theme of your choice
import original from "react95/dist/themes/original";
import StartMenu from "./Components/layout/StartMenu/StartMenu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import "./App.css"
import Profile from "./Components/layout/Profile/Profile";
import Minesweeper from "./Components/Apps/Minesweeper/Minesweeper";
import Desktop from "./Components/layout/Desktop/Desktop";
import Model from "./Components/Models/Model";
import { Helmet } from "react-helmet";
import Terminal from "./Components/Apps/Terminal/Terminal";
// original Windows95 font (optionally)

const GlobalStyles = createGlobalStyle`

  body {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`;
const si = require('systeminformation');


const App = () => {

  return(
  <Router>
    <GlobalStyles />
    <ThemeProvider theme={original}>
 
    <Minesweeper></Minesweeper>
    {/* <Desktop></Desktop> */}
      {/* <StartMenu> </StartMenu> */}
   
      {/* <Model></Model> */}
      {/* <Terminal></Terminal> */}
      <Switch></Switch>
   
    </ThemeProvider>
  </Router>
)};

export default App;
