import React, { Component} from 'react';

import Projects from './Projects';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';

class  LandingPage extends Component {
        state =  {
            sideDrawerOpen : false,
            displayBio: false
        };
        toggleBio = () => {
                this.setState((prevState) => {
                        return {displayBio: !prevState.displayBio}
                    }
                )
        };
         drawerToggleButton = () => {
             this.setState((prevState) => {
                     return {sideDrawerOpen: !prevState.sideDrawerOpen}
                 }
             )
        };
        backDropToggle = () => {
            this.setState({sideDrawerOpen: false});
        };
        render () {
            let backDrop;

            if(this.state.sideDrawerOpen) {
                backDrop = <BackDrop clickBackdrop={this.backDropToggle}  />;
            }
            return (
                <div>
                    <div style={{height: '100%'}}>
                        <Toolbar drawerClickHandler={this.drawerToggleButton}/>
                        <SideDrawer show={this.state.sideDrawerOpen} />
                        {backDrop}
                    </div>
                    <main style={{marginTop: '64px'}} ref={'node'}>
                        <h2> My Name is Ravinder, Software Development Manager.</h2>
                        <p>I work as a software development lead and I love to code, learn new technologies!</p>
                        {
                            this.state.displayBio ? (
                                <div>
                                    <p>I write code everyday and I live in Washington DC Area.</p>
                                    <p>My favorite language is JavaScript, besign coding I like to go to gym!</p>
                                    <div>
                                        <button onClick={this.toggleBio}> Show Less</button>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <button onClick={this.toggleBio}> Read More</button>
                                </div>
                            )
                        }
                        <hr/>
                        <Projects/>
                    </main>
                </div>
            )
        }
}

export default LandingPage;
