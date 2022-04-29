import React, { useState } from "react";
import Menu from "./HeaderComponents/Menu";
import LeftSidebar from '../AppSidebar/LeftSidebar';
import RightSidebar from '../AppSidebar/RightSidebar';
import SidebarIcons from "../AppSidebar/SidebarComponents/LefttSidebarComponents";

const AppHeader = () => {
  const [showSearchResults, setShowSearchResults] = useState(false);
  // console.log(showSearchResults);
  const[searchInput,setSearchInput]=useState('');
  // console.log(searchInput);
  const [showLeftHamburgerResults, setShowLeftHamburgerResults] = useState(false);
  const [showRightHamburgerResults, setShowRightHamburgerResults] = useState(false);

  const onClickSearchBox = () => {
    setShowSearchResults(true);
  };

  const onChangeSearchInput = (e) =>{
    setSearchInput(e.target.value)
  }
  const onClickCloseSearchBox = () => {
    setShowSearchResults(false);
  };

  const onClickLeftHamburger = () => {
    setShowLeftHamburgerResults(prev=>!prev)
  };

  const onClickCloseLeftHamburgerBox = () =>{
    setShowLeftHamburgerResults(false)
  }
  const onClickRightHamburger = () =>{
    setShowRightHamburgerResults(previous=>!previous);
  }

  const onClickCloseRightHamburgerBox = () =>{
    setShowRightHamburgerResults(false)
  }

  return (
    <div>
      <nav className=" app-header">
        <ul className="nav navbar-nav">
          <li>
            <div className="container">
              <nav className=" navbar-expand-lg navbar-light bg-light">
                <div id="navContent">
                  <ul className="navbar-nav mr-auto">
                    {/* Website logo start */}
                    <li className="Webiste-logo">
                      <img
                        src="https://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19705.png"
                        className="img-rounded"
                        alt="Cinque Terre"
                        style={{ width: "40px" }}
                      />
                    </li>
                    {/* Website logo end */}

                    {/* Left Hamburger Icon start */}
                    <button
                      onClick={onClickLeftHamburger}
                      className="LeftHamburgerIcon"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <li>
                      {showLeftHamburgerResults ? 
                        <div>
                          <SidebarIcons/>
                          <button onClick={onClickCloseLeftHamburgerBox} className="CloseLeftHamburgerBox">
                            <i
                              className="fa fa-close"
                              style={{ color: "blue",opacity:'0.5',fontSize:'30px'}}
                            ></i>
                          </button>
                        </div> : 
                        <div>
                          
                          <LeftSidebar/>
                        </div>
                        
                      }
                    </li>

                    {/* Left Hamburger Icon end */}

                    {/* Searchbox Start */}
                    <button
                      onClick={onClickSearchBox}
                      className="SearchbarButton"
                    >
                      <i className="fa fa-search" style={{ color: "blue" }}></i>
                    </button>
                    <li>
                      {showSearchResults ? (
                        <div>
                          <input
                            type="text"
                            placeholder="Search.."
                            name="search"
                            className="Searchbox"
                            value={searchInput}
                            onChange={onChangeSearchInput}
                          />
                          <button onClick={onClickCloseSearchBox}>
                            <i
                              className="fa fa-close"
                              style={{ color: "blue" }}
                            ></i>
                          </button>
                        </div>
                      ) : (
                        <div className="IconsHiddenBehindSearchbox">
                          <li className="nav-item dropdown">
                            <button
                              className="btn dropdown-toggle"
                              type="button"
                              id="btnDropdownDemo"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span>
                                <i
                                  className="fa fa-gift"
                                  style={{ color: "blue" }}
                                ></i>
                              </span>
                              <span>Mega Menu</span>
                            </button>

                            <div
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdown"
                            >
                              <div className="dropdown-item">
                                <Menu />
                              </div>
                            </div>
                          </li>

                          <li className="nav-item dropdown">
                            <button
                              className="btn dropdown-toggle"
                              type="button"
                              id="btnDropdownDemo"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="badge badge-pill badge-danger ml-0 mr-2">
                                4
                              </span>

                              <span>Settings</span>
                            </button>

                            <div
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdown"
                            >
                              <div className="dropdown-item">
                                <Menu />
                              </div>
                            </div>
                          </li>

                          <li className="nav-item dropdown">
                            <button
                              className="btn dropdown-toggle"
                              type="button"
                              id="btnDropdownDemo"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span>
                                <i
                                  className="fa fa-cog"
                                  style={{ color: "red" }}
                                ></i>
                              </span>
                              <span>Projects</span>
                            </button>

                            <div
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdown"
                            >
                              <div className="dropdown-item">
                                <Menu />
                              </div>
                            </div>
                          </li>
                        </div>
                      )}
                    </li>
                    {/* Searchbox end */}

                    <div className="HeaderRightIcons">
                      <li className="nav-item dropdown">
                        <button
                          className="btn btn-light dropdown-toggle input-holder input-holder-table-icon"
                          type="button"
                          id="btnDropdownDemo"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span>
                            <i
                              className="fa fa-table"
                              style={{ color: "blue" }}
                            ></i>
                          </span>
                        </button>

                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <div className="dropdown-item">
                            <Menu />
                          </div>
                        </div>
                      </li>

                      <li className="nav-item dropdown">
                        <button
                          className="btn dropdown-toggle input-holder input-holder-bell-icon"
                          type="button"
                          id="btnDropdownDemo"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span>
                            <i className="fa fa-bell"></i>
                          </span>
                        </button>

                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <div className="dropdown-item">
                            <Menu />
                          </div>
                        </div>
                      </li>

                      <li className="nav-item dropdown">
                        <button
                          className="btn btn-light dropdown-toggle input-holder input-holder-country-icon"
                          type="button"
                          id="btnDropdownDemo"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span>
                            <i
                              className="fab fa-canadian-maple-leaf"
                              style={{ color: "red" }}
                            ></i>
                          </span>
                        </button>

                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <div className="dropdown-item">
                            <Menu />
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="vl"></div>
                      </li>

                      <li className="nav-item dropdown">
                        <button
                          className="btn btn-light dropdown-toggle UserProfileIcon"
                          type="button"
                          id="btnDropdownDemo"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span>
                            <i className="fa fa-user" aria-hidden="true"></i>
                          </span>
                        </button>
                        <span>
                          <span className="UserNameInfo">Mani Tripathi</span>
                        </span>

                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <div className="dropdown-item">
                            <Menu />
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="vl"></div>
                      </li>

                      <li>
                        {/* Right Hamburger Icon start */}
                        <button
                          onClick={onClickRightHamburger}
                          className="RightHamburgerIcon"
                        >
                          <span className="navbar-toggler-icon"></span>
                        </button>
                        <li>
                      {showRightHamburgerResults ? 
                        <div>
                          {/* <SidebarIcons/> */}
                          <button onClick={onClickCloseRightHamburgerBox} className="CloseRightHamburgerBox">
                            <i
                              className="fa fa-close"
                              style={{ color: "grey",opacity:'0.5',fontSize:'30px' }}
                            ></i>
                          </button>
                                                    <RightSidebar/>
                        </div> : 
                        // <div>
                          

                        // </div>
                        null
                      }
                    </li>
                        {/* Right Hamburger Icon end */}
                      </li>
                    </div>
                  </ul>
                </div>
              </nav>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AppHeader;
