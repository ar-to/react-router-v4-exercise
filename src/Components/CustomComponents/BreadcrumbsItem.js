import React from 'react';
import PropTypes from 'prop-types';

import {
  Breadcrumb,
  BreadcrumbItem
} from 'reactstrap';

const BreadItem = (props) => {
  return (
    <div>
    <BreadcrumbItem><a href={props.path}>{props.text}</a></BreadcrumbItem>
    {props.active ? <BreadcrumbItem active>{props.activeText}</BreadcrumbItem> : null}
    </div>
  )
}

  BreadItem.propTypes = {
    path:PropTypes.string,
    text:PropTypes.string,
    active: PropTypes.bool,
    activeText:PropTypes.string,
    links:PropTypes.arrayOf(PropTypes.element)
  };
export default BreadItem;