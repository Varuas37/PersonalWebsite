import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { styleReset } from 'react95';

import original from 'react95/dist/themes/original';
import StartMenu from './Components/layout/StartMenu/StartMenu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
//Redux
import { Provider } from 'react-redux';
import store from './Redux/store';

import Computer from './Components/Page/Computer/Computer';
import Mobile from "./Components/Page/Mobile/Mobile";
import Home from './Components/Page/Home/Home';
import Help from './Components/Apps/Help/Help';
import WindowsExplorer from './Components/Apps/Finder/WindowsExplorer';
import PdfDocument from './Components/layout/PdfDocument/PdfDocument';
// original Windows95 font (optionally)
import {
  BrowserView,
  MobileView,
   isBrowser,
  isMobile

} from "react-device-detect";
const GlobalStyles = createGlobalStyle`

  body {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`;
const si = require('systeminformation');

const App = () => {
   if (isMobile) {
    return(
       <MobileView>
     <Mobile/>
     </MobileView>
    )
   }
	return (
  <BrowserView>
		<Provider store={store}>
			<Router>
				<GlobalStyles />
				<ThemeProvider theme={original}>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/start" component={Computer} />
						<Route exact path="/resume" component={PdfDocument} />
					</Switch>
				</ThemeProvider>
			</Router>
		</Provider>
    </BrowserView>
	);
};

export default App;
