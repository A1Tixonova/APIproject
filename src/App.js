import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from 'react-router-dom';

import Header from './bsStyle/Header';
import Menu from './bsStyle/Menu';
import TextTest from './bsStyle/TextTest';
import WelcomePage from './components/Pages/WelcomePage';

let rootStyle = {
  height: '100%',
  minHeight: '100vh',
  backgroundColor: 'rgba(42, 43, 50, 1)',
};

const App = () => {
  return (
    <div style={rootStyle}>
      <Header />
      <Menu />
    </div>
  );
};

export default App;
