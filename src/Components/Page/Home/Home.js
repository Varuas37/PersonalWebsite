import React from 'react'
import PropTypes from 'prop-types'
import Desktop from '../../layout/Desktop/Desktop'
import StartMenu from '../../layout/StartMenu/StartMenu'
import Terminal from '../../Apps/Terminal/Terminal'
import Minesweeper from '../../Apps/Minesweeper/Minesweeper'
import Profile from '../../Apps/Profile/Profile'
import Portfolio from '../../Apps/Portfolio/Portfolio'

function Home(props) {
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

}

export default Home

