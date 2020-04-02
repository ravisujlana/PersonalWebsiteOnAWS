import React from 'react';

import Link from "react-router-dom/Link";

const Menu = props => {

    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light bg-custom">
                <a className="navbar-brand" href="#">Ravinder Pal Singh</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <Link to="/">
                            <li className="nav-item active nav-link">
                                Home
                            </li>
                        </Link>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/ravisujlana/portfolio" target="_blank" rel="noopener noreferrer">
                                    Ravinder.io Github</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                About
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                            <Link to='/about' className="dropdown-item">
                                About
                            </Link>
                                <Link to='/createBlog' className="dropdown-item" >
                                    Create Blog
                                </Link>
                                <a className="dropdown-item" href="https://github.com/ravisujlana/portfolio"
                                   target="_blank" rel="noopener noreferrer">Ravinder.io Github</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Menu;
