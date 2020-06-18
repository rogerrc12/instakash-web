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
        <Fade delay={1700}>
          <Badge icon={['fas', 'dollar-sign']} small="Transacciones registradas" content="+ 2MIL" number />
        </Fade>
        <Fade delay={2000}>
          <Badge icon={['fas', 'award']} small="Verificados por la" content="SBS & AFP - RESOLUCIÓN SBS N° 05939-2019" />
        </Fade>
      </div>
      <Zoom delay={300}>
        <div className={classes.Background}></div>
      </Zoom>
    </div>
  )
}

export default ExchangeSlider
