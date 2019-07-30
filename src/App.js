import React from 'react';
import './App.css';
import { Link, NavLink } from 'react-router-dom';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../src/components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Switch>
     <Route exact path='/' component={Home} />
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
