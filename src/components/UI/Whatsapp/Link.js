import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './Whatsapp.module.scss';

const WhatsappLink = (props) => {
  return (
    <div className={classes.WhatsappLink + ' ' + props.className}>
      <a href="https://wa.link/br7xv7" target="_blank" rel="noreferrer noopener">
        <FontAwesomeIcon icon={['fab', 'whatsapp']} /> 929 324 006
      </a>
    </div>
  )
}

export default WhatsappLink
