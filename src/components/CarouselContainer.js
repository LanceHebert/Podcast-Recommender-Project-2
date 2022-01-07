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
          {/* <h3>The Joe Rogan Experience</h3>
          <p>
            The official podcast of comedian Joe Rogan. Follow The Joe Rogan
            Clips show page for some of the best moments from the episodes.
          </p> */}
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
          {/* <h3>Spittin Chiclets</h3>
          <p>
            "Former NHL vets Ryan Whitney, Paul Bissonnette, Barstool Sports
            writer Rear Admiral and Producer Mike Grinnell bring their outspoken
            and irreverent opinions to the masses. Focusing on the NHL but also
            touching on pop culture and everything else under the sun. New
            episode every Tuesday.."
          </p> */}
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
          {/* <h3>The Jordan B. Peterson Podcast</h3>
          <p>
            Join intellectual phenomenon Dr. Jordan Peterson and his daughter
            Mikhaila for enlightening discourse that will change the way you
            think. This podcast breaks down the dichotomy of life through
            interviews and lectures that explain how individuals and culture are
            shaped by values, music, religion, and beyond. It will give you a
            new perspective and a modern understanding of your creativity,
            competence, and personality."
          </p> */}
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
          {/* <h3>Morbid: A True Crime Podcast</h3>
          <p>
            It’s a lighthearted nightmare in here, weirdos! Morbid is a true
            crime, creepy history and all things spooky podcast hosted by an
            autopsy technician and a hairstylist. Join us for a heavy dose of
            research with a dash of comedy thrown in for flavor.
          </p> */}
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
          {/* <h3>Distractible</h3>
          <p>
            The Distractible podcast with Mark Fischbach, Wade Barnes, and Bob
            Muyskens is a space to have thoughtful discussions about funny, out
            there, or otherwise interesting stories from everyday life. Also an
            opportunity for three friends to remind each other they are not as
            smart as they think.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;
