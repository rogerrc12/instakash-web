import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import '@fortawesome/fontawesome-free/css/all.css';

import classes from './Badge.module.scss';

const Badge = (props) => {
  const classList = [classes.Badge];

  if (props.transparent) {
    classList.push(classes.Transparent)
  }

  return (
    <Fade delay={props.animation}>
      <div className={classList.join(' ')}>
        <span className={props.icon + ' ' + classes.Icon} />
        <p>
          <small>{props.small}</small>
          <br />
          <span className={props.number ? classes.Number : ''}>{
            props.afp ?
            <span>Superintendencia de Banca, Seguros y AFP <br /> Res N° 05939-2019</span>
            :
            props.content
          }</span>
        </p>
      </div>
    </Fade>
  )
}

Badge.propTypes = {
  icon: PropTypes.array,
}

export default Badge
