import React from 'react';
import PropTypes from 'prop-types';

import PageNav from '../PageNav/PageNav';

const MainLayout = (props) => {
  return (
    <React.Fragment>
      <PageNav />
      <div>{props.children}</div>
    </React.Fragment>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
