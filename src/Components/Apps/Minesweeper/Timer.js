import React, { useState, useEffect } from "react";

import styled from 'styled-components';
import {Counter,Panel,Button} from "react95";

import iconSmiley from "./assets/Image/iconSmiley.png"
import { Fragment } from "react";
let timeIntervalId;
export default function Timer({ gameOver, sendTime ,handleSmileyClick}) {
  let [time, setTime] = useState(0);

  useEffect(() => {
    function incrementTime() {
      setTimeout(() => {
        let newTime = time + 1;
        setTime(newTime);
      }, 1000);
    }
    incrementTime();
  }, [time]);

  console.log(timeIntervalId);
  return (

     <>
     <Fragment style={{display:"flex", justifyContent:"space-between"}}>

     
    <Counter value={10} minLength={3} size='md' />
    <Button style={{height:"50px", width:"60px"}} onClick={handleSmileyClick}> <img src={iconSmiley} style={{height:"40px", width:"40px", padding:"10px"}}></img></Button>
    <Counter value={time} minLength={3} size='md' />
    </Fragment>
  </>





   
  );
}