import React, { useState, useEffect, useRef } from 'react';
import gsap from './gsapInit';

// Components
import Nav from './components/navigation/nav';

// Africa Map
import { ReactComponent as AfricaMap } from './assets/imgs/south-africa.svg';

import './styles/main.scss';

const App = () => {
  // Animating Flag - is out app animating
  const [isAnimating, setIsAnimating] = useState(false);

  // Keep track of slide position
  const [slidePosition, setSlidePosition] = useState(0);

  // Height of the window
  const pageHeight = window.innerHeight;

  let aniSlideCT = useRef([]);
  let slide1Banner = useRef(null);
  let slide2Info1 = useRef(null);
  let slide3Info2 = useRef(null);
  let slide4Welcome = useRef(null);
  let slide5Rec = useRef(null);

  const slides = [
    slide1Banner,
    slide2Info1,
    slide3Info2,
    slide4Welcome,
    slide5Rec,
  ];

  // let aniCurrentSlide = useRef()

  useEffect(() => {
    // mousewheel DOMMouseScroll
    // document.addEventListener('mousewheel', handleOnMouseWheel);

    // Setup isScrolling variable
    let isScrolling;

    // Listen for scroll events
    window.addEventListener(
      // 'scroll',
      'mousewheel',
      (event) => {
        // Clear our timeout throughout the scroll
        window.clearTimeout(isScrolling);
        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(() => {
          // Run the callback
          console.log('Scrolling has stopped.', event);
          handleOnMouseWheel(event);
        }, 1000);
      },
      false
    );
  });

  const handleOnMouseWheel = (event) => {
    // Normalize event wheel delta
    var delta = event.wheelDelta / 30 || -event.detail;

    // If the user scrolled up, it goes to previous slide, otherwise - to next slide
    if (delta < -1) {
      // Go to next slide
      handleGoToNextSlide();
    } else if (delta > 1) {
      // Go to previous slide
      console.log('Go to previous slide');
    }
  };

  //  If there's a next slide, slide to it
  const handleGoToNextSlide = () => {
    const pos = slidePosition + 1;
    if (slides[pos] === undefined) return;

    // Increment slide position by 1
    // setSlidePosition(pos);
    // handleGoToSlide(slides[pos]);
  };

  // Actual transition between slides
  const handleGoToSlide = (slide) => {
    // If the slides are not changing and there's such a slide
    if (!isAnimating && slide.current) {
      // Increment slide position by 1

      console.log(slide, '============= ANIMATING');

      // Setting animating flag to true
      setIsAnimating(true);

      gsap.to(aniSlideCT.current, {
        duration: 1,
        scrollTo: { y: slide.current.offsetTop - 200 },
        onComplete: onSlideChangeEnd,
        onCompleteScope: this,
      });
    }
  };

  /*
   * Once the sliding is finished, we need to restore "isAnimating" flag.
   * You can also do other things in this function, such as changing page title
   */
  const onSlideChangeEnd = () => setIsAnimating(false);

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
      <div ref={aniSlideCT} className="slide-container">
        <div ref={slide1Banner} className="banner">
          {/* ADD VIDEO PLAYER HERE */}
          <h1 className="banner__title">South Africa</h1>
        </div>

        <div ref={slide2Info1} className="info">
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
        <div ref={slide3Info2} className="rec">
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
        <div ref={slide4Welcome} className="welcome">
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
        <div ref={slide5Rec} className="rec">
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
