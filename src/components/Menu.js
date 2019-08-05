import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Home from './Home';

class Menu extends React.Component{
  render(){
    return(
      <div>
        <nav><Link to = '/'>Home</Link></nav>
        <div className="menu-items">
          <h3>Donuts</h3>
          <p><ul>
            <li>Chocolate Chip</li>
            <li>Cookies and Cream</li> 
            <li>Tres Leches</li>
            <li>Raspberry</li>    
            <li>Coconut Cream</li>
            <li>Strawberry</li>
            <li>Guava</li>
            <li>Red Velvet</li></ul></p>

        <h3>Coffee and Tea</h3>
        <p><ul>
          <li>French Vanilla Latte</li>
          <li>Espresso</li>
          <li>Mocha</li>
          <li>Green Tea</li>
          <li>Chai Tea</li></ul></p>
          </div>
      </div>
    )
  }
}

export default Menu