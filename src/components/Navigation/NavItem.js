import React from 'react';
import { Link } from 'gatsby';

import classes from './Navitem.module.scss';

const NavItem = props => {
  return (
    <li className={classes.NavItem}>
      <Link to={props.link} activeClassName={props.active ? props.active : "active"}>{props.children}</Link>
    </li>
  )
}

export default NavItem
