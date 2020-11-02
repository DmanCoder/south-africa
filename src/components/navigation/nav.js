import React, { Fragment } from 'react';

import { ReactComponent as Logo } from '../../assets/logo/logo.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Ig } from '../../assets/icons/ig.svg';
import { ReactComponent as Search } from '../../assets/icons/search.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';

const Nav = () => {
  return (
    <Fragment>
      <div className="nav-side"></div>
      <nav className="nav">
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
          <li className="language">
            En &nbsp; <span className="material-icons">expand_more</span>
          </li>

          {/* PAGES */}
          <li className="nav__ani">Destinations</li>
          <li className="nav__ani">Specials</li>
          <li className="nav__ani">Signature Trips</li>
          <li className="nav__ani">Book now</li>
          <li className="nav__ani">About</li>

          {/* SOCIAL MEDIA ICONS */}
          <li className="nav__ani">
            <Facebook />
          </li>
          <li className="nav__ani">
            <Ig />
          </li>
          <li className="nav__ani">
            <Twitter />
          </li>
          <li className="nav__ani">
            <Search />
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Nav;
