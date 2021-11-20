import React from 'react';
import './bgpages.css';

const ContentPage3 = () => {
  return (
    <div className={'main-background'}>
      <div className={'text-content'}>
        <h1>Some Useful Links!!!</h1>
        <ul className={'links-border'} style={{ textAlign: 'left' }}>
          <li>
            <a href="https://refactoring.guru/ru">Patterns and refactoring</a>
          </li>
          <li>
            <a href="https://github.com/A1Tixonova?tab=repositories">
              My Personal Github
            </a>
          </li>
          <li>
            <a href="https://learn.javascript.ru/">JS guide</a>
          </li>
          <li>
            <a href="">Waiting for link...</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContentPage3;
