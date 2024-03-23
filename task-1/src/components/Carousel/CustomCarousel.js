import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CustomCarousel.css';


const CustomCarousel = () => {
  return (
    
    <Carousel className="custom-carousel" id="customCarousel">
      <Carousel.Item>
        <img className="d-block w-100" src="https://images.pexels.com/photos/3201922/pexels-photo-3201922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="First slide" />
        <Carousel.Caption className="carousel-caption">
          <h1>Welcome to Our SLFoods</h1>
           </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Second slide" />
        <Carousel.Caption className="carousel-caption">
          <h1>Tasty Foods are Available!</h1>
           </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Third slide" />
        <Carousel.Caption className="carousel-caption">
          <h1>Quality Foods are Available!</h1>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Fourth slide" />
        <Carousel.Caption className="carousel-caption">
          <h1>Lot of variety Foods Are Available!</h1>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Fifth slide" />
        <Carousel.Caption className="carousel-caption">
          <h1>Quality Food Low Cost are Available!</h1>
          </Carousel.Caption>
      </Carousel.Item>
</Carousel>


         );
};

export default CustomCarousel;