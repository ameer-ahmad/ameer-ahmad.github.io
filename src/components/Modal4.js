import React from 'react';
import capture from '../img/capture.png';

const Modal4 = () => {
    return (
        <div className="modal modal4">
            <div className="modalTop">
                <img src={capture}/>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>React</li>
                </ul>
            </div>
            <div className="modalBottom">
                <div className="modalSide">
                    <h3>Capture</h3>
                    <p>&#8226;&nbsp; Videography portfolio site created using React<br/>&#8226;&nbsp; Used React Router to seamlessly transition between pages<br/>&#8226;&nbsp; Used styled components and framer motion to animate/style</p>
                </div>
                <div className="modalButtons">
                    <a href="https://github.com/ameer-ahmad/capture" target="blank"><i className="fab fa-github"></i></a>
                    <a href="https://ahmaamee.dev.fast.sheridanc.on.ca/portfolio/capture/" target="blank"><i className="fas fa-link"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Modal4;