import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const PageNav = (props) => {
  return (
    <nav>
      <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName="active">
        Home
      </NavLink>

      {/* Login */}
      <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName="active">
        Login
      </NavLink>

      {/* Tables */}
      <NavLink
        exact
        to={`${process.env.PUBLIC_URL}/tables`}
        activeClassName="active"
      >
        Tables
      </NavLink>

      {/* Waiter */}
      <NavLink
        exact
        to={`${process.env.PUBLIC_URL}/waiter`}
        activeClassName="active"
      >
        Waiter
      </NavLink>

      {/* Kitchen */}
      <NavLink
        exact
        to={`${process.env.PUBLIC_URL}/kitchen`}
        activeClassName="active"
      >
        Kitchen
      </NavLink>
    </nav>
  );
};

PageNav.propTypes = {
  children: PropTypes.node,
};

export default PageNav;
