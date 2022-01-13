import MainLayout from './components/layout/MainLayout/MainLayout';
import React from 'react';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

import Homepage from './components/views/Homepage/Homepage';
import Kitchen from './components/views/Kitchen/Kitchen';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Booking from './components/common/Booking/Booking';
import Event from './components/common/Event/Event';
import Waiter from './components/views/Waiter/Waiter';
import NewOrder from './components/views/Waiter/NewOrder/NewOrder';
import OrderById from './components/views/Waiter/OrderById/OrderById';
import { StylesProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
    // secondary: {
    //   // This is green.A700 as hex.
    //   main: '#11cb5f',
    // },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <MainLayout>
            <Switch>
              {/* Home */}
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/`}
                component={Homepage}
              />

              {/* Login */}
              <Route
                exact
                path={process.env.PUBLIC_URL + '/login'}
                component={Login}
              />

              {/* Kitchen */}
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/kitchen`}
                component={Kitchen}
              />

              {/* Tables */}
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/tables`}
                component={Tables}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/tables/booking/:id`}
                component={Booking}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/tables/event/:id`}
                component={Event}
              />

              {/* Waiter */}
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/waiter`}
                component={Waiter}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/waiter/order/new`}
                component={NewOrder}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/waiter/order/:id`}
                component={OrderById}
              />
            </Switch>
          </MainLayout>
        </StylesProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

//sdf

export default App;
