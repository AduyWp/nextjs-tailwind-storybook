// pages/storybook.js
import React from 'react';
import Iframe from 'react-iframe';

const Storybook = () => {
  return (
    <div>
      <Iframe
        url="http://localhost:6006/"
        width="100%"
        height="800px"
        id="storybook-iframe"
        display="initial"
        position="relative"
      />
    </div>
  );
};

export default Storybook;
