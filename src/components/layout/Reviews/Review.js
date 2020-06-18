import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './Review.module.scss';

const Review = (props) => {
  return (
    <div className={classes.Review}>
      <div className={classes.User}>
        <img src={props.image} alt={props.name} />
        <p>
          <span className={classes.Name}>{props.name}</span>
          {props.profession}
        </p>
      </div>
      <div className={classes.Stars}>
        <FontAwesomeIcon icon={['fas', 'star']} />
        <FontAwesomeIcon icon={['fas', 'star']} />
        <FontAwesomeIcon icon={['fas', 'star']} />
        <FontAwesomeIcon icon={['fas', 'star']} />
        <FontAwesomeIcon icon={['fas', 'star']} />
      </div>
      <p>{props.children}</p>
    </div>
  )
}

Review.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Review
