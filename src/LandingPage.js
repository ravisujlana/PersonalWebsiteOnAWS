import React, {Component} from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './global';
import { theme } from "./theme";
import Projects from './Projects';
class LandingPage extends Component {
    state = {displayBio: false};

    toggleBio = () => {
        this.setState({displayBio: !this.state.displayBio});
    };

    render(){

        return (
            <ThemeProvider theme ={theme}>

                <GlobalStyle/>
                <div>
                    <h2> My Name is Ravinder, Software Development Manager.</h2>
                    <p>I work as a software development lead and I love to code, learn new technologies!</p>
                    {
                        this.state.displayBio ?  (
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
                </div>
            </ThemeProvider>
        )
    }
}

export default LandingPage;
