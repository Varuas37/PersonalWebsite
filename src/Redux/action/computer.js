import {    OPEN_COMPUTER,
    CLOSE_COMPUTER
} from "./types";


export const openComputer = ()=> dispatch=>{
    dispatch({
        type: OPEN_COMPUTER,
      });
}
export const closeComputer = ()=> dispatch=>{
    dispatch({
        type: CLOSE_COMPUTER,
      });
}
