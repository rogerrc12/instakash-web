import React from "react";
import PropTypes from "prop-types";
import "@fortawesome/fontawesome-free/css/all.css";

import classes from "./Badge.module.scss";

const Badge = (props) => {
  const classList = [classes.Badge];

  if (props.transparent) {
    classList.push(classes.Transparent);
  }

  return (
    <div className={`${classList.join(" ")} ${props.className}`}>
      <span className={props.icon + " " + classes.Icon} />
      {props.children}
    </div>
  );
};

Badge.propTypes = {
  icon: PropTypes.string,
};

export default Badge;
