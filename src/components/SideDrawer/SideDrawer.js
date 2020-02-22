import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if(props.show){
        drawerClasses = ['side-drawer open']
    }
    return (
        <div>
            <nav className={drawerClasses}>
                <ul className="list-nav">
                    <li><a href="/"><h3>About</h3></a></li>
                    <li><a href="/"><h3>React Application</h3></a></li>
                    <li><a href="/"><h3>AWS Design</h3></a></li>
                </ul>
        </nav>
        </div>
    )
};

export default sideDrawer;
