import React from 'react';

import {
    Switch,
    Route,
    Link
} from 'react-router-dom';

import {
    Container,
    Row,
    Col
} from 'reactstrap';

import Home from '../Routes/Home';
import DataGrid from './DataGrid';


const Header = () => {
    return <h2>Header</h2>;
}

const About = () => {
    return <h2>About</h2>;
}

const Contact = () => {
    return <h2>Contact</h2>;
}

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/data-grid" component={DataGrid}/>
            </Switch>
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