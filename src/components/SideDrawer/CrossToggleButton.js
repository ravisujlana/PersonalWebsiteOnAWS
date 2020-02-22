import React from 'react';

import './CrossToggleButton.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from "@fortawesome/free-solid-svg-icons";

const drawerToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div>
            <FontAwesomeIcon icon={faTimes} size="lg"/>
        </div>
    </button>
);

export default drawerToggleButton;
