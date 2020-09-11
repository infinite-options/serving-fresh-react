import React from 'react';

import './App.css';

import {Route,Switch} from 'react-router-dom';
import LayoutNav from './components/LayoutNav';
import FarmGrid from './components/FarmGrid';
import Profile from './components/Profile';
import Login from './components/Login';


function App() {
  return (
    
    <div className="App" >
      <LayoutNav>
        <Switch>
          <div >
            <Route exact path="/" component={ Login } />
            <Route exact path='/farms' component={ FarmGrid }/>
            <Route exact path='/profile' component={ Profile }/>
          </div>
        </Switch>
      </LayoutNav>
    </div>
    
  );
}

export default App;
