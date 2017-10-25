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


const Header = () => {
    return <h2>Header</h2>;
}

const About = () => {
    return <h2>About</h2>;
}

const Main = () => {
    return (
        <main>
            <Switch>
                <Route path="/" component={Home}/>
                <Route path="/about" component={About}/>
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