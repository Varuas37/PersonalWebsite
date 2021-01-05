import {OPEN_TERMINAL,
    CLOSE_TERMINAL,
    MINIMIZE_TERMINAL,
    OPEN_MINESWEEPER,
    CLOSE_MINESWEEPER,
    MINIMIEZE_MINESWEEPER,
    OPEN_PORTFOLIO,
    CLOSE_PORTFOLIO,
    MINIMIZE_PORTFOLIO,
    OPEN_PROFILE,
    CLOSE_PROFILE,
    MINIMIZE_PROFILE,
    OPEN_NAVIGATION_MENU,
    CLOSE_NAVIGATION_MENU,
    OPEN_SETTINGS,
    CLOSE_SETTINGS,
    MINIMIZE_SETTINGS,
    OPEN_DOCUMENTS,
    CLOSE_DOCUMENTS,
    MINIMIZE_DOCUMENTS,
    OPEN_HELP,
    CLOSE_HELP,
    MINIMIZE_HELP,
    OPEN_PROGRAM,
    CLOSE_PROGRAM,
    MINIMIZE_PROGRAM,
    OPEN_RESUME,
    CLOSE_RESUME,
    MINIMIZE_RESUME,
    MINIMIZE_MINESWEEPER,

  
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
export const minimizeTerminal = (icon,name,handleFunc)=> dispatch=>{
    dispatch({
        type: MINIMIZE_TERMINAL,
        payload:[{icon:icon, name:name,handleFunc:handleFunc}]
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
export const minimizeMinesweeper = ()=> dispatch=>{
    dispatch({
        type: MINIMIZE_MINESWEEPER,
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
export const minimizePortfolio = ()=> dispatch=>{
    dispatch({
        type: MINIMIZE_PORTFOLIO,
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
export const minimizeProfile = ()=> dispatch=>{
    dispatch({
        type: MINIMIZE_PROFILE,
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
export const minimizeProgram = ()=> dispatch=>{
    dispatch({
        type: MINIMIZE_PROGRAM,
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
export const minimizeSettings = ()=> dispatch=>{
    dispatch({
        type: MINIMIZE_SETTINGS,
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
export const minimizeDocuments = ()=> dispatch=>{
    dispatch({
        type: MINIMIZE_DOCUMENTS,
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
export const minimizeHelp = ()=> dispatch=>{
    dispatch({
        type: MINIMIZE_HELP,
      });
}

// RESUME
export const openResume = ()=> dispatch=>{
    dispatch({
        type: OPEN_RESUME,
      });
}
export const closeResume = ()=> dispatch=>{
    dispatch({
        type: CLOSE_RESUME,
      });
}
export const minimizeResume = ()=> dispatch=>{
    dispatch({
        type: MINIMIZE_RESUME,
      });
}

