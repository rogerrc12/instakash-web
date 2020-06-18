import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

import classes from './SocialMedia.module.scss';

const SocialMedia = () => {
  return (
    <div className={classes.SocialMedia}>
      <h4>Síguenos</h4>
      <FontAwesomeIcon icon={['fab', 'facebook-f']} />
      <FontAwesomeIcon icon={['fab', 'instagram']} />
    </div>
  )
}

export default SocialMedia
