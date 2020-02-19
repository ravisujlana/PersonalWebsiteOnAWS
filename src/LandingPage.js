import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './hooks';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './global';
import { theme } from "./theme";
import Projects from './Projects';
import { Burger, Menu } from './components';

function LandingPage()  {
        const [open, setOpen] = useState(false);
        const [displayBio, toggleBio] = useState(false);
        const node = useRef();
        useOnClickOutside(node, () => setOpen(false));
        return (
            <ThemeProvider theme ={theme}>
                <>
                    <GlobalStyle/>
                    <div>
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
                    </div>
                    <div ref={node}>
                        <Burger open={open} setOpen={setOpen} />
                        <Menu open={open} setOpen={setOpen} />
                    </div>
                </>
            </ThemeProvider>
        )
}

export default LandingPage;
