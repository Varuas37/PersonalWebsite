import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import styled from "styled-components";
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Panel,
} from "react95";
import Draggable from "react-draggable"
import {Link, Redirect} from "react-router-dom"
import {connect} from "react-redux";
import {closeResume} from "../../../Redux/action/applications";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfDocument = ({resume,closeResume}) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <>
    <Draggable>
      <Window className="window">
        <WindowHeader className="window-header">
          <span>Resume</span>
          <Button 
          // onClick={()=>closeResume()}
          >
            <span className="fas fa-times" />
          </Button>
        </WindowHeader>
        <Toolbar>
          <Button variant="menu" size="sm">
            File
          </Button>
          {/* <Button variant="menu" size="sm" onClick={()=> <Redirect to='/SauravResume.pdf' rel="noopener noreferrer" downloadable />}>
         Download
          </Button> */}
        </Toolbar>
        <WindowContent>
          <Panel variant="well" className="footer">
            <Document
              file="./SauravResume.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
       
          </Panel>
   
          <div style={{display:"flex", flexDirection:"column", alignContent:"center", alignItems:"center", justifyContent:"center",padding:"5px"}}>
              <p>
                Page {pageNumber} of {numPages}
              </p>
              <div style={{ display:"flex", justifyContent:"center",alignContent:"center"}}>
              <button onClick={() => setPageNumber(1)} style={{margin:"10px"}}>Previous</button>
              <button onClick={() => setPageNumber(2)} style={{margin:"10px"}}>Next</button>
              </div>
            </div>
        </WindowContent>
      </Window>
      </Draggable>
    </>
  );
};

const mapStateToProps=(state)=>({
    resume:state.applications.resume
  })
  
  export default connect(mapStateToProps,{closeResume})(PdfDocument);
  