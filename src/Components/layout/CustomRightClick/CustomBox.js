import React ,{Fragment, useEffect,useState}from "react";
import { List, ListItem, Divider } from "react95";



export default function CustomBox({ x,y,visible }) {

    const [visibleState,setVisible] = useState(visible)
    useEffect(() => {
        if (document.addEventListener) {
            document.addEventListener('click', function(e) {
            
             setVisible(false)
            }, false);
        }
        if (document.addEventListener) {
            document.addEventListener('contextmenu', function(e) {
              setVisible(true);
            }, false);
        }
        })
    

  return (
      <Fragment>
           {visibleState?
   <div style={{position:`absolute`,top:`${y}px`,left:`${x}px`, display:"inline-block"}}>
      <List >
        <ListItem size="sm" style={{cursor: "pointer"}}>View</ListItem>
        <Divider />
        <ListItem size="sm" style={{cursor: "pointer"}} >Refresh</ListItem>
        <ListItem size="sm" style={{cursor: "pointer"}} >View PortFolio</ListItem>
        <ListItem size="sm" style={{cursor: "pointer"}} >Projects</ListItem>
        <Divider />
        <ListItem size="sm" style={{cursor: "pointer"}}>Properties</ListItem>
      </List>
     
     
    </div>
:null}
      </Fragment>
     
      

       
  );
}
