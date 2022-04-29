import React from "react";
import {NavLink} from 'react-router-dom';

function SidebarIcons(props) {

    const navlinks=[
        {path:'/', name: 'Home',id:1,iconLogo:<i className="fa fa-home" aria-hidden="true"></i>,downAngleIcon: <i className="fa fa-angle-down ml-2 opacity-8"></i>},
        {path:'/Form', name: 'Form',id:2,iconLogo:<i className="fa fa-wpforms" aria-hidden="true"></i>,downAngleIcon: <i className="fa fa-angle-down ml-2 opacity-8"></i>},
        { path: '/Table', name: 'Dashboard',id:3,iconLogo:<i className="fa fa-dashboard"></i>,downAngleIcon: <i className="fa fa-angle-down ml-2 opacity-8"></i>}
    ]

    const navlinksmap=navlinks.map((value,index)=>(
        <NavLink to={value.path} key={index} className="LeftSidebarSubLinks">
            <div className='SidebarLinks'>
                <div >{value.iconLogo}</div>
            </div>   
        </NavLink >
    ))

  return (
    <div>
      <div className="container-fluid Sidebar SidebarIcons">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 ">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item">
                  <span className="d-none d-sm-inline app-sidebar__heading">
                    Menu
                  </span>
                </li>
                <li>{navlinksmap}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarIcons;
