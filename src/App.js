import React from "react";
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
import Profile from "./Components/layout/Profile/Profile";
// original Windows95 font (optionally)

const GlobalStyles = createGlobalStyle`

  body {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`;
// S
const App = () => (
  <Router>
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <StartMenu> </StartMenu>
      <Switch></Switch>
    </ThemeProvider>
  </Router>
);

export default App;
