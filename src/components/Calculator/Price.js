import React from 'react';
import PropTypes from 'prop-types';

import classes from './Price.module.scss';

const Price = ({ title, price, divider }) => {
  const classList = [classes.PriceWrapper];

  if (divider) {
    classList.push(classes.Divider)
  }

  return (
    <div className={classList.join(' ')}>
      <p className={classes.Title}>{title}</p>
      <p>
        S/. <span className={classes.Price}>{price.toFixed(3)}</span>
      </p>
    </div>
  )
}

Price.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default Price
