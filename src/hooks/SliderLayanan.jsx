import React from "react";
import Slider from "react-slick";

function SliderLayanan({ children }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className="slider-container">
      <Slider {...{... settings}}>{children}</Slider>
    </div>
  );
}

export default SliderLayanan;