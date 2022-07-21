import React from "react";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="./images/slider-badging.jpg" alt="slider 1" />
      </Wrap>
      <Wrap>
        <img src="./images/slider-thor.jpg" alt="slider 1" />
      </Wrap>
      <Wrap>
        <img src="./images/slider-badag.jpg" alt="slider 1" />
      </Wrap>

      <Wrap>
        <img src="./images/slider-scale.jpg" alt="slider 1" />
      </Wrap>
      <Wrap>
        <img src="./images/slider-scales.jpg" alt="slider 1" />
      </Wrap>
    </Carousel>
  );
};

export default ImageSlider;

const Carousel = styled(Slider)`
  padding-top: 1.5rem;

  ul li button {
    &::before {
      font-size: 0.7rem;
    }
  }

  .slick-dots li.slick-active button:before {
    opacity: 0.8;
    color: #f9f9f9;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 2;
  }
`;
const Wrap = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.68) 0px 26px 30px -10px,
      rgba(0, 0, 0, 0.72) 0px 16px 10px -10px;
    border-radius: 0.4rem;
    border: 4px solid transparent;
    transition: all 0.4s linear;

    &:hover {
      border-color: rgba(249, 249, 249, 0.8);
    }
  }
`;
