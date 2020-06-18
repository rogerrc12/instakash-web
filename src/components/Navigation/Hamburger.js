import React from 'react'

import classes from './Hamburger.module.scss';

const Hamburger = (props) => {

  return (
    <div className={classes.Hamburger} onClick={props.clicked} onKeyDown={props.clicked} role="button" tabIndex={0}>
      <span></span>
    </div>
  )
}

export default Hamburger
