import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

function Navbar() {
  const router = useRouter();
  return (
    <nav className="bg-x-mirage p-4 flex items-center justify-between md:fixed md:h-5/6 md:z-1 md:top-0 md:left-0 md:overflow-x-hidden md:w-14 md:flex-col md:ml-5 md:mt-5 md:rounded-xl">
      <div className="logo mt-1">
        <Link href="/">
          <a>
            <img src="/assets/logo.svg" alt="" className="w-10 md:m-auto" />
          </a>
        </Link>
      </div>
      <div className="tabs flex justify-evenly w-4/6 md:flex-col md:h-4/5 md:w-full md:justify-start">
        <Link href="/">
          <a className={router.pathname == '/' ? 'active' : ''}>
            <img
              src="/assets/icon-nav-home.svg"
              alt=""
              className="w-6 md:w-4 md:m-auto md:mb-6"
            />
          </a>
        </Link>
        <Link href="/movies">
          <a className={router.pathname == '/movies' ? 'active' : ''}>
            <img
              src="/assets/icon-nav-movies.svg"
              alt=""
              className="w-6 md:w-4 md:m-auto md:mb-6"
            />
          </a>
        </Link>
        <Link href="/tvshows">
          <a className={router.pathname == '/tvshows' ? 'active' : ''}>
            <img
              src="/assets/icon-nav-tv-series.svg"
              alt=""
              className="w-6 md:w-4 md:m-auto md:mb-6"
            />
          </a>
        </Link>
        <Link href="/bookmarks">
          <a className={router.pathname == '/bookmarks' ? 'active' : ''}>
            <img
              src="/assets/icon-nav-bookmark.svg"
              alt=""
              className="w-6 md:w-4 md:m-auto md:mb-6"
            />
          </a>
        </Link>
      </div>
      <div className="profile">
        <img
          src="/assets/image-avatar.png"
          alt="profile avatar"
          className="w-8 cursor-pointer"
        />
      </div>
    </nav>
  );
}

export default Navbar;
