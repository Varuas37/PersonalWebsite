import {
  OPEN_TERMINAL,
  CLOSE_TERMINAL,
  MINIMIZE_TERMINAL,
  OPEN_MINESWEEPER,
  CLOSE_MINESWEEPER,
  MINIMIZE_MINESWEEPER,
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
  OPEN_RESUME,
  CLOSE_RESUME,
  MINIMIZE_RESUME,
} from "../action/types";

const initialState = {
  terminal: false,
  minesweeper: false,
  portfolio: false,
  profile: false,
  navigationMenu: false,
  settings: false,
  documents: false,
  help: false,
  resume: true,
  // minimizedApplications: [{
  //   icon:null,
  //   name:null,
  //   handleFunc:null
  // }],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case OPEN_TERMINAL:
      return {
        ...state,
        terminal: true,
      };
    case CLOSE_TERMINAL:
      return {
        ...state,
        terminal: false,
      };
    case MINIMIZE_TERMINAL:
      return {
        ...state,
        minimizedApplications: payload,
      };
    case OPEN_MINESWEEPER:
      return {
        ...state,
        minesweeper: true,
      };
    case CLOSE_MINESWEEPER:
      return {
        ...state,
        minesweeper: false,
      };
    case OPEN_PORTFOLIO:
      return {
        ...state,
        portfolio: true,
      };
    case CLOSE_PORTFOLIO:
      return {
        ...state,
        portfolio: false,
      };
    case OPEN_PROFILE:
      return {
        ...state,
        profile: true,
      };
    case CLOSE_PROFILE:
      return {
        ...state,
        profile: false,
      };
    case OPEN_NAVIGATION_MENU:
      return {
        ...state,
        navigationMenu: true,
      };
    case CLOSE_NAVIGATION_MENU:
      return {
        ...state,
        navigationMenu: false,
      };
    case OPEN_SETTINGS:
      return {
        ...state,
        settings: true,
      };
    case CLOSE_SETTINGS:
      return {
        ...state,
        settings: false,
      };
    case OPEN_DOCUMENTS:
      return {
        ...state,
        documents: true,
      };
    case CLOSE_DOCUMENTS:
      return {
        ...state,
        documents: false,
      };
    case OPEN_HELP:
      return {
        ...state,
        help: true,
      };
    case CLOSE_HELP:
      return {
        ...state,
        help: false,
      };
    case OPEN_RESUME:
      return {
        ...state,
        resume: true,
      };
    case CLOSE_RESUME:
      return {
        ...state,
        resume: false,
      };
    default:
      return state;
  }
}
