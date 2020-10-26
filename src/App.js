import React, { Fragment } from 'react';

import img1 from './assets/imgs/pexels-scott-webb-29049.jpg';

// COMPONENTS
import TopNav from './components/navigation/topNav';

// AFRICA MAP
import { ReactComponent as AfricaMap } from './assets/imgs/africa-map.svg';

import './styles/main.scss';

const App = () => {
  return (
    <div>
      <TopNav />

      <div className="banner">
        {/* ADD VIDEO PLAYER HERE */}
        <h1>Africa</h1>
      </div>

      <div className="info">
        <div className="twins">
          <h3 className="info__title">
            Africa is not a Destination. It's an Adventure set in Stunning
            Scenery.
          </h3>
          <h5 className="info__sub-title">
            Travel to Africa to experience the majesty of nature
          </h5>

          <p className="info__text">
            When it comes to incredible scenery, Africa is right up there with
            the best. Boasting vast savannas, stunning beaches and dramatic
            mountains, this continent has it all. Throw in epic canyons, sugar
            plantations and extinct volcanoes, and you've got endless
            opportunities to explore nature at its finest
          </p>
          <p className="info__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rem
            quas soluta dicta excepturi tempora nulla doloribus nemo quo.
          </p>
        </div>
        <div>
          <AfricaMap />
          <h4 className="info__quick-facts">
            Africa, <br /> the quick facts
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

          <button className="info__btn">More Facts On Africa</button>
        </div>
      </div>

      {/* RECOMMENDATION */}
      <div className="rec">
        <div className="twins">
          <div className="red__img"></div>
          <div className="rec__info">
            <h3 className="rec__title">Visit Reykjavik</h3>
            <p className="rec__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              deleniti asperiores nihil minus alias neque illum, ducimus
              consequuntur ea quo eligendi, odit qui ipsam corporis aperiam
              tempore nemo doloribus ad!
            </p>
            <p className="rec__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              deleniti asperiores nihil minus alias neque illum, ducimus
              consequuntur ea quo eligendi, odit qui ipsam corporis aperiam
              tempore nemo doloribus ad! eligendi, odit qui ipsam corporis
              aperiam tempore nemo doloribus ad!
            </p>
            <p className="rec__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              deleniti asperiores nihil minus alias neque illum, ducimus
              consequuntur ea quo eligendi, odit qui ipsam corporis aperiam
              tempore nemo doloribus ad! deleniti asperiores nihil minus alias
              neque illum, ducimus consequuntur ea quo eligendi, odit qui ipsam
              corporis aperiam tempore nemo doloribus ad!
            </p>
          </div>
        </div>
      </div>

      {/* WELCOME */}
      <div className="welcome">
        <h3 className="welcome__title">
          Enjoy and Welcome to the World of Africa!
        </h3>

        <p className="welcome__text">
          Africa is a country of sharp contrasts. A place where fire and ice
          co-exist. Where dark winters are offset by the summer's midnight sun.
          A country where insular existence has spurred a rich and vibrant
          culture
        </p>
      </div>
    </div>
  );
};

export default App;
