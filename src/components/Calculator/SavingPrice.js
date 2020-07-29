import React from 'react';
import classes from './SavingPrice.module.scss';

const SavingPrice = (props) => {
  let difference;

  if (props.sending > 0) {
    const bankRate = props.condition === 'buying' ? props.selling + (props.selling * 0.025) : props.buying - (props.buying * 0.025);
    const bankPrice = props.condition === 'buying' ? props.sending / bankRate : props.sending * bankRate;
    difference = +props.receiving - bankPrice;
  }

  return props.sending > 29 ? <p className={classes.SavingPrice}>Ahorro estimado de: <b>{props.condition === 'buying' ? '$' : 'S/.'} {difference.toFixed(2)}</b></p> : null; 
}

export default SavingPrice
