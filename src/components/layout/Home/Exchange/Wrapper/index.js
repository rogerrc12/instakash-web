import React from "react";
import Slider from "react-slick";
import Zoom from "react-reveal/Zoom";

import Badge from "../../../../UI/Badge";

import ahorro from "../../../../../assets/images/slider/ahorro.png";
import cajaFuerte from "../../../../../assets/images/slider/caja-fuerte.png";
import tiempo from "../../../../../assets/images/slider/tiempo.png";
import classes from "./Wrapper.module.scss";

const slides = [
  {
    id: 1,
    image: ahorro,
    icon: "fas fa-dollar-sign",
    content: (
      <p>
        Transacciones exitosas realizadas <br /> <span>+2MIL</span>
      </p>
    ),
  },
  {
    id: 2,
    image: cajaFuerte,
    icon: "fas fa-award",
    content: (
      <p>
        Registrados en la Superintendencia de Banca, Seguros y AFP <br />
        <span>Res N° 05939-2019</span>
      </p>
    ),
  },
  {
    id: 3,
    image: tiempo,
    icon: "far fa-clock",
    content: (
      <p>
        Operaciones en menos de
        <br /> <span>20 minutos</span>
      </p>
    ),
  },
];

const ExchangeSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    speed: 2500,
  };

  return (
    <div className={classes.Wrapper}>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className={classes.Slide}>
            <img src={slide.image} alt="" />
            <Badge icon={slide.icon} className={classes.InfoBadge}>
              {slide.content}
            </Badge>
          </div>
        ))}
      </Slider>
      <Zoom delay={300}>
        <div className={classes.Background}></div>
      </Zoom>
    </div>
  );
};

export default ExchangeSlider;
