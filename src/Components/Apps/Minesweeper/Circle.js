import React from "react";
import iconMine from "./assets/Image/mine.png"
export default function Circle() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: 23,
          width: 23,
          borderRadius: 20,
          // background: "red",
          display:"flex",
          justifyContent:"center",
        }}
      >
        <img src={iconMine} style={{height:"20px", width:"20px"}}/> 
      </div>
    </div>
  );
}