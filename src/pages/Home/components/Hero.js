import React from "react";
import Carousel from "react-bootstrap/Carousel";
import HeroImg from "../assets/img/hero.png";

function Hero() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={HeroImg} alt="Heck of a lot of old school tvs" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={HeroImg} alt="Heck of a lot of old school tvs" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={HeroImg} alt="Heck of a lot of old school tvs" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
