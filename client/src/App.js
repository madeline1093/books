import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from  'react-router-dom';
import NoMatch from './pages/NoMatch';
import Books from './pages/Books';

const App = () => (
  <Router>
    <Switch>
      <Route exact path ="/books" component={Books}/>
      <Route component={NoMatch} />
    </Switch>
  </Router>
)

export default App;
