import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2 flex items-center" style={{ height: '150px', width: '150px' }}>
                <div className="center">
                    <img src={brain} alt="Our logo"/>
                </div>
            </Tilt>
        </div>
    )
}




export default Logo;