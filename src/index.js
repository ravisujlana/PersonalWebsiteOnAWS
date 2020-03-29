import React from 'react';
import ReactDOM from 'react-dom';

import 'react-dates/initialize';

import 'react-dates/lib/css/_datepicker.css';

import LandingPage from "./components/LandingPage/LandingPage";
import {BrowserRouter} from "react-router-dom";
import 'bootstrap';
import '../scss/custom.scss';


ReactDOM.render(<BrowserRouter>
                   <LandingPage/>
                 </BrowserRouter>,
    document.getElementById('root'));
