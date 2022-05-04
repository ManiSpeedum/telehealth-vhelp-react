import React from 'react';
import {Switch,Route} from 'react-router-dom';
// import Home from '../AppSidebar/SidebarComponents/Home';
import FormAPICall from '../Elements/FormLayout/index';
import Table from '../AppSidebar/SidebarComponents/Table';
import FormDummy from '../FormDummy';

function RouterPath() {
  return (
    <div className='RouterPath'>
      <Switch>
            <Route exact path="/" component={FormDummy}></Route>
            <Route exact path='/Form' component={FormAPICall}></Route>
            <Route exact path='/Table' component={Table}></Route>
        </Switch>
    </div>
  );
};

export default RouterPath;