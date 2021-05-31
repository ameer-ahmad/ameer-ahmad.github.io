import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footerLeft">
                <h4>Lets Connect.</h4>
                <p>Hmu for work or to talk about ball!</p>
                <ul>
                    <a href="https://www.linkedin.com/in/ameerahmad/" target="blank"><li><i className="fab fa-linkedin-in"></i></li></a>
                    <li><i className="far fa-envelope"></i></li>
                    <a href="https://github.com/ameer-ahmad" target="blank"><li><i className="fab fa-github"></i></li></a>
                </ul>
            </div>
            <div className="footerRight">
                <p>&copy; Ameer Ahmad 2021</p>
            </div>
        </footer>
    )
}

export default Footer;