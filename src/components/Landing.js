import React from 'react';
import backgroundLanding from '../img/background-landing.png';

const Landing = () => {
    return (
        <div className="landing">
            <div className="intro">
                <h1>Ameer Ahmad</h1>
                <h2>{'<'} Software Developer /{'>'}</h2>
                <p>I build cool and interesting projects</p>
            </div>
            <img src={backgroundLanding} />
        </div>
    )
}

export default Landing;