import React from 'react';
import SpotifyTemplate from '../../apiComponents/spotifyApi/SpotifyTemplate';
import './bgpages.css';

const ContentPage2 = () => {
  return (
    <div className={'main-background'}>
      <div className={'text-content'}>
        <SpotifyTemplate />
      </div>
    </div>
  );
};

export default ContentPage2;
