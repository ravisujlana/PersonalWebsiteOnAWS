import React from 'react';

import { Link } from "react-router-dom";

import {Collapse} from "bootstrap";

$(window).ready(()=>{
    const navLinks = document.querySelectorAll('.nav-item');
    const menuToggle = document.getElementById('navbarNavDropdown');
    const bsCollapse = new Collapse(menuToggle, {toggle:false});
    bsCollapse.hide();
    navLinks.forEach((l) => {
       l.addEventListener('click', () => { bsCollapse.toggle()},false)
    });
});



const Menu = props => {

    return (
        <div className="menu">
            <nav className="navbar navbar-expand-md navbar-light position-sticky">
                <a className="navbar-brand px-3"  href="#">Ravi</a>
                <button className="navbar-toggler" type="button"
                        data-toggle="collapse"
                        data-bs-toggle="collapse"
                        data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" id="buttonMenuToggle">
                    <span className="navbar-toggler-icon"> </span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/"  className="dropdown-item" >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item" >
                                <Link to='/about' className="dropdown-item">
                                    About
                                </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/createBlog' className="dropdown-item" >
                                    Create Blog
                                </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default Menu;
