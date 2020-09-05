import React from 'react';
import './App.css';
import Navigation from './components/Navigation.js';
import TopNavigation from './components/TopNavigation.js';
import { Container } from '@material-ui/core';
import FarmGrid from './components/FarmGrid';
import {Route,Switch} from 'react-router-dom';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <div className="App">
      <TopNavigation/>
      <Container>
        <Container >
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/farms' component={FarmGrid}/>
          <Route exact path='/profile' component={ProfilePage}/>
        </Container>
      </Container>
        &nbsp;
      <Navigation/>
      
      
      
    </div>
  );
}

export default App;
