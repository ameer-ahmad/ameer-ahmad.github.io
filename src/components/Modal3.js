import React from 'react';
import waves from '../img/waves.png'

const Modal3 = () => {
    return(
        <div className="modal modal3">
            <div className="modalTop">
                <img src={waves}/>
                <ul>
                    <li>HTML5</li>
                    <li>SCSS</li>
                    <li>React</li>
                </ul>
            </div>
            <div className="modalBottom">
                <div className="modalSide">
                    <h3>Waves</h3>
                    <p>&#8226;&nbsp; Music Player created using React<br/>&#8226;&nbsp; Ability to fastforward, rewind, and change songs<br/>&#8226;&nbsp; Ability to select specific song using a library of songs</p>
                </div>
                <div className="modalButtons">
                    <a href="https://github.com/ameer-ahmad/waves" target="blank"><i className="fab fa-github"></i></a>
                    <a href="https://ahmaamee.dev.fast.sheridanc.on.ca/portfolio/waves/" target="blank"><i className="fas fa-link"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Modal3;