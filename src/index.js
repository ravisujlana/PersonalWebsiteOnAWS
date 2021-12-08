import React from 'react';
import ReactDOM from 'react-dom';

import 'react-dates/initialize';

import 'react-dates/lib/css/_datepicker.css';

import LandingPage from "./components/LandingPage/LandingPage";
import {BrowserRouter as Router, BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap';
import '../scss/custom.scss';
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

ReactDOM.render(

    <Router>
        <div className="align-center-DB">
                <div className="menu">
                    <Menu/>
                </div>
         <div >
         <Routes>
            <Route path="/" exact={true} element={<Home/>}/>
            {/*<Route path="/createBlog" element={<CreateBlog/>}/>*/}
            <Route path="/about" element={<About/>}/>
            <Route path="/git" element={<About/>}/>
        </Routes>
        </div>
        <div className="emptyLine"/>
            <div style={{height: '100%'}}>
                <Footer/>
            </div>
        </div>
    </Router>
        ,document.getElementById('root')
    );
