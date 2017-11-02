import React from 'react';

import {
  Link
} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem
} from 'reactstrap';

import Person from './CustomComponents/PropTypesTest';
import BreadItem from './CustomComponents/BreadcrumbsItem';
import Bread from './CustomComponents/Breadcrumbs';
import IconDropdown from './IconDropdown';
import TestDropdown from './Dropdown';

const elem = () => {
  return <p>text</p>;
}

const Home = (props) => {
  console.log(props);
  return (
      <Container>
        <i className="material-icons md-48">face</i>
        <p>Testing</p>
          <MuiThemeProvider>
            <IconDropdown />
          </MuiThemeProvider>
          <TestDropdown />
        <Person firstName='Ari' lastName='Guz' />
        <Bread path='/' text='home' active={true} activeText='home' 
        links={ [
          <BreadcrumbItem><a href='/'>next</a></BreadcrumbItem>,
          <BreadcrumbItem><Link to='/'>next2</Link></BreadcrumbItem>
        ]}
        />
        <Breadcrumb>
          <BreadItem path='/' text='test'></BreadItem>
          <BreadItem path='/' text='test2'></BreadItem>
          <BreadItem active={true} activeText='active'></BreadItem>
        </Breadcrumb>
        {console.log('This React App is working!')}
      </Container>
  )
}

export default Home;