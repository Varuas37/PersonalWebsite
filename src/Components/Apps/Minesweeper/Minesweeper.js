import React ,{useState,useEffect} from "react";
import styled from "styled-components";
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Panel,
} from "react95";
import createBoard from "./utils/createBoard"
import {revealed} from "./utils/reveal"
import "./Minesweeper.css";
import Cell from "./Cell";
import Draggable from "react-draggable";
import Timer from "./Timer";
import iconMinesweeper from "./assets/Image/iconMine.png"

// REDUX
import {connect} from "react-redux"

import {closeMinesweeper} from "../../../Redux/action/applications"
const Minesweeper = ({closeMinesweeper,minesweeper}) => {  const [grid, setGrid] = useState([]);
  const [nonMineCount, setNonMineCount] = useState(0);
  const [mineLocations, setMineLocations] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [dim,setDim]= useState(10)
  // ComponentDidMount
  useEffect(() => {
    // Creating a board

    // Calling the function
    if(minesweeper){
      freshBoard();
    }
  
  }, []);

  const handleSmileyClick =()=>{
  
      restartGame();
    
  }
  const freshBoard = () => {
    const newBoard = createBoard(dim,dim+5, dim+5);
    setNonMineCount(dim * (dim+5) - dim+5);
    setMineLocations(newBoard.mineLocation);
    setGrid(newBoard.board);
  };

  const restartGame = () => {
    freshBoard();
    setGameOver(false);
  };

  // On Right Click / Flag Cell
  const updateFlag = (e, x, y) => {
    // to not have a dropdown on right click
    e.preventDefault();
    // Deep copy of a state
    let newGrid = JSON.parse(JSON.stringify(grid));
    console.log(newGrid[x][y]);
    newGrid[x][y].flagged = true;
    setGrid(newGrid);
  };

  // Reveal Cell
  const revealCell = (x, y) => {
    if (grid[x][y].revealed || gameOver) {
      return;
    }
    let newGrid = JSON.parse(JSON.stringify(grid));
    if (newGrid[x][y].value === "X") {
      for (let i = 0; i < mineLocations.length; i++) {
        newGrid[mineLocations[i][0]][mineLocations[i][1]].revealed = true;
      }
      setGrid(newGrid);
      setGameOver(true);
    } else {
      let newRevealedBoard = revealed(newGrid, x, y, nonMineCount);
      setGrid(newRevealedBoard.arr);
      setNonMineCount(newRevealedBoard.newNonMinesCount);
      if (newRevealedBoard.newNonMinesCount === 0) {
        setGameOver(true);
      }
    }
  };
  return minesweeper&&(
    <>
    <Draggable bounds="parent">
      <Window className="window" style={{width:`fit-content`}}>
        <WindowHeader className="window-header">
          
        <span style={{display:"flex", alignContent:"center" ,gap:"10px"}}>  <img src={iconMinesweeper}/>Minesweeper</span>
          <Button onClick={()=>closeMinesweeper()}>x</Button>
        </WindowHeader>
        <Toolbar>
          <Button variant="menu" size="sm">
            Game
          </Button>
          <Button variant="menu" size="sm">
            Options
          </Button>
          <Button variant="menu" size="sm" s>
            Help
          </Button>
        </Toolbar>
       
        <WindowContent style={{display:"flex", flexDirection:"column"}}>
        <Panel style={{display:"flex", flexDirection:"row", alignContent:"center",justifyContent:"space-between", padding:"10px"}}>
          
        <Timer handleSmileyClick={handleSmileyClick} gameOver={gameOver} nonMineCount={nonMineCount}></Timer>
        </Panel>
          <Panel style={{padding:"20px"}}>

          <div className="">
          {/* {gameOver && <Modal restartGame={restartGame} />} */}
        {grid.map((singleRow, index1) => {
          return (
            <div style={{ display: "flex" }} key={index1}>
              {singleRow.map((singleBlock, index2) => {
                return (
                  <Cell
                    revealCell={revealCell}
                    details={singleBlock}
                    updateFlag={updateFlag}
                    key={index2}
                  />
                );
              })}
            </div>
          );
        })}

          </div>
         
          </Panel>
        </WindowContent>
      </Window>
      </Draggable>
    </>
  );
};
const mapStateToProps=(state)=>({
  minesweeper:state.applications.minesweeper
})

export default connect(mapStateToProps,{closeMinesweeper})(Minesweeper);
