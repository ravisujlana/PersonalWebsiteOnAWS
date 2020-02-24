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
                    <li className="list-item"><a href="https://github.com/ravisujlana/portfolio" target="_blank" rel="noopener noreferrer" ><h3>This Website Code</h3></a></li>
                    <li className="list-item"><a href="/"><h3>AWS - My Implementation</h3></a></li>
                </ul>
        </nav>
        </div>
    )
};

export default sideDrawer;
