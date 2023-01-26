import "./sidebr.scss";
import React, {useState, useEffect, useRef} from 'react';

import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

import SidebarData from "./SidebarData";


const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);


  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">SPORT</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        {
           SidebarData.map((item, index) => {
            return(
              <div className="inner-center" key={index}>
                <ul>
                <Link to={item.path} style={{ textDecoration: "none" }}>
                  <li>
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                  </li>
                </Link>
                

                {/* <Link to="/users" style={{ textDecoration: "none" }}>
                    <li>
                    <PersonOutlineIcon className="icon" />
                    <span>{item.img}</span>
                    </li>
                </Link>

                <Link to="/products" style={{ textDecoration: "none" }}>
                    <li>
                    <StoreIcon className="icon" />
                    <span>{item.products}</span>
                    </li>
                </Link>
                

                <li>
                    <NotificationsNoneIcon className="icon" />
                    <span>{item.noti}</span>
                </li>
                
                <li>
                    
                    <div className='menu-container' ref={menuRef}>
                        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
                        <SettingsApplicationsIcon className="icon" />
                        <span>{item.setting}</span>
                        </div>

                        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
                        
                        <ul>
                            <DropdownItem  text = {"My Profile"}/>
                            <DropdownItem  text = {"Edit Profile"}/>
                            <DropdownItem  text = {"Inbox"}/>
                            <DropdownItem  text = {"Helps"}/>
                            <DropdownItem  text = {"Logout"}/>
                        </ul>
                        </div>
                    </div>

                </li>

                <Link to="/profile" style={{ textDecoration: "none" }}>
                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span>{item.profile}</span>
                    </li>
                </Link>
                
                <li>
                    <ExitToAppIcon className="icon" />
                    <span>{item.logout}</span>
                </li> */}
                </ul>
              </div>
            )
          })
        }
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;