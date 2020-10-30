import React, { useState, useEffect, useRef } from 'react';
import gsap from './gsapInit';

// Components
import Nav from './components/navigation/nav';

// Animations
import scrollStop from './animations/scrollStop';

// Africa Map
import { ReactComponent as AfricaMap } from './assets/imgs/south-africa.svg';

import './styles/main.scss';
import isEmptyVAL from './utils/isEmpty';

const difference = (a, b) => {
  return Math.abs(a - b);
};

const App = () => {
  // Slides
  let slideCT = useRef(null);
  let slideBanner = useRef(null);
  let slideInfo = useRef(null);
  let slideRec1 = useRef(null);
  let slideWelcome = useRef(null);
  let slideRec2 = useRef(null);

  // Slides Array
  const slides = [
    { el: slideBanner, offset: 0 },
    { el: slideInfo, offset: 200 },
    { el: slideRec1, offset: 200 },
    { el: slideWelcome, offset: 0 },
    { el: slideRec2, offset: 180 },
  ];

  // Animation state
  let isAnimating = false;

  // Counter
  let counter = 0;

  useEffect(() => {
    // `scrollStop` runs once users have stopped scrolling - 500ms after
    scrollStop((event) => {
      if (!isAnimating) {
        handleOnMouseWheel(event);
      }
    });
  });

  // Run when `slideIndex` has changed
  // useEffect(() => {}, [animationState.slideIndex]);

  // When user scrolls with the mouse, we have to change slides
  const handleOnMouseWheel = (event) => {
    // Normalize event wheel delta
    const delta = event.wheelDelta / 30 || -event.detail;

    // If the user scrolled up, it goes to previous slide, otherwise - to next slide
    if (delta < -1) {
      // Go to next slide
      handleGoToNextSlide();
    } else if (delta > 1) {
      // Go to previous slide
      handleGoToPrevSlide();
    }

    event.preventDefault(event);
  };

  const handleGoToNextSlide = () => {
    // If there's a next slide, slide to it
    const pos = counter + 1;
    if (slides[pos]) {
      counter++;
      handleGoToSlide(slides[counter]);
    }
  };

  const handleGoToPrevSlide = () => {
    // If there's a next slide, slide to it
    const pos = counter - 1;
    if (slides[pos]) {
      counter--;
      handleGoToSlide(slides[counter]);
    }
  };

  // Actual transition between slides
  const handleGoToSlide = (slide) => {
    //If the slides are not changing and there's such a slide
    if (!isAnimating && !isEmptyVAL(slide)) {
      isAnimating = true;

      // Sliding to current slide
      gsap.to(slideCT.current, {
        duration: 1.5,
        ease: 'power2.inOut',
        scrollTo: { y: slide.el.current.offsetTop - slide.offset },
        onComplete: handleOnSlideChangeEnd,
        onCompleteScope: this,
      });
    }
  };

  const handleOnSlideChangeEnd = () => {
    isAnimating = false;
  };

  return (
    <div>
      <Nav />
      <div className="banner-text">
        <p className="banner-text__msg">Journey of the week</p>
        <h1 className="banner-text__title">South Africa</h1>
        <button className="banner-text__btn">
          <span className="material-icons">add_circle</span>
          <span>Read Article</span>
        </button>
      </div>
      <div ref={slideCT} className="slide-container">
        <div ref={slideBanner} className="banner">
          {/* ADD VIDEO PLAYER HERE */}
          <h1 className="banner__title">South Africa</h1>
        </div>

        <div ref={slideInfo} className="info">
          <div className="twins">
            <div>
              <h3 className="info__title">
                South Africa is not a Destination. It's an Adventure set in
                Stunning Scenery.
              </h3>
              <h5 className="info__sub-title">
                Travel to South Africa to experience the majesty of nature
              </h5>

              <p className="info__text">
                When it comes to incredible scenery, South Africa is right up
                there with the best. Boasting vast savannas, stunning beaches
                and dramatic mountains, this continent has it all. Quas soluta
                dicta excepturi.
              </p>
              <p className="info__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                rem quas soluta dicta excepturi tempora nulla doloribus nemo
              </p>
            </div>

            <div>
              <AfricaMap />
              <h4 className="info__quick-facts">
                South Africa, <br /> the quick facts
              </h4>

              <p className="info__facts">
                <span>Country Size</span>
                <span>103,000 sq,km</span>
              </p>
              <p className="info__facts">
                <span>Population (2015)</span>
                <span>329.100</span>
              </p>
              <p className="info__facts">
                <span>Capital</span>
                <span>Reykjavik</span>
              </p>
              <p className="info__facts">
                <span>Currency</span>
                <span>Icelandic Krona (ISK)</span>
              </p>
              <p className="info__facts">
                <span>GDP 32014 (MISK)</span>
                <span>1.993.336</span>
              </p>

              <button className="info__btn">More Facts On South Africa</button>
            </div>
          </div>
        </div>

        {/* RECOMMENDATION */}
        <div ref={slideRec1} className="rec">
          <div className="twins">
            <div className="rec__img"></div>
            <div className="rec__info">
              <h3 className="rec__title">Visit Cape Of Hope</h3>
              <p className="rec__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati deleniti asperiores nihil minus alias neque illum,
                ducimus consequuntur ea quo eligendi, odit qui ipsam corporis
                aperiam tempore nemo doloribus ad!
              </p>
              <p className="rec__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati deleniti asperiores nihil minus alias neque illum,
                ducimus consequuntur ea quo eligendi, odit qui ipsam corporis
                aperiam tempore nemo doloribus ad! eligendi.
              </p>
              <p className="rec__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati deleniti asperiores nihil minus alias neque illum,
                ducimus consequuntur ea quo eligendi, odit qui ipsam corporis
                aperiam tempore nemo doloribus ad!
              </p>
            </div>
          </div>
        </div>

        {/* WELCOME */}
        <div ref={slideWelcome} className="welcome">
          <h3 className="welcome__title">
            Enjoy and Welcome to the World of South Africa!
          </h3>

          <p className="welcome__text">
            South Africa is a country of sharp contrasts. A place where fire and
            ice co-exist. Where dark winters are offset by the summer's midnight
            sun. A country where insular existence has spurred a rich and
            vibrant culture
          </p>
        </div>

        {/* RECOMMENDATION */}
        <div ref={slideRec2} className="rec margin-b">
          <div className="twins">
            <div className="rec__info">
              <h3 className="rec__title">Experience The Safari</h3>
              <p className="rec__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati deleniti asperiores nihil minus alias neque illum,
                ducimus consequuntur ea quo eligendi.
              </p>
              <p className="rec__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati deleniti asperiores nihil minus alias neque illum,
                ducimus consequuntur ea quo eligendi, odit qui ipsam corporis
                aperiam tempore nemo doloribus ad! eligendi.
              </p>

              <p className="rec__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati deleniti asperiores nihil minus alias neque illum,
                ducimus consequuntur ea quo eligendi, odit qui ipsam corporis
                aperiam tempore nemo doloribus ad!
              </p>
            </div>
            <div className="rec__img2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
