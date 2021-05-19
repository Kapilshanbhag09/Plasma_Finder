import React from 'react'
import { Link, withRouter } from "react-router-dom";
import Plasma_Icon from '../assets/plasma_drop.png'
import Notify_Icon from '../assets/bell icon.png';
import './Donate.css';
function Donate() {
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
            <div style={{display:'flex',alignItems:'center',flexDirection:'column',marginTop:'10px'}}>
                <div style={{display:'flex',borderRadius:'100px',boxShadow:'0 0px 10px rgba(255, 251, 0.7, 0.7)'}}>
                    <Link to='/find' style={{ textDecoration: 'none' }}>
                    <div className="navigator_donate_find">
                        FIND
                        
                    </div>
                    </Link>
                    <div className="navigator_donate_donate">
                        DONATE
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donate
