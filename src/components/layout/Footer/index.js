import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby'
import Logo from '../../UI/Logo';
import Navigation from './Navigation';
import ContactInfo from './ContactInfo';
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
          <ContactInfo />
          <SocialMedia />
          <Newsletter />
        </div>
      </div>
      <p className={classes.Copy}>2020 &copy; Todos los derechos reservados. <Link to="/">Instakash</Link></p>
    </footer>
  )
}

export default Footer
