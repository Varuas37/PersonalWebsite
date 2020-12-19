import React from 'react'
import PropTypes from 'prop-types'
import Desktop from '../../layout/Desktop/Desktop'
import StartMenu from '../../layout/StartMenu/StartMenu'
import Terminal from '../../Apps/Terminal/Terminal'
import Minesweeper from '../../Apps/Minesweeper/Minesweeper'
import Profile from '../../Apps/Profile/Profile'
import Portfolio from '../../Apps/Portfolio/Portfolio'
import {connect} from "react-redux"

import { Link, Redirect } from "react-router-dom";


function Home({computerOpen}) {

    if (!computerOpen) {
        return <Redirect to="/start" />;
      }

    return (
        <div>
            <Desktop>
                <StartMenu/>
                <Minesweeper/>
                <Terminal/>
                <Profile/>
                <Portfolio/>

            </Desktop>
        </div>
    )
} 
Home.propTypes = {
    computerOpen : PropTypes.bool.isRequired,
}

const mapStateToProps=(state)=>({
    computerOpen:state.computer.computerOpen
  })
  
  export default connect(mapStateToProps,null)(Home);
  
