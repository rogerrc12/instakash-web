import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

import classes from './Swipe.module.scss';

const Swipe = (props) => {
  useEffect(() => {
    if (props.condition === "buying") {
      props.setReceiving((props.sending / props.selling).toFixed(2));
    } else {
      props.setReceiving((props.sending * props.buying).toFixed(2));
    }
  });

  const classList = [classes.Swipe];

  if (props.condition === "selling") {
    classList.push(classes.Selling);
  }

  if (props.condition === "buying") {
    classList.push(classes.Buying);
  }

  return (
    <div className={classList.join(' ')} onClick={props.clicked} onKeyDown={props.clicked} role="button" tabIndex={0}>
      <span className="fas fa-exchange-alt" />
    </div>
  )
}

export default Swipe
