import React from 'react';
import CarouselComp from './Carousel';

const About = props => {
  return (
    <div>
      <div className="heading-container">
        <h1>About</h1>
      </div>
      <div className="p-container">
        <p class="lead about-para">
          Welcome to Pot Plants. Where we sell house plants.
          <br />
          Browse our shop to find the perfect match for your home.
        </p>
      </div>
      <CarouselComp />
    </div>
  );
};

export default About;
