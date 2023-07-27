// pages/_app.js
import '../styles/globals.css';
import React from 'react';
import Header from '@/components/header/Header';

const MyApp = ({ Component, pageProps }) => {

  return (
    <div className="bg-indigo-500 text-indigo-50">
      <Header />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
