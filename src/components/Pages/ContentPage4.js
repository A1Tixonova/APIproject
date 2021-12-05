import React from 'react';
import ToDoList from '../../actions/ToDoList';
import './bgpages.css';

const ContentPage4 = () => {
  return (
    <div className={'main-background'}>
      <div className={'text-content'}>
        <h1>ContentPage4</h1>
        <ToDoList />
      </div>
    </div>
  );
};

export default ContentPage4;
