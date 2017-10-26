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

const Header = () => {
    return (
        <div>
          <h2>Header</h2>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/about/:name'>About:name</Link>
          <Link to='/data-grid'>Data-Grid</Link>
          <Link to='/profile'>Profile</Link>
        </div>
    );
}

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