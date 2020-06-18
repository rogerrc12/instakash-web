import React from 'react'
import LeftArrow from '../../../../../assets/images/icons/exchange-arrow-left.svg'
import RightArrow from '../../../../../assets/images/icons/exchange-arrow-right.svg'

import classes from './Arrows.module.scss';

const Arrows = () => {
  return (
    <div className={classes.Arrows}>
      <img src={RightArrow} alt="right arrow" />
      <img src={LeftArrow} alt="left arrow" />
    </div>
  )
}

export default Arrows
