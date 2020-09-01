import React from 'react';
import './App.css';
import Navigation from './components/Navigation.js'

import FilterButtons from './components/FilterButtons';
import { Container } from '@material-ui/core';
import ItemGrid from './components/ItemGrid';

function App() {
  return (
    <div className="App">
      
      <Container>
        <FilterButtons/>
        <Container>
          <ItemGrid/>
        </Container>
      </Container>
      <Navigation/>
    </div>
  );
}

export default App;
