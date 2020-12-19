import React from 'react'
import PropTypes from 'prop-types'
import "./CustomSwitch.css"

function CustomSwitch({onClick,children}) {

    return (
        <div className="customSwitch btn" onClick={()=>setTimeout(() => {
            onClick();
        }, 1000)} style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
            <input type = "checkbox"/>
            <label><i className="fa fa-power-off" aria-hidden="true"></i></label>
            {children} 
        </div>
    )
}

CustomSwitch.propTypes = {

}

export default CustomSwitch;

