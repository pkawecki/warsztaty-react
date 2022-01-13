import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import styles from './PageNav.module.scss';

const PageNav = () => {
  return (
    <nav>
      <Button
        className={styles.link}
        component={NavLink}
        exact
        to={`${process.env.PUBLIC_URL}/`}
        activeClassName="active"
      >
        Home
      </Button>
      <Button
        className={styles.link}
        component={NavLink}
        to={`${process.env.PUBLIC_URL}/login`}
        activeClassName="active"
      >
        Login
      </Button>
      {/* Tables */}
      <Button
        className={styles.link}
        component={NavLink}
        exact
        to={`${process.env.PUBLIC_URL}/tables`}
        activeClassName="active"
      >
        Tables
      </Button>
      {/* Waiter */}
      <Button
        className={styles.link}
        component={NavLink}
        exact
        to={`${process.env.PUBLIC_URL}/waiter`}
        activeClassName="active"
      >
        Waiter
      </Button>
      {/* Kitchen */}
      <Button
        className={styles.link}
        component={NavLink}
        exact
        to={`${process.env.PUBLIC_URL}/kitchen`}
        activeClassName="active"
      >
        Kitchen
      </Button>
    </nav>
  );
};

PageNav.propTypes = {
  children: PropTypes.node,
};

export default PageNav;
