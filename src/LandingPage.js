import React, { Component} from 'react';

import Projects from './Projects';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';
import Timeline from './components/Timeline/Timeline';
import Footer from './components/Footer/Footer';
import './common.css';

class  LandingPage extends Component {
        state =  {
            sideDrawerOpen : false,
            displayBio: false,
            displayBar: true
        };
        toggleBio = () => {
                this.setState((prevState) => {
                        return {displayBio: !prevState.displayBio}
                    }
                )
        };
         drawerToggleButton = () => {
             this.barToggleButton();
             this.setState((prevState) => {
                     return {displayBar: !prevState.displayBar}
                 }
             )
        };
        barToggleButton = () => {
        this.setState((prevState) => {
                return {sideDrawerOpen: !prevState.sideDrawerOpen}
            }
        )
    };

        backDropToggle = () => {
            this.setState({sideDrawerOpen: false});
        };
        render () {
            return (
                <div>
                    <div style={{height: '100%'}}>
                        <Toolbar drawerClickHandler={this.drawerToggleButton} show={this.state.displayBar}/>
                        <SideDrawer show={this.state.sideDrawerOpen} />
                    </div>
                    <main style={{marginTop: '64px'}} ref={'node'}>
                        <h2 className="heading content"> Software Engineer and Software development manager</h2>
                        <div className ="content">
                            <p>Dedicated Application Development Manager showcasing 19+ years of experience setting-up and
                                managing mission-critical financial IT services and large-scale applications for industry leaders,
                                including Citibank and Nucleus Software. Known for establishing IT infrastructure using the latest technology,
                                vendor development/management, budgeting, IT procurement and assuring compliance with policies,
                                processes, and tools. Design cutting edge technology solutions aligned with business requirements
                                within a short turnaround of time. An assertive leader respected for leading and managing multiple project
                                teams spread across different geographical locations, ensuring judicious resource allocation and utilization.
                                Articulate communicator capable of explaining and negotiating solution strategy and product offerings with clients,
                                key decision makers, and stakeholders to delivery strategic solutions. </p>
                        </div>
                        <div className="emptyLine"/>
                        {
                            this.state.displayBio ? (

                                <div className="content">
                                    <p/>
                                    <p>I review code on daily basis, write code when I can and live in Washington DC Area.</p>
                                    <p>My favorite language is Java; besides coding I like to spend time with my family and a fitness nerd!</p>
                                    <div >
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
                        <Timeline/>
                    </main>
                    <Footer/>
                </div>
            )
        }
}

export default LandingPage;
