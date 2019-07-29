import React from 'react';
import './App.css';
import { Link, NavLink } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Home from '../src/components/Home';

function App() {
  return (
    <div className="App">
     <Switch>
     <Route exact path='/' component={Home} />
     </Switch>
    </div>
  );
}

export default App;
