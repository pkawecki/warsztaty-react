import MainLayout from './components/layout/MainLayout/MainLayout';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './components/views/Homepage/Homepage';
import Kitchen from './components/views/Kitchen/Kitchen';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import NewOrder from './components/views/Waiter/NewOrder/NewOrder';
import OrderById from './components/views/Waiter/OrderById/OrderById';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout>
          App component text
          <Routes>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/`}
              element={<Homepage />}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/login'}
              element={<Login />}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/kitchen`}
              element={<Kitchen />}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/tables`}
              element={<Tables />}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/waiter`}
              element={<Waiter />}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/waiter/order/new`}
              element={<NewOrder />}
            />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

//sdf

export default App;
