import React from 'react'
import { Link, withRouter } from "react-router-dom";
import Plasma_Icon from '../assets/plasma_drop.png'
import Notify_Icon from '../assets/bell icon.png'
import './Requests.css'
function Requests() {
    return (
        <div>
            <div className="header">
                <div style={{display:'flex'}}>
                <div>
                <img className="header_plasma_icon" src={Plasma_Icon}/>
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <p className="header_text">Plasma Finder</p>
                </div>
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <Link to='/requests'>
                    <img className="header_notify_icon" src={Notify_Icon} />
                    </Link>

                </div>
            </div>
            <h1>Requests</h1>
        </div>
    )
}

export default Requests
