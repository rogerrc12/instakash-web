import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

import classes from './Icon.module.scss';

const Icon = (props) => {
  return (
    <div className={classes.Icon}>
      <span className={props.icon} />
    </div>
  )
}

export default Icon
