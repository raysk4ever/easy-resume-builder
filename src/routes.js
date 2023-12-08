import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';

const Routes = ()=> {
    return ( 
      <Switch>
        <Route path='/create' component={Create}></Route>
        <Route path='/' component={Home}></Route>
      </Switch>
    );
}
 
export default Routes;