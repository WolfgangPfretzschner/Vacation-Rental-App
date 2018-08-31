import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = (props) => (
  <div className="navbar">
    <NavLink activeClassName="active" to="/notes">Notes </NavLink>
    <NavLink activeClassName="active" to="/properties">Properties </NavLink>
    <NavLink activeClassName="active" to="/properties">About us </NavLink>
    <NavLink activeClassName="active" to="/properties">Profile </NavLink>
    {/* <NavLink activeClassName="active" to="/profiles">Profiles</NavLink> */}
  </div>
)

export default Navbar;