import React from 'react';
import PropTypes from 'prop-types';

import {
  Breadcrumb,
  BreadcrumbItem
} from 'reactstrap';

const Bread = (props) => <div> 
  <Breadcrumb>
    <BreadcrumbItem><a href={props.path}>{props.text}</a></BreadcrumbItem>
    {props.links}
    {props.active ? <BreadcrumbItem active>{props.activeText}</BreadcrumbItem> : null}
  </Breadcrumb>
</div>;

  Bread.propTypes = {
    path:PropTypes.string,
    text:PropTypes.string.isRequired,
    active: PropTypes.bool,
    activeText:PropTypes.string,
    links:PropTypes.arrayOf(PropTypes.element)
  };
export default Bread;