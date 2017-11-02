import React from 'react';

import {
  Link
} from 'react-router-dom';

const Header = () => {
  return (
      <div>
        <h2>Header</h2>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/about/:name'>About:name</Link>
        <Link to='/data-grid'>Data-Grid</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/forms'>Forms</Link>
      </div>
  );
}

export default Header;