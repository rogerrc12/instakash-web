import React from "react";
import PropTypes from "prop-types";
import "@fortawesome/fontawesome-free/css/all.css";

import classes from "./Review.module.scss";

const Review = (props) => {
  return (
    <div className={classes.Review}>
      <div className={classes.User}>
        <img src={"data:image/png;base64," + props.image} alt={props.name} />
        <p>
          <span className={classes.Name}>{props.name}</span>
          {props.profession}
        </p>
      </div>
      <div className={classes.Stars}>
        <span className="fas fa-star" />
        <span className="fas fa-star" />
        <span className="fas fa-star" />
        <span className="fas fa-star" />
        <span className="fas fa-star" />
      </div>
      <p>{props.children}</p>
    </div>
  );
};

Review.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Review;
