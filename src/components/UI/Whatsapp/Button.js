import React from 'react';
import { useScroll } from '../../../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './Whatsapp.module.scss';

const Button = () => {
  const { isAtBottom } = useScroll({ threshold: 50, isWindow: true });

  const classList = [classes.Whatsapp]

  if (isAtBottom) {
    classList.push(classes.Show);
  }

  return (
    <div className={classList.join(' ')}>
      <a href="https://wa.link/br7xv7" target="_blank" rel="noreferrer noopener">
        <FontAwesomeIcon icon={['fab', 'whatsapp']} />
      </a>
    </div>
  )
}

export default Button
