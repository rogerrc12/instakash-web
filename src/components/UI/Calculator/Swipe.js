import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './Swipe.module.scss';

const Swipe = (props) => {
  const classList = [classes.Swipe];

  if (props.condition === "selling") {
    classList.push(classes.Selling);
  }

  if (props.condition === "buying") {
    classList.push(classes.Buying);
  }

  return (
    <div className={classList.join(' ')} onClick={props.clicked} onKeyDown={props.clicked} role="button" tabIndex={0}>
      <FontAwesomeIcon icon={['fas', 'exchange-alt']} />
    </div>
  )
}

export default Swipe
