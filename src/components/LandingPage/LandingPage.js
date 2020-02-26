import React, { Component} from 'react';

import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Timeline from '../Timeline/Timeline';
import Footer from '../Footer/Footer';
import '../../common.css';


class  LandingPage extends Component {
        state =  {
            sideDrawerOpen : false,
            displayBio: false,
            displayBar: true
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
        render () {
            return (
                <div>
                    <div style={{height: '100%'}}>
                        <Toolbar drawerClickHandler={this.drawerToggleButton} show={this.state.displayBar}/>
                        <SideDrawer show={this.state.sideDrawerOpen} />
                    </div>
                    <main style={{marginTop: '64px'}} ref={'node'}>
                        <h2 className="heading content"> Software Engineer and Software Development Manager</h2>
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
                        <hr/>
                        <Timeline/>
                    </main>
                    <div className="emptyLine"/>
                    <div style={{height: '100%'}}>
                            <Footer/>
                    </div>
                </div>
            )
        }
}

export default LandingPage;
