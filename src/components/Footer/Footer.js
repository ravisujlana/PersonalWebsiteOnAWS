import React from 'react';

import './Footer.css';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const footer = props => {

    return (
        <div className="container-fluid">
            <header className="footer_header">
                <nav className="footer_navigation">
                    <small>&copy; Copyright {new Date().getFullYear()}, Ravinder Pal Singh</small>
                    <div className="spacer"/>
                    <div className="footer_navigation-items">
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/rsujlana" target="_blank" rel="noopener noreferrer" > <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                            </li>
                            <li>
                                <a href="https://www.github.com/ravisujlana/portfolio" target="_blank" rel="noopener noreferrer" > <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );

};

export default footer;
