import React from 'react';
import ChartImg from '../../../../assets/images/chart-goal.svg';

import classes from './Chart.module.scss';

const Chart = () => {
  return (
    <div className={classes.Chart}>
      <img src={ChartImg} alt="Nuestra meta" />
    </div>
  )
}

export default Chart
