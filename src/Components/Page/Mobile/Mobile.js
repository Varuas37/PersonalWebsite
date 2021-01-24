import React from 'react'
import StartMenu from '../../layout/StartMenu/StartMenu'
import { AppBar, Toolbar, Button,List,ListItem,Divider } from "react95";
import "./StartMenu.css";
import Clock from "react-live-clock";

const iconWindow = require("./windows.png");
function Mobile() {
    return (
        <>
     <div style={{width:"100%", height:"100vh", color:"black", padding:"10px", backgroundColor:"white"}}>
        <h1>Personal Website</h1>
        <p>Yup, phone viewers are not allowed to see my website</p>
        <p>It's too precious to see it on a smaller screen</p>
        <p>Meanwhile, you can check my portfolio <a href="https://sauravpanthee.wixsite.com/portfolio" target="blank">here</a></p>
        <p>Please buy a laptop already. Here are some of my affiliate links <a href="https://www.amazon.com/Apple-MacBook-16-Inch-512GB-Storage/dp/B081FZV45H/ref=sr_1_3?dchild=1&keywords=apple+macbook+pro&qid=1611473386&sr=8-3" target="blank">1. Very Pricy Laptop</a></p>
        <p><b>Serious Saurav here: </b> I am currently working on building the website for mobile. The desktop applicaiton features a desktop (literally) so it was a little difficult to display on smaller screens</p>
        <p><b>To the Recruiters: </b> Aren't you impressed with all the h1 and p tags and this cool start menu? </p>
    </div>
         <AppBar
        style={{
          position: "absolute",
          bottom: "0px",
          top: "95%",
          margin: "0px",
          padding: "0px",
          minHeight:"50px"
        }}
      >
        <Toolbar
          style={{
            justifyContent: "space-between",
         
            
          }}
        >
          <div style={{ position: "relative", display: "inline-block",}}>
            <Button
             
              
              style={{ fontWeight: "bold" }}
            >
              <img
                src={iconWindow}
                alt="react95 logo"
                style={{ height: "20px", marginRight: 4 }}
              />
              Start
            </Button>
          

           <span style={{marginLeft:"20px"}} >
         


            
           </span>
          </div>
      
          <div>
    
          </div>
          <span style={{ }}>
           
            <Clock format={"HH:mm:ss"} ticking={true} timezone={"US/Pacific"} />
          </span>
        </Toolbar>
      </AppBar>
      </>
    )
}


export default Mobile

