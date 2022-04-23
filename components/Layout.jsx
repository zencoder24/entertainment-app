import React from 'react';
import Navbar from './Navbar';
import Head from 'next/head';


const Layout = ({children}) => {
  return (
    <div className="bg-x-vulcan h-full menu-spacing md:ml-24 md:mt-3">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
