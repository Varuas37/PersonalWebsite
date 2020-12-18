import {    OPEN_COMPUTER,
    CLOSE_COMPUTER
} from "./types";


export const openTerminal = ()=> dispatch=>{
    dispatch({
        type: OPEN_COMPUTER,
      });
}
export const closeTerminal = ()=> dispatch=>{
    dispatch({
        type: CLOSE_COMPUTER,
      });
}
