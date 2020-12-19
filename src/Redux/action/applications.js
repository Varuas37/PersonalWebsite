import {OPEN_TERMINAL,
    CLOSE_TERMINAL,
    OPEN_MINESWEEPER,
    CLOSE_MINESWEEPER,
    OPEN_PORTFOLIO,
    CLOSE_PORTFOLIO,
    OPEN_PROFILE,
    CLOSE_PROFILE,
    OPEN_NAVIGATION_MENU,
    CLOSE_NAVIGATION_MENU,
    OPEN_SETTINGS,
    CLOSE_SETTINGS,
    OPEN_DOCUMENTS,
    CLOSE_DOCUMENTS,
    OPEN_HELP,
    CLOSE_HELP,
    OPEN_PROGRAM,
    CLOSE_PROGRAM,
    OPEN_COMPUTER,
    CLOSE_COMPUTER
} from "./types";

    // TERMMINAL
export const openTerminal = ()=> dispatch=>{
    dispatch({
        type: OPEN_TERMINAL,
      });
}
export const closeTerminal = ()=> dispatch=>{
    dispatch({
        type: CLOSE_TERMINAL,
      });
}

// MINESWEEPER
export const openMinesweeper = ()=> dispatch=>{
    dispatch({
        type: OPEN_MINESWEEPER,
      });
}
export const closeMinesweeper = ()=> dispatch=>{
    dispatch({
        type: CLOSE_MINESWEEPER,
      });
}
// PORTFOLIO
export const openPortfolio = ()=> dispatch=>{
    dispatch({
        type: OPEN_PORTFOLIO,
      });
}
export const closePortfolio= ()=> dispatch=>{
    dispatch({
        type: CLOSE_PORTFOLIO,
      });
}
// PROFILE
export const openProfile = ()=> dispatch=>{
    dispatch({
        type: OPEN_PROFILE,
      });
}
export const closeProfile = ()=> dispatch=>{
    dispatch({
        type: CLOSE_PROFILE,
      });
}
// PROGRAM
export const openProgram = ()=> dispatch=>{
    dispatch({
        type: OPEN_PROGRAM,
      });
}
export const closeProgram = ()=> dispatch=>{
    dispatch({
        type: CLOSE_PROGRAM,
      });
}
// NAVIGATION MENU
export const openNavigation = ()=> dispatch=>{
    dispatch({
        type: OPEN_NAVIGATION_MENU,
      });
}
export const closeNavigation= ()=> dispatch=>{
    dispatch({
        type: CLOSE_NAVIGATION_MENU,
      });
}
// SETTINGS
export const openSettings = ()=> dispatch=>{
    dispatch({
        type: OPEN_SETTINGS,
      });
}
export const closeSettings= ()=> dispatch=>{
    dispatch({
        type: CLOSE_SETTINGS,
      });
}
// DOCUMENTS
export const openDocuments = ()=> dispatch=>{
    dispatch({
        type: OPEN_DOCUMENTS,
      });
}
export const closeDocuments = ()=> dispatch=>{
    dispatch({
        type: CLOSE_DOCUMENTS,
      });
}
// HELP
export const openHelp = ()=> dispatch=>{
    dispatch({
        type: OPEN_HELP,
      });
}
export const closeHelp = ()=> dispatch=>{
    dispatch({
        type: CLOSE_HELP,
      });
}

// COMPUTER
