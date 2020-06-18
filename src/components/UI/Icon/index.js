import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './Icon.module.scss';

const Icon = (props) => {
  return <FontAwesomeIcon icon={props.icon} className={classes.Icon} />
}

export default Icon
