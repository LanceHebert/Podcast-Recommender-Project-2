import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const CarouselContainer = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel>
      <Carousel.Item interval={6000} onSelect={handleSelect}>
        <Link to={`/searchlist/${"4rOoJ6Egrf8K2IrywzwOMk"}`}>
          <img
            className="carousel2"
            src="https://i.scdn.co/image/9af79fd06e34dea3cd27c4e1cd6ec7343ce20af4"
            alt="First slide"
          />
        </Link>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <Link to={`/searchlist/${"7IWzayPhHif6GhgtTQdB84"}`}>
          <img
            className="carousel2"
            src="https://i.scdn.co/image/96361e71b52a76129001c8c039c5232d8ca7d202"
            alt="Second slide"
          />
        </Link>
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <Link to={`/searchlist/${"1Zw2DKjelPnuEYpydFlhgN"}`}>
          <img
            className="carousel2"
            src="https://i.scdn.co/image/ab6765630000ba8a836f01155730dc56f21b4e42"
            alt="Third slide"
          />
        </Link>
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <Link to={`/searchlist/${"1cpyLfDHP1cNnyOb478qrt"}`}>
          <img
            className="carousel2"
            src="https://i.scdn.co/image/e4433d4e08812ca41097d3b96da95fde5acc0544"
            alt="First slide"
          />
        </Link>
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <Link to={`/searchlist/${"2X40qLyoj1wQ2qE5FVpA7x"}`}>
          <img
            className="carousel2"
            src="https://i.scdn.co/image/ab6765630000ba8a79191bf8da1c999a0801d231"
            alt="First slide"
          />
        </Link>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;
