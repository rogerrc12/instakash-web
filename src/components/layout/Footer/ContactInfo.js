import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Schedule from '../../UI/Schedule';

import classes from './ContactInfo.module.scss';

const ContactInfo = () => {
  return (
    <div className={classes.ContactInfo}>
      <h4>Información</h4>
      <ul>
        <li className={classes.Horario}>
          <FontAwesomeIcon icon={['fas', 'calendar-alt']} />
          <Schedule />
        </li>
        <li>
          <FontAwesomeIcon icon={['fas', 'phone-alt']} /> <span>+51 929 324 006</span>
        </li>
        <li>
          <FontAwesomeIcon icon={['fas', 'envelope-open']} /> <a href="mailto:contacto@instakash.net">contacto@instakash.net</a>
        </li>
        <li>
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} /> <span>Av. jercito 749, Miraflores <br /> Lima, Perú</span>
        </li>
      </ul>
    </div>
  )
}

export default ContactInfo
