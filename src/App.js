import React from 'react';
import './App.css';
import Navigation from './components/Navigation.js';
import TopNavigation from './components/TopNavigation.js';
import FilterButtons from './components/FilterButtons';
import { Container } from '@material-ui/core';
import FarmGrid from './components/FarmGrid';

function App() {
  return (
    <div className="App">
      <TopNavigation/>
      <Container>
        {/* <FilterButtons/> */}
        <Container >
          <FarmGrid/>
        </Container>
      </Container>
        &nbsp;
      <Navigation/>
    </div>
  );
}

export default App;
