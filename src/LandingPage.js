import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './hooks';

import Projects from './Projects';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';

function LandingPage()  {
        const [open, setOpen] = useState(false);
        const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
        const [backGroundOpen, setBackGroundOpen] = useState(false);
        const [displayBio, toggleBio] = useState(false);
        const node = useRef();
        useOnClickOutside(node, () => setOpen(false));
        return (

            <div>
                <div style={{height: '100%'}}>
                    <Toolbar/>
                    <SideDrawer/>
                    <BackDrop/>
                </div>
                <main style={{marginTop: '64px'}} ref={node}>
                        <h2> My Name is Ravinder, Software Development Manager.</h2>
                        <p>I work as a software development lead and I love to code, learn new technologies!</p>
                        {
                            displayBio ?  (
                                    <div>
                                        <p>I write code everyday and I live in Washington DC Area.</p>
                                        <p>My favorite language is JavaScript, besign coding I like to go to gym!</p>
                                        <div>
                                            <button onClick={() => toggleBio(!displayBio)}> Show Less</button>
                                        </div>
                                    </div>
                                ) : (
                                <div>
                                    <button onClick={() => toggleBio(!displayBio)}> Read More</button>
                                </div>
                            )
                        }
                        <hr/>
                        <Projects/>
                </main>
            </div>
        )
}

export default LandingPage;
