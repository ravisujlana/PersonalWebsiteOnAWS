import React from 'react';

import './BackDrop.css';

const backDrop = props => (
    <div className="backDrop" onClick={props.clickBackdrop}/>
);

export default backDrop;
