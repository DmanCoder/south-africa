import React, { useState, useEffect, useRef } from 'react';
import gsap from './gsapInit';

// Components
import Nav from './components/navigation/nav';

// Animations
import scrollStop from './animations/scrollStop';
import slideAnimations from './animations/slideAnimations';

// Africa Map
import { ReactComponent as AfricaMap } from './assets/imgs/south-africa.svg';

import './styles/main.scss';
import isEmptyVAL from './utils/isEmpty';

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
    { el: slideBanner, offset: 0, delay: 0 },
    { el: slideInfo, offset: 200, delay: 0.8 },
    { el: slideRec1, offset: 200, delay: 0 },
    { el: slideWelcome, offset: 0, delay: 0 },
    { el: slideRec2, offset: 180, delay: 0 },
  ];

  // Animation state
  let isAnimating = false;
  let slideIndex = 0;

  useEffect(() => {
    // `scrollStop` runs once users have stopped scrolling - 500ms after
    scrollStop((event) => {
      if (!isAnimating) {
        handleOnMouseWheel(event);
      }
    });
  });

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
    const pos = slideIndex + 1;
    if (slides[pos]) {
      slideIndex++;
      slideAnimations(slideIndex);
      handleGoToSlide(slides[slideIndex]);
    }
  };

  const handleGoToPrevSlide = () => {
    // If there's a next slide, slide to it
    const pos = slideIndex - 1;
    console.log('Preve', slideIndex, pos);
    if (slides[pos]) {
      slideIndex--;

      const navigationTL = gsap.timeline();
      const sideNavigationTL = gsap.timeline();

      switch (slideIndex) {
        case 0:
          navigationTL
            .to('.nav__ani', { duration: 0.8, opacity: 0, y: -300 })
            .to('.nav__ani', {
              delay: 0.35,
              duration: 0.8,
              y: 0,
              opacity: 1,
              color: '#ffffff',
              fill: '#ffffff',
              stroke: '#ffffff',
            });

          // Side navigation
          sideNavigationTL
            .to(
              ['.nav-side__title', '.banner-text__btn-back'],
              {
                css: { opacity: 0, x: 20 },
              },
              'start-nav'
            )
            .to('.slide-container', { css: { width: '75%' } }, 'start-nav')
            .to('.nav-side', { css: { width: '25%' } }, 'start-nav')
            .to('.language', { opacity: 1, x: '-20%' }, 'start-nav')
            .to(
              [
                '.banner-text__title',
                '.banner-text__msg',
                '.banner-text__btn-start',
              ],
              { delay: 1, autoAlpha: 1 }
            )
            .to('.banner-layer-one', {
              css: { backgroundColor: 'hsla(0, 100%, 100%, 0.5)' },
            })
            .to(['.banner-layer-two', '.banner-layer-one'], {
              delay: -1.5,
              duration: 1,
              css: { width: '0%' },
              ease: 'sine.inOut',
              stagger: { amount: 0.3 },
            })
            .to('.banner__image-holder', {
              duration: 1.5,
              delay: -1,
              css: { scale: 1 },
            });
          break;
        default:
          break;
      }
      handleGoToSlide(slides[slideIndex]);
    }
  };

  // Actual transition between slides
  const handleGoToSlide = (slide) => {
    //If the slides are not changing and there's such a slide
    if (!isAnimating && !isEmptyVAL(slide)) {
      isAnimating = true;

      // Sliding to current slide
      gsap.to(slideCT.current, {
        delay: slide.delay,
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
          <div className="banner-text__btn-start" onClick={handleGoToNextSlide}>
            <span className="material-icons">add_circle</span>
            <span>Read Article</span>
          </div>

          <div className="banner-text__btn-back" onClick={handleGoToPrevSlide}>
            <span className="material-icons">arrow_back</span>
            <span>Previous</span>
          </div>
        </button>
      </div>
      <div ref={slideCT} className="slide-container">
        <div ref={slideBanner} className="banner">
          <div className="banner__image-holder"></div>
          <div className="banner-layer-one"></div>
          <div className="banner-layer-two"></div>
          {/* ADD VIDEO PLAYER HERE */}
          <h1 className="banner__title">South Africa</h1>
        </div>

        <div ref={slideInfo} className="info">
          <div className="twins">
            <div className="twins__one info-parent-stagger">
              <h3 className="info__title info-child-stagger">
                South Africa is not a Destination. It's an Adventure set in
                Stunning Scenery.
              </h3>
              <h5 className="info__sub-title info-child-stagger">
                Travel to South Africa to experience the majesty of nature
              </h5>

              <p className="info__text info-child-stagger">
                When it comes to incredible scenery, South Africa is right up
                there with the best. Boasting vast savannas, stunning beaches
                and dramatic mountains, this continent has it all. Quas soluta
                dicta excepturi.
              </p>
              <p className="info__text info-child-stagger">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                rem quas soluta dicta excepturi tempora nulla doloribus nemo
              </p>
            </div>

            <div className="twins__two info-parent-stagger">
              <div className="info-child-stagger">
                <AfricaMap />
              </div>
              <h4 className="info__quick-facts info-child-stagger">
                South Africa, <br /> the quick facts
              </h4>

              <div className="info-child-stagger">
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
              </div>

              <button className="info__btn info-child-stagger">
                More Facts On South Africa
              </button>
            </div>
          </div>
        </div>

        {/* RECOMMENDATION */}
        <div ref={slideRec1} className="rec">
          <div className="twins">
            <div className="twins__one rec__img-container rec-parent-stagger">
              <div className="rec__image-holder">
                <div className="rec__img-reveal"></div>
              </div>
            </div>

            <div className="twins__two rec__info rec-parent-stagger">
              <h3 className="rec__title rec-child-stagger">
                Visit Cape Of Hope
              </h3>
              <p className="rec__text rec-child-stagger">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati deleniti asperiores nihil minus alias neque illum,
                ducimus consequuntur ea quo eligendi, odit qui ipsam corporis
                aperiam tempore nemo doloribus ad!
              </p>
              <p className="rec__text rec-child-stagger">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati deleniti asperiores nihil minus alias neque illum,
                ducimus consequuntur ea quo eligendi, odit qui ipsam corporis
                aperiam tempore nemo doloribus ad! eligendi.
              </p>
              <p className="rec__text rec-child-stagger">
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
          <h3 className="welcome__title welcome-child-stagger">
            Enjoy and Welcome to the World of South Africa!
          </h3>

          <p className="welcome__text welcome-child-stagger">
            South Africa is a country of sharp contrasts. A place where fire and
            ice co-exist. Where dark winters are offset by the summer's midnight
            sun. A country where insular existence has spurred a rich and
            vibrant culture
          </p>
        </div>

        {/* RECOMMENDATION */}
        <div ref={slideRec2} className="rec2 margin-b">
          <div className="twins">
            <div className="twins__one rec__info rec2-parent-stagger">
              <h3 className="rec2__title rec2-child-stagger">
                Experience The Safari
              </h3>
              <p className="rec2__text rec2-child-stagger">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati deleniti asperiores nihil minus alias neque illum,
                ducimus consequuntur ea quo eligendi.
              </p>
              <p className="rec2__text rec2-child-stagger">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati deleniti asperiores nihil minus alias neque illum,
                ducimus consequuntur ea quo eligendi, odit qui ipsam corporis
                aperiam tempore nemo doloribus ad! eligendi.
              </p>

              <p className="rec2__text rec2-child-stagger">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati deleniti asperiores nihil minus alias neque illum,
                ducimus consequuntur ea quo eligendi, odit qui ipsam corporis
                aperiam tempore nemo doloribus ad!
              </p>
            </div>
            {/* <div className="twins__two rec__img2"></div>
             */}
            <div className="twins__two rec__img-container rec2-parent-stagger">
              <div className="rec2__image-holder2">
                <div className="rec2__img-reveal"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
