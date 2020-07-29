import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby'
import Logo from '../../UI/Logo';
import Navigation from './Navigation';
import Legal from './Legal';
import Schedule from './Schedule';
import SocialMedia from './SocialMedia';
import Newsletter from './Newsletter';

import classes from './Footer.module.scss';

const Footer = ({ siteTitle }) => {
  return (
    <footer className={classes.Footer}>
      <div className="container">
        <Fade delay={400}>
          <Link to="/">
            <Logo siteTitle={siteTitle} />
          </Link>
        </Fade>

        <div className={classes.FooterWrapper}>
          <Navigation />
          <Schedule />
          <Legal />
          <SocialMedia />
          <Newsletter />
        </div>
      </div>
      <div className={classes.CompanyInfo}>
        <p className={classes.Copy}>2020 &copy; Todos los derechos reservados. <Link to="/">Instakash</Link></p>
        <p className={classes.Company}>
          Instakash S.A.C. RUC 20605285105
          <br />
          Registro SBS: 05939-2019
          <br />
          Av. Ejército 749, Miraflores
        </p>
      </div>
    </footer>
  )
}

export default Footer
