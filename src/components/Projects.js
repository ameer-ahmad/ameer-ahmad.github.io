import React from 'react';
import ProjectCard from './ProjectCard';
import backgroundProjects from '../img/background-projects.png';
import Modal1 from './Modal1';
import Modal2 from './Modal2';
import shoppies from '../img/shoppies.png';
import rumble from '../img/rumble.png';
import waves from '../img/waves.png';
import capture from '../img/capture.png';
import Modal3 from './Modal3';
import Modal4 from './Modal4';

const Projects = () => {

    const btnModal = React.createRef()

    const showModal1 = () => {
        const modal = document.querySelector('.modal1');
        const workPage = document.querySelector('.work');
        const footer = document.querySelector('footer');
        const nav = document.querySelector('header');
        modal.classList.add('active');
        workPage.classList.add('blur');
        footer.classList.add('blur');
        nav.classList.add('blur');
        btnModal.current.classList.add('active');
    }

    const showModal2 = () => {
        const modal = document.querySelector('.modal2');
        const workPage = document.querySelector('.work');
        const footer = document.querySelector('footer');
        const nav = document.querySelector('header');
        modal.classList.add('active');
        workPage.classList.add('blur');
        footer.classList.add('blur');
        nav.classList.add('blur');
        btnModal.current.classList.add('active');
    }
    const showModal3 = () => {
        const modal = document.querySelector('.modal3');
        const workPage = document.querySelector('.work');
        const footer = document.querySelector('footer');
        const nav = document.querySelector('header');
        modal.classList.add('active');
        workPage.classList.add('blur');
        footer.classList.add('blur');
        nav.classList.add('blur');
        btnModal.current.classList.add('active');
    }

    const showModal4 = () => {
        const modal = document.querySelector('.modal4');
        const workPage = document.querySelector('.work');
        const footer = document.querySelector('footer');
        const nav = document.querySelector('header');
        modal.classList.add('active');
        workPage.classList.add('blur');
        footer.classList.add('blur');
        nav.classList.add('blur');
        btnModal.current.classList.add('active');
    }

    const closeModal = () => {
        const modal = document.querySelector('.active');
        const workPage = document.querySelector('.work');
        const footer = document.querySelector('footer');
        const nav = document.querySelector('header');
        modal.classList.remove('active');
        btnModal.current.classList.remove('active');
        workPage.classList.remove('blur');
        footer.classList.remove('blur');
        nav.classList.remove('blur');
    }

    return (
        <>
            <div className="projects">
                <ProjectCard showModal={showModal1} name="Shoppies" languages={['HTML5', 'CSS3', 'React']} image={shoppies} />
                <ProjectCard showModal={showModal2} name="Rumble" languages={['HTML5', 'CSS3', 'React']} image={rumble}/>
                <ProjectCard showModal={showModal3} name="Waves" languages={['HTML5', 'SCSS', 'React']} image={waves} />
                <ProjectCard showModal={showModal4} name="Capture" languages={['HTML5', 'CSS3', 'React']} image={capture} />
            </div>
            <img className="backgroundProjects" src={backgroundProjects}/>
            <Modal1/>
            <Modal2/>
            <Modal3/>
            <Modal4/>
            <button className="closeModal" onClick={closeModal} ref={btnModal}>close</button>
        </>
    )
}

export default Projects;