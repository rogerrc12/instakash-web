import React, { useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Logo from '../../UI/Logo';
import Navigation from '../../Navigation';
import Mobile from "../../Navigation/Mobile";

import classes from './Header.module.scss';
import Hamburger from "../../Navigation/Hamburger";

const Header = ({ siteTitle, location }) => {
  const [open, setOpen] = useState(false);

  const classList = [classes.Header];

  if (location === "/") {
    classList.push(classes.Transparent);
  }

  const openMobile = () => setOpen(true);
  const closeMobile = () => setOpen(false);
  
  return (
    <header className={classList.join(' ')}>
      <div className="container">
        <div className={classes.HeaderWrapper}>
          <Link to="/">
            <Logo siteTitle={siteTitle} />
          </Link>
          <Navigation />
          <Hamburger clicked={openMobile} />
          <Mobile show={open} close={closeMobile} />
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
