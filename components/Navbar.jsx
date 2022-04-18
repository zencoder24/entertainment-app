import React from 'react';
import Logo from '../public/assets/logo.svg';
import Home from '../public/assets/icon-nav-home.svg';
import Movies from '../public/assets/icon-nav-movies.svg';
import Series from '../public/assets/icon-nav-tv-series.svg';
import Bookmarks from '../public/assets/icon-nav-bookmark.svg';
import Image from 'next/image';
import avatar from '../public/assets/image-avatar.png';

function Navbar() {
  return (
    <nav className="flex">
      <div className="logo">
        <Logo className="w-8" />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <Movies />
      </div>
      <div>
        <Series />
      </div>
      <div>
        <Bookmarks />
      </div>
      <div className="profile flex">
        {/* This is not working */}
        <img src={'/../public/assets/image-avatar.png'} />

        {/* This is the only way I can render it on the page */}
        <Image
          src={'/../public/assets/image-avatar.png'}
          width={35}
          height={35}
        />
      </div>
    </nav>
  );
}

export default Navbar;
