import React from 'react';

const ProjectCard = ({ name, languages, showModal, image }) => {
    console.log(image)
    return (
        <div className="projectCard" onClick={showModal}>
            <div>
                <img src={image}/>
                <ul>
                    <li>{languages[0]}</li>
                    <li>{languages[1]}</li>
                    <li>{languages[2]}</li>
                </ul>
            </div>
            <div className="projectBottom">
                <h3>{name}</h3>
                <button>🡢</button>
            </div>
        </div>
    )
}

export default ProjectCard;