import React from "react";

function RightSidebar() {
  return (
    <div className="container-fluid RightSidebar">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 ">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <div className="d-none d-sm-inline RightSidebarFirstSubHeading">
                  Servers Status
                </div>
                <div>
                  <hr className="style1" />
                </div>
                <div className="d-flex p-3 justify-content-around RightSidebarSecondSubHeading">
                  <div className="p-2">Server Load 1</div>
                  <div className="p-2">Server Load 2</div>
                  <div className="p-2">Server Load 3</div>
                </div>
                <hr className="style1" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RightSidebar;
