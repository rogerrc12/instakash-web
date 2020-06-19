import React from 'react';
import MoneyExchange from '../../../../../assets/images/money-exchange.svg';
import Arrows from './Arrows';
import Badge from '../../../../UI/Badge';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import classes from './Wrapper.module.scss';

const ExchangeSlider = () => {
  return (
    <div className={classes.Wrapper}>
      <Fade delay={1200}>
        <div className={classes.Slider}>
          <img src={MoneyExchange} alt="Cambia dolares con nosotros" />
          <Arrows />
        </div>
      </Fade>
      <div className={classes.Badges}>
        <Badge icon={['fas', 'dollar-sign']} animation={1000} small="Transacciones registradas" content="+ 2MIL" number />
        <Badge icon={['fas', 'award']} animation={1600} small="Verificados por la" content="SBS & AFP - RESOLUCIÓN SBS N° 05939-2019" />
      </div>
      <Zoom delay={300}>
        <div className={classes.Background}></div>
      </Zoom>
    </div>
  )
}

export default ExchangeSlider
