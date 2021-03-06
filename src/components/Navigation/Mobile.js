import React from 'react';
import NavItem from './NavItem';
import '@fortawesome/fontawesome-free/css/all.css';
import Backdrop from '../UI/Backdrop/Backdrop';

import classes from './Mobile.module.scss';

const Mobile = (props) => {
  const classList = [classes.Mobile];

  if (props.show) {
    classList.push(classes.Opened)
  }

  return (
    <>
      <nav className={classList.join(' ')}>
        <span className={classes.CloseBtn} onClick={props.close} onKeyDown={props.close} role="button" tabIndex={0}>
          <span className="fas fa-times" />
        </span>
        <ul>
          <NavItem link="/nosotros" active={classes.ActiveLink}>Nosotros</NavItem>
          <NavItem link="/contacto" active={classes.ActiveLink}>Contacto</NavItem>
          <NavItem link="/ayuda" active={classes.ActiveLink}>Ayuda</NavItem>
          <li className={classes.SignIn}>
            <a href="https://app.instakash.net" className="btn">Iniciar Sesión</a>
          </li>
        </ul>
      </nav>
      <Backdrop show={props.show} close={props.close} />
    </>
  )
}

export default Mobile
