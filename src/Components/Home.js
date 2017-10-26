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

// import Sidebar from '../Routes/Sidebar';
// import View from './View';

const Sidebar = () => {
  return (
    <div>
      <h4>Sidebar</h4>
      <Link to='/view1'>View1</Link>
    </div>
  )
}

const Views = () => {
  return (
    <Switch>
      <Route path='/view1' component={View1}></Route>
    </Switch>
  )
}

const View1 = () => {
  return (
    <div>
      <h4>view1</h4>
    </div>
  )
}

const Home = () => {
  return (
      <Container>
        <p>Testing</p>
        {console.log('This React App is working!')}
        <Row>
          <Col md='4'><Sidebar /></Col>
          <Col md='8'><Views /></Col>
        </Row>
      </Container>
  )
}

export default Home;