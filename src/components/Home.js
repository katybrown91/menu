import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './Menu';

class Home extends React.Component{
  render(){
    return(
<div>
  <div className='title'>
  <h1>Cafe</h1>
  </div>
  <div>
       <nav><Link to= '/menu'>Menu</Link></nav>
     </div>
</div>
    )
  }
}

export default Home