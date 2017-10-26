import React from 'react';

import {
  Switch,
  Route,
  Link
} from 'react-router-dom';

const View1 = () => {
  return <h3>View1</h3>;
}

export default () => {
  return (
    <div>
      <Link to='/view1'>View1</Link>
      {/* <Switch>
        <Route path='/view1' component={View1}></Route>
      </Switch> */}
    </div>
  )
}