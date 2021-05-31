import React from 'react';
import rumble from '../img/rumble.png'

const Modal2 = () => {
    return (
        <div className="modal modal2">
            <div className="modalTop">
                <img src={rumble}/>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>React</li>
                </ul>
            </div>
            <div className="modalBottom">
                <div className="modalSide">
                    <h3>Rumble</h3>
                    <p>&#8226;&nbsp; ToDo list created using React<br/>&#8226;&nbsp; Ability to add, complete, and remove tasks<br/>&#8226;&nbsp; Tasks can be sorted into all, todo, and completed categories</p>
                </div>
                <div className="modalButtons">
                    <a href="https://github.com/ameer-ahmad/rumble" target="blank"><i className="fab fa-github"></i></a>
                    <a href="https://ameer-ahmad.github.io/rumble" target="blank"><i className="fas fa-link"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Modal2;