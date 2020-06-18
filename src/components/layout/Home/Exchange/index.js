import React from 'react';
import Wrapper from './Wrapper';
import Calculator from '../../../UI/Calculator';

import classes from './Exchange.module.scss';

const Exchange = () => {
  return (
    <article className={classes.Exchange}>
      <div className="container">
        <section className={classes.ExchangeWrapper}>
          <Wrapper />
          <Calculator />
        </section>
      </div>
    </article>
  )
}

export default Exchange
