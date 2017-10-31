import React from 'react';

import {
    Switch,
    Route,
    Link
} from 'react-router-dom';

import {
    Container,
    Col,
    Row
} from 'reactstrap';

// import Sidebar from '../Routes/Sidebar';
// import View from './View';

const Sidebar = () => {
    return (
      <div>
        <h4>Sidebar</h4>
        <Link to='/profile/1'>View1</Link>
        <Link to='/profile/2'>View2</Link>
        <Link to='/profile/3'>View3</Link>
      </div>
    )
  }
  
  const Views = (props) => {
    // console.log(props);
    return (
        <div>
            <h4>Views</h4>
            <Switch>
                <Route path='/profile/:view' component={View}></Route>
                <Route component={Default}></Route>
            </Switch>
        </div>
    )
  }

  //controls what is rendered per view
  const View = (props) => {
    let view = props.match.params.view;
    console.log(props);
    return (
      <Container>
        {
          (() => {
          switch(view) {
            case "view1":
              return <View1 />
              break;
            default:
              return <p>View: {view}</p>
          }
        })()
        }
      </Container>
    )
  }

  const Default = () => {
    return <h3>Dafault</h3>;
  }
  
  const View1 = (props) => {
    return (
      <div>
        <h4>view: {props.match.params.view}</h4>
      </div>
    )
  }

const Profile = () => {
    return (
      <div>
        <h3>Profile</h3>
        <Container>
        <p>Testing</p>
        {console.log('This React App is working!')}
        <Row>
          <Col md='4'><Sidebar /></Col>
          <Col md='8'><Views /></Col>
        </Row>
      </Container>
        <Link to='/'>Back</Link>
      </div>
    )
  }

export default Profile;