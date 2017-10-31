import React from 'react';
import PropTypes from 'prop-types';
//Proptypes info see:
//https://reactjs.org/docs/typechecking-with-proptypes.html
//https://codeburst.io/validating-props-easily-with-react-proptypes-96e80208207
//https://medium.com/pvtl/react-native-custom-components-6cd0f6461f67

const Person = (props) => <div> 
  <h1>{props.firstName} {props.lastName}</h1>
  {props.country ? <p>Country: {props.country}</p> : null}
</div>;
Person.propTypes = {
  firstName:PropTypes.string,
  lastName:PropTypes.string.isRequired,
  country:PropTypes.string
};
export default Person;