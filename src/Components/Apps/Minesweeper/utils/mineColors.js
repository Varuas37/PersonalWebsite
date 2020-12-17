 //Source: https://github.com/dhavaljardosh/minesweepervideo/blob/master/src/util/createBoard.js
//These util functions are from the above git repo. which i wrote by following the youtube tutorial. 

export const mineColor = () => {
    let colors = ["orange", "darkgreen", "cyan", "violet", "yellow"];
    return colors[Math.floor(Math.random() * colors.length)];
  };