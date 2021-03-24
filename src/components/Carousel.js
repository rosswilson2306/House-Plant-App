import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import plant1 from '../img/car-plant-1.jpg';
import plant2 from '../img/car-plant-2.jpg';
import plant3 from '../img/car-plant-3.jpg';

const CarouselComp = props => {
  return (
    <Carousel fade className="carousel mb-5">
      <Carousel.Item>
        <img
          className="d-block w-100 plant-img"
          src={plant1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 plant-img"
          src={plant2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 plant-img"
          src={plant3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComp;
