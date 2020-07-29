import React from 'react';
import NavItem from '../../Navigation/NavItem';

import classes from './Navigation.module.scss';

const Navigation = () => {
  return (
    <div className={classes.Navigation}>
      <h4>Menú</h4>
      <nav>
        <ul>
          <NavItem link="/nosotros">Nosotros</NavItem>
          <NavItem link="/contacto">Contacto</NavItem>
          <NavItem link="/ayuda">Preguntas frecuentes</NavItem>
          <a href="mailto:contacto@instakash.net" className={classes.Email}>Atención al cliente</a>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
