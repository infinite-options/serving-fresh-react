import React from 'react';
import './App.css';
import Navigation from './components/Navigation.js'

import FilterButtons from './components/FilterButtons';
import { Container } from '@material-ui/core';
import ItemGrid from './components/ItemGrid';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Container>
        <FilterButtons/>
        <Container>
          <ItemGrid/>
        </Container>
      </Container>
      
    </div>
  );
}

export default App;
