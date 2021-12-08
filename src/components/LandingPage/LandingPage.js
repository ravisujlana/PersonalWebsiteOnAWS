import React, { Component} from 'react';

import Menu from '../Menu/Menu';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import About from '../About/About';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CreateBlog from "../Blogs/CreateBlog";

import '../../common.css';


class  LandingPage extends Component {
        render () {
            return (
                    <Router>
                        <div>
                            <div>
                                <Menu/>
                            </div>
                            <Routes>
                                <Route path="/" exact={true} element={Home}/>
                                <Route path="/createBlog" element={CreateBlog}/>
                                <Route path="/about" element={About}/>
                                <Route path="/git" element={About}/>
                            </Routes>
                            <div className="emptyLine"/>
                            <div>
                                    <Footer/>
                            </div>
                        </div>
                </Router>
            )
        }
}

export default LandingPage;
