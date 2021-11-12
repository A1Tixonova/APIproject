import React from 'react';
import Quotes from '../../apiComponents/randomQuote/Quotes';
import './bgpages.css';

const ContentPage1 = () => {
  return (
    <div className={'main-background'}>
      <div className={'text-content'}>
        <Quotes />
      </div>
    </div>
  );
};

export default ContentPage1;
