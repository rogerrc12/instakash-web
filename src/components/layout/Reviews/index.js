import React from "react"
import { useFetch } from "../../../hooks"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "@fortawesome/fontawesome-free/css/all.css"

import Review from "./Review"

import classes from "./Reviews.module.scss"

const Reviews = () => {
  const { response: userReviews } = useFetch(
    `https://vmi417694.contaboserver.net/api/Landing/ObtenerComentarios`,
    null,
    "get"
  )

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [{ breakpoint: 1140, settings: { slidesToShow: 1 } }],
  }

  const reviersList =
    userReviews &&
    userReviews.map(user => (
      <Review
        key={user.name}
        image={user.image}
        name={user.name}
        profession={user.profession}
      >
        {user.description}
      </Review>
    ))

  return (
    <Slider {...settings} className={classes.Reviews}>
      {reviersList}
    </Slider>
  )
}

const PrevArrow = props => (
  <div className={classes.Arrow}>
    {" "}
    <span
      role="button"
      onClick={props.onClick}
      onKeyPress={props.onClick}
      className="fas arrow-left"
    />{" "}
  </div>
)
const NextArrow = props => (
  <div className={classes.Arrow}>
    {" "}
    <span
      role="button"
      onClick={props.onClick}
      onKeyPress={props.onClick}
      className="fas arrow-right"
    />{" "}
  </div>
)

export default Reviews
