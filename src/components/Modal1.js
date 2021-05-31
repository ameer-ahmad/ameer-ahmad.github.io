import React from 'react';
import shoppies from '../img/shoppies.png'

const Modal1 = () => {
    return (
        <div className="modal modal1">
            <div className="modalTop">
                <img src={shoppies}/>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>React</li>
                </ul>
            </div>
            <div className="modalBottom">
                <div className="modalSide">
                    <h3>Shoppies</h3>
                    <p>&#8226;&nbsp; React app which displays movie information from OMDB api<br/>&#8226;&nbsp; Ability to search, nominate and remove titles in a list<br/>&#8226;&nbsp; Nominated titles can be further shared through a link</p>
                </div>
                <div className="modalButtons">
                    <a href="https://github.com/ameer-ahmad/TheShoppies" target="blank"><i className="fab fa-github"></i></a>
                    <a href="https://ameer-ahmad.github.io/TheShoppies" target="blank"><i className="fas fa-link"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Modal1;