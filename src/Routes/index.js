import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import {
  Button
} from 'reactstrap';

import Home from '../Components/Home';
import DataGrid from '../Components/DataGrid';
import Profile from '../Components/Profile';
import Forms from '../Components/Views/FormsPage';

const About = (props) => {
  console.log(props)
  return (
    <div>
      <h2>About {props.match.path}</h2>
      <Button 
      onClick={() => { props.history.push('/about/tim')}}>Tim</Button>
      <Button 
      color='default'
      onClick={() => { props.history.push('/')}}>Home</Button>
    </div>
  );
}

const Contact = () => {
  return <h2>Contact</h2>;
}

const Name = (props) => {
  console.log(props)
  return (
    <div>
      <h2>Name: {props.match.params.id}</h2>
      <Link to='/'>Back</Link>
    </div>
  )
}

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/about/:id" component={Name}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/data-grid" component={DataGrid}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/forms" component={Forms} />>
    </Switch>
  )
}