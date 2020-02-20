import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => (
    <nav className="side-drawer">
        <ul>
            <li ><a href="/"><h3>About</h3></a> </li>
            <li ><a href="/"><h3>React Application</h3></a> </li>
            <li ><a href="/"><h3>AWS - My Implementation</h3></a> </li>
        </ul>
    </nav>
);

export default sideDrawer;
