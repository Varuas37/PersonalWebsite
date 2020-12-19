import {
  OPEN_TERMINAL,
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
  OPEN_RESUME,
  CLOSE_RESUME
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
  resume:false,
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
