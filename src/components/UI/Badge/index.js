import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './Badge.module.scss';

const Badge = (props) => {
  const classList = [classes.Badge];

  if (props.transparent) {
    classList.push(classes.Transparent)
  }

  return (
    <div className={classList.join(' ')}>
      <FontAwesomeIcon icon={props.icon} />
      <p>
        <small>{props.small}</small>
        <br />
        <span className={props.number ? classes.Number : ''}>{props.content}</span>
      </p>
    </div>
  )
}

Badge.propTypes = {
  icon: PropTypes.array,
}

export default Badge
