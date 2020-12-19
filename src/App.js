import React, { } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { styleReset } from "react95";

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

import Desktop from "./Components/layout/Desktop/Desktop";
import Minesweeper from "./Components/Apps/Minesweeper/Minesweeper";
import Terminal from "./Components/Apps/Terminal/Terminal";
import "./App.css"
//Redux
import {Provider} from 'react-redux';
import store from "./Redux/store"
import Profile from "./Components/Apps/Profile/Profile";
import Portfolio from "./Components/Apps/Portfolio/Portfolio";
import Computer from "./Components/Page/Computer/Computer";
import Home from "./Components/Page/Home/Home";
import CustomSwitch from "./Components/layout/switch/CustomSwitch";
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
    <Provider store={store}>
  <Router>
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/start" component={Computer}/>
      <CustomSwitch/>
      </Switch>
    </ThemeProvider>
  </Router>
  </Provider>
)};

export default App;
