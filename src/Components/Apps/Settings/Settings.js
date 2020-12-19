import React from 'react'

import styled from 'styled-components';
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Panel
} from 'react95';
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import Draggable from "react-draggable"
import {closeSettings} from "../../../Redux/action/applications";
function Settings({closeSettings,settings}) {
    return settings&&(
        <>
        <Draggable>
    <Window className='window'>
      <WindowHeader className='window-header'>
        <span>Settings</span>
        <Button onClick={()=>closeSettings()}>
          <span className='fas fa-times' />
        </Button>
      </WindowHeader>
      <Toolbar>
        <Button variant='menu' size='sm'>
          File
        </Button>
        <Button variant='menu' size='sm'>
          Menu
        </Button>
      </Toolbar>
      <WindowContent>
      <Panel variant='well' className='footer'>
     <div style={{ padding: "10px", width: "600px", height:"40vh" }}> 
        In Progress.
     </div>
      </Panel>
      </WindowContent>
   
    </Window>
    </Draggable>

  </>
    )
}

Settings.propTypes = {

}
const mapStateToProps=(state)=>({
  settings:state.applications.settings
})

export default connect(mapStateToProps,{closeSettings})(Settings);
