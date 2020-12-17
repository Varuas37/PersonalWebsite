import React from "react";
import { mineColor } from "./utils/mineColors";
import {

  Button,

} from "react95";
import Circle from "./Circle";
import iconFlag from "./assets/Image/flag.png"

export default function Cell({ details, updateFlag, revealCell }) {
  return (
    <Button active={details.revealed}
      onContextMenu={(e) => updateFlag(e, details.x, details.y)}
      onClick={() => revealCell(details.x, details.y)}
    
      style={{color:`${numColorCode(details.value)}`, fontWeight:"bold", minWidth:"30px", maxWidth:"30px",minHeight:"40px",maxHeight:"40px", background:`${details.revealed
        ? details.value === "X"
          ? "none"
          : "#BDBDBD"
        : "none"}`, margin:"0px"}}
    >
      {!details.revealed && details.flagged ? (
        <img src={iconFlag} style={{height:"20px", width:"20px"}}></img>
      ) : details.revealed && details.value !== 0 ? (
        details.value === "X" ? (
          <Circle />
        ) : (
          details.value
        )
      ) : (
        ""
      )}
    </Button>
  );
}

const bombChexPattern = (x, y) => {
  if (x % 2 === 0 && y % 2 === 0) {
    return "#e5c29f";
  } else if (x % 2 === 0 && y % 2 !== 0) {
    return "#d7b899";
  } else if (x % 2 !== 0 && y % 2 === 0) {
    return "#d7b899";
  } else {
    return "#e5c29f";
  }
};

const chexPattern = (x, y) => {
  if (x % 2 === 0 && y % 2 === 0) {
    return "#aad751";
  } else if (x % 2 === 0 && y % 2 !== 0) {
    return "#a2d249";
  } else if (x % 2 !== 0 && y % 2 === 0) {
    return "#a2d249";
  } else {
    return "#aad751";
  }
};

const numColorCode = (num) => {
  if (num === 1) {
    return "blue";
  } else if (num === 2) {
    return "green";
  } else if (num === 3) {
    return "red";
  } else if (num === 4) {
    return "purple";
  } else if (num === 5) {
    return "peach";
  } else if (num === 6) {
    return "pink";
  } else {
    return "white";
  }
};

// const cellstyle = {
//   background: details.revealed
//     ? details.value === "X"
//       ? mineColor()
//       : bombChexPattern(details.x, details.y)
//     : chexPattern(details.x, details.y),
//   color: numColorCode(details.value),
// };