import React from 'react';

import './DrawerToggleButton.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";

const drawerToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div>
            <FontAwesomeIcon icon={faBars} size="lg"/>
        </div>
    </button>
);

export default drawerToggleButton;
