import React from 'react';
import PropTypes from 'prop-types';

import classes from './Card.module.scss';

const Card = (props) => {
  return (
    <div className={classes.Card}>
      <img src={props.img} alt={props.altText} />
      <span className={classes.Number}>{props.number}</span>
      <p>{props.title}</p>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired
}

export default Card;
