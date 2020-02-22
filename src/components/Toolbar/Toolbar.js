import React from 'react';

import './Toolbar.css';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import CrossToggleButton from '../SideDrawer/CrossToggleButton';

const toolbar = props => {
    let showCorrectIcon ;
    if(!props.show) {
        showCorrectIcon =  <CrossToggleButton click={props.drawerClickHandler}/>
    }else {
        showCorrectIcon = <DrawerToggleButton click={props.drawerClickHandler}/>
    }

    return (
        <header className="toolbar__header">
            <nav className="toolbar__navigation">
                <div className="toolbar__logo"><a href="/"><h1>Ravinder Pal Singh</h1></a></div>
                <div className="spacer"/>
                <div className="toolbar__navigation-items">
                    <ul>
                        <li className="toolbar__navigation-item"><a href="/"><h3>About</h3></a></li>
                        <li className="toolbar__navigation-item"><a href="/"><h3>React Application</h3></a></li>
                        <li className="toolbar__navigation-item"><a href="/"><h3>AWS - My Implementation</h3></a></li>
                    </ul>
                </div>
                <div className="toggle_toolbar-toggle-button">
                    { showCorrectIcon }
                </div>

            </nav>
        </header>
    )
};

export default toolbar;
