import React from 'react';
import Fade from 'react-reveal/Fade';

import classes from './Bank.module.scss';

const Bank = (props) => {
  return (
    <Fade delay={300}>
      <div className={classes.Bank}>
        <img src={props.img} alt={props.altText} />
      </div>
    </Fade>
  )
}

export default Bank
