import React from 'react';
import NavItem from '../../Navigation/NavItem';

import classes from './Navigation.module.scss';

const Legal = () => {
  return (
    <div className={classes.Navigation}>
      <h4>Legal</h4>
      <nav>
        <ul>
          <NavItem link="/politicas-de-privacidad">Políticas de privacidad</NavItem>
          <NavItem link="/terminos-y-condiciones">Términos y condiciones</NavItem>
          <NavItem link="/libro-de-reclamaciones">Libro de reclamaciones</NavItem>
        </ul>
      </nav>
    </div>
  )
}

export default Legal
