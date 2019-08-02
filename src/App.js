import React from 'react';
import './App.css';
import { Link, NavLink } from 'react-router-dom';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../src/components/Home';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Switch>
     <Route exact path='/' component={Home} />
     <Route exact path='/menu' component={Menu} />
     </Switch>
     </BrowserRouter>
  
    </div>
  );
}

export default App;
