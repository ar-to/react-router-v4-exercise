import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

import { BrowserRouter as Router } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
    <Router>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Router>,
    document.getElementById('app')
);