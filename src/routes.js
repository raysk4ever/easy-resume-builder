import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Create from './components/create';

class Routes extends Component {
  render() { 
    return ( 
      <Switch>
        <Route path='/create' component={Create}></Route>
        <Route path='/' component={Home}></Route>
      </Switch>
    );
  }
}
 
export default Routes;