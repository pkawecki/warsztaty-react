import React from 'react';
import PropTypes from 'prop-types';

const MainLayout = (props) => {
  return <div>{props.children}</div>;
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
