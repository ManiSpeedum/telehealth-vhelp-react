import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from '../AppSidebar/SidebarComponents/Home';
import Form from '../Elements/FormLayout/Form';
// import FormAPICall from '../Elements/FormLayout/index';
import Table from '../AppSidebar/SidebarComponents/Table';

function RouterPath() {
  return (
    <div className='RouterPath'>
      <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path='/Form' component={Form}></Route>
              
            {/* <Route exact path='/Form' element={<FormAPICall/>}></Route> */}
            <Route exact path='/Table' component={Table}></Route>
        </Switch>
    </div>
  );
};

export default RouterPath;