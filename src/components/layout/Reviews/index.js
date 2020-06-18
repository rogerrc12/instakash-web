import React from 'react';
import { useFetch } from '../../../hooks';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Review from './Review';

import classes from './Reviews.module.scss';

const Reviews = () => {
  const { response: userReviews } = useFetch('https://cors-anywhere.herokuapp.com/https://app.instakash.net/home/comments', 
    { headers: { 'Content-Type':'application/json' } }, "post");

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1140, settings: { slidesToShow: 1 } }
    ]
  }

  const reviersList = userReviews && userReviews.map(user => (
    <Review key={user.Name} image={user.Image} name={user.Name} profession={user.Profession}>
     {user.Description}
    </Review>
  ))

  return (
    <Slider {...settings} className={classes.Reviews}>
      {reviersList}
    </Slider>
  )
}

const PrevArrow = props => <div className={classes.Arrow}> <FontAwesomeIcon onClick={props.onClick} icon={['fas', 'arrow-left']} /> </div>;
const NextArrow = props => <div className={classes.Arrow}> <FontAwesomeIcon onClick={props.onClick} icon={['fas', 'arrow-right']} /> </div>;

export default Reviews
