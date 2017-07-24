import React from 'react';

import Header from '../Header/Header';
import Button from '../Button/Button';

import css from './App.scss';
import data from '../../../../data/test-results.json';

const App = () => {
  return (
    <div className="app">
      <Header text='Testify' />
      <Button text='Analyse' />
    </div>
  );
}

export default App;
