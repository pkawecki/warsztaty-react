import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import PageNav from '../PageNav/PageNav';
import Container from '@material-ui/core/Container';

const MainLayout = (props) => {
  return (
    <React.Fragment>
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <PageNav />
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
      <Container maxWidth="lg">{props.children}</Container>
    </React.Fragment>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
