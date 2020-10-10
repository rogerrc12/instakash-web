import React from "react"
import "@fortawesome/fontawesome-free/css/all.css"

import classes from "./SocialMedia.module.scss"

const SocialMedia = () => {
  return (
    <div className={classes.SocialMedia}>
      <h4>Síguenos</h4>
      <a
        href="https://www.instagram.com/instakashnet/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className="fab fa-facebook-f" />
      </a>
      <a
        href="https://www.facebook.com/Instakash-103956227716506"
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className="fab fa-instagram" />
      </a>
      <a
        href="https://www.facebook.com/Instakash-103956227716506"
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className="fab fa-linkedin" />
      </a>
    </div>
  )
}

export default SocialMedia
