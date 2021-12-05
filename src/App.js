import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Header from './bsStyle/Header';
import Menu from './bsStyle/Menu';
import TextTest from './bsStyle/TextTest';
import WelcomePage from './components/Pages/WelcomePage';

let rootStyle = {
  height: '100%',
  minHeight: '100vh',
  backgroundColor: 'rgba(42, 43, 50, 1)',
};

const store = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <div style={rootStyle}>
        <Header />
        <Menu />
      </div>
    </Provider>
  );
};

export default App;
