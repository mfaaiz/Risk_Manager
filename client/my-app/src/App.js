import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

//importing components

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import MyChart from './components/testdashboard';
import Vulnerbility from './components/Vulnerbility';

function App() {
  return (
    <div>
      
      <Provider store={store}>
        <Router>
        <Home></Home>
          <Fragment>

            <Route
              exact
              path='/'
              component={Home}
            >
            </Route>

            <Route
              exact
              path='/dashboard'
              component={Dashboard}
            >
            </Route>

            <Route
              exact
              path='/dashboardtest'
              component={MyChart}
            >
            </Route>

            <Route
              exact
              path='/vulnerbility'
              component={Vulnerbility}
            >
            </Route>

          </Fragment>

        </Router>
      </Provider>

    </div>
  );
}

export default App;
