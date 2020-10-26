import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo/logo.svg';

const TopNav = () => {
  return (
    <nav className="top-nav">
      <ul>
        {/* LOGO */}
        <li>
          <Logo />
        </li>
        {/* MENU HAMBURGER */}
        <li>
          <span className="material-icons">menu</span>
        </li>

        {/* LANGUAGE SELECTION */}
        <li>
          EN <span className="material-icons">expand_more</span>
        </li>

        {/* PAGES */}
        <li>Destinations</li>
        <li>Specials</li>
        <li>Signature Trips</li>
        <li>Book now</li>
        <li>About</li>

        {/* SOCIAL MEDIA ICONS */}
        <li>
          <span className="material-icons">facebook</span>
        </li>
        <li>
          <span className="material-icons">whatshot</span>
        </li>
        <li>
          <span className="material-icons">sports_baseball</span>
        </li>
        <li>
          <span className="material-icons">search</span>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
