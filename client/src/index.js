import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles.scss';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
//**new**/

import { StrictMode } from "react";
/**end **/
ReactDOM.render(
  <Router>
    <App />
    </Router>,
    
  document.getElementById('root')
);



