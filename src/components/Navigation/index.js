import React from 'react';
import NavItem from './NavItem';
import WhatsappLink from '../UI/Whatsapp/Link';

import classes from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={classes.Navigation}>
      <ul>
        <NavItem link="/nosotros">Nosotros</NavItem>
        <NavItem link="/contacto">Contacto</NavItem>
        <NavItem link="/ayuda">Ayuda</NavItem>
      </ul>
      <WhatsappLink />
      <div className={classes.LoginNavigation}>
        <a href="https://app.instakash.net/" className="btn">Iniciar Sesión</a>
        <a href="https://app.instakash.net/Account/Register" className="btn">Registrarme</a>
      </div>
    </nav>
  )
}

export default Navigation
