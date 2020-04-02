import React, { Component} from 'react';

import Menu from '../Menu/Menu';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import About from '../About/About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CreateBlog from "../Blogs/CreateBlog";

import '../../common.css';


class  LandingPage extends Component {
        render () {
            return (
                <Router>
                    <div >
                        <div style={{height: '100%'}}>
                            <Menu/>
                        </div>
                        <Switch>
                            <Route path="/" exact={true} component={Home}/>
                            <Route path="/createBlog" component={CreateBlog}/>
                            <Route path="/about" component={About}/>
                            <Route path="/git" component={About}/>
                        </Switch>
                        <div className="emptyLine"/>
                        <div style={{height: '100%'}}>
                                <Footer/>
                        </div>
                    </div>
                </Router>
            )
        }
}

export default LandingPage;
