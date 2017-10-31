import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('app')
);