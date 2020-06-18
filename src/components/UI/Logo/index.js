import React from 'react';
import LogoBlanco from '../../../assets/images/logo-blanco.svg';

import classes from './Logo.module.scss';

const Logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={LogoBlanco} alt={props.siteTitle} />
    </div>
  )
}

export default Logo;
