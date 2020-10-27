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
            <Facebook />
          </li>
          <li>
            <Ig />
          </li>
          <li>
            <Twitter />
          </li>
          <li>
            <Search />
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Nav;
