import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/'>
          <Redirect to='/home'/>
        </Route>
        <Route exact path='/home' component={Home}/>
      </div>
    </BrowserRouter>
  )
}

export default App
