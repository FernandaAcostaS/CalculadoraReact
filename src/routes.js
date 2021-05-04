import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
//import Page2 from './Pages/Page2';


function Routes() {

  return (

    ReactDOM.render(
      <BrowserRouter> 
        <Switch>
            <Route path="/" component={HomePage} exact />
        </Switch>
      </BrowserRouter>
      , document.getElementById('root'))

      
  )
}

export default Routes;