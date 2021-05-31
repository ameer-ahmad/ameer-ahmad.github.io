import React from 'react';
import hackademics from '../img/hackademics.png';
import mymedia from '../img/mymedia.jfif';

const Experiences = () => {
    return (
        <div className="experiences">
            <h2>Experiences</h2>
            <div className="job">
                <img src={hackademics} />
                <div className="jobText">
                    <h3>Frontend Web Developer</h3>
                    <p>Hackademics Club &nbsp;&nbsp;&nbsp;&nbsp; September 2020 &#8226; December 2020</p>
                    <p>&#8226;&nbsp; Developed the Hackville.io site using TypeScript, SCSS, React and Gatsby.<br/>&#8226;&nbsp; Added GitHub actions to test code before it is merged to master.</p>
                </div>
            </div>
            <div className="job">
                <img src={mymedia} />
                <div className="jobText">
                    <h3>Web Developer</h3>
                    <p>My Media Creative &nbsp;&nbsp;&nbsp;&nbsp; April 2021 &#8226; Current</p>
                    <p>&#8226;&nbsp; Created dynamic wordpress websites for clients.<br/>&#8226;&nbsp; Held meetings with clients to discuss features of application</p>
                </div>
            </div>
        </div>
    )
}

export default Experiences;