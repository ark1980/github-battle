import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <ul className="nav">
        <li>
          <NavLink exact activeClassName='active' to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/battle" activeClassName='active'>Battle</NavLink>
        </li>
        <li>
          <NavLink to="/popular" activeClassName='active'>Popular</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav;