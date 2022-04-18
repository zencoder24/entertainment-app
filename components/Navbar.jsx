import React from 'react';
import Logo from '../public/assets/logo.svg';
import Home from '../public/assets/icon-nav-home.svg';
import Movies from '../public/assets/icon-nav-movies.svg';
import Series from '../public/assets/icon-nav-tv-series.svg';
import Bookmarks from '../public/assets/icon-nav-bookmark.svg';
import Image from 'next/image';

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
      <div className="profile flex h-14 w-14 relative">
        <Image
          src={'/../public/assets/image-avatar.png'}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </nav>
  );
}

export default Navbar;
