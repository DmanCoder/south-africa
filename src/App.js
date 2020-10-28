import React, { useState, useEffect, useRef } from 'react';
import gsap from './gsapInit';

// Components
import Nav from './components/navigation/nav';

// Africa Map
import { ReactComponent as AfricaMap } from './assets/imgs/south-africa.svg';

import './styles/main.scss';

const App = () => {
  const [isScrollDisabled, setIsScrollDisabled] = useState(false);

  const infoCT = useRef(null);
  // const scrollToRef = (ref) => scroll.scrollTo(ref.current.offsetTop)

  // useEffect(() => {
  //   let lastScrollTop = 0;
  //   // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  //   document.addEventListener(
  //     'scroll',
  //     () => {
  //       // or window.addEventListener("scroll"....
  //       const st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  //       if (st > lastScrollTop) {
  //         // downscroll code

  //         if (!isScrollDisabled) handleScrollMove(lastScrollTop);
  //       } else {
  //         // upscroll code
  //         if (!isScrollDisabled) handleScrollMove(lastScrollTop);
  //       }
  //       lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  //     },
  //     false
  //   );
  // });

  useEffect(() => {
    console.log(window)
    // gsap.to(window, {
    //   duration: 1,
    //   scrollTo: infoCT.current.offsetTop - 200,
    // });

  }, []);

  // const handleScrollMove = (position) => {
  //   document.addEventListener('scroll', function () {
  //     setIsScrollDisabled(true);

  //     setTimeout(() => {
  //       setIsScrollDisabled(false);
  //     }, 2000);
  //   });
  // };

  // useEffect(() => {
  //   console.log(infoCT.current);
  //   console.log(infoCT.current.offsetTop );
  //   // Setup isScrolling variable
  //   let isScrolling;

  //   // Listen for scroll events
  //   window.addEventListener(
  //     'scroll',
  //     (event) => {
  //       // Clear our timeout throughout the scroll
  //       window.clearTimeout(isScrolling);

  //       // Set a timeout to run after scrolling ends
  //       isScrolling = setTimeout(() => {
  //         // Run the callback
  //         console.log('Scrolling has stopped.');
  //       }, 66);
  //     },
  //     false
  //   );
  // });

  return (
    <div>
      <Nav />

      <div className="content">
        <div className="banner">
          {/* ADD VIDEO PLAYER HERE */}
          <p className="banner__msg">Journey of the week</p>
          <h1 className="banner__title">South Africa</h1>
          <button className="banner__btn">
            <span className="material-icons">add_circle</span>
            <span>Read Article</span>
          </button>
        </div>

        <div ref={infoCT} className="info">
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
                and dramatic mountains, this continent has it all. Throw in epic
                canyons, sugar plantations and extinct volcanoes, and you've got
                endless opportunities to explore nature at its finest
              </p>
              <p className="info__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                rem quas soluta dicta excepturi tempora nulla doloribus nemo
                quo.
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
        <div className="rec">
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
                aperiam tempore nemo doloribus ad! eligendi, odit qui ipsam
                corporis aperiam tempore nemo doloribus ad!
              </p>
              <p className="rec__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati deleniti asperiores nihil minus alias neque illum,
                ducimus consequuntur ea quo eligendi, odit qui ipsam corporis
                aperiam tempore nemo doloribus ad! deleniti asperiores nihil
                minus alias neque illum, ducimus consequuntur ea quo eligendi,
                odit qui ipsam corporis aperiam tempore nemo doloribus ad!
              </p>
            </div>
          </div>
        </div>

        {/* WELCOME */}
        <div className="welcome">
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
        <div className="rec">
          <div className="twins">
            <div className="rec__info">
              <h3 className="rec__title">Experience The Safari</h3>
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
                aperiam tempore nemo doloribus ad! eligendi, odit qui ipsam
                corporis aperiam tempore nemo doloribus ad!
              </p>

              <p className="rec__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati deleniti asperiores nihil minus alias neque illum,
                ducimus consequuntur ea quo eligendi, odit qui ipsam corporis
                aperiam tempore nemo doloribus ad! deleniti asperiores nihil
                minus alias neque illum, ducimus consequuntur ea quo eligendi,
                odit qui ipsam corporis aperiam tempore nemo doloribus ad!
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
