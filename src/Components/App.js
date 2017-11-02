import React from 'react';

import {
    Link
} from 'react-router-dom';

import {
    Container,
    Row,
    Col,
} from 'reactstrap';

import RouterList from '../Routes';
import Header from './Header';

const Main = () => {
    return (
        <main>
            <RouterList />
        </main>
    );
}

const App = () => {
    return (
        <div>
            <Header />
            <Main />
        </div>
    )
}

export default App;