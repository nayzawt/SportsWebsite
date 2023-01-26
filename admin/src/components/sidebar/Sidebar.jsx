import "./sidebr.scss";
import React, {useState, useEffect, useRef} from 'react';
import '../sidebar/dropdown.css'

import { Link, NavLink } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import SidebarData from "./SidebarData";
import SidebarSetting from "./SidebarSetting";
import DropdownItem from "./DropdownItem";


const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [open, setOpen] = useState(false);
  

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <div className="sidebar">
      

      <div className="center">
        {
           SidebarData.map((item, index) => {
            
              if (item.setField === true) {
                
                return(
                  <div   ref={menuRef} key={index}>
                            
                              <ul onClick={()=>{setOpen(!open)}}>
                              
                                <li className="setting-li">
                                 
                                    <span className="setting-icon">{item.icon}</span>
                                    <span>{item.name}</span> 
                                </li>
                              
                              </ul>
                            

                    <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
                      
                      <ul>
                        <DropdownItem text = {"My Profile"}/>
                        <DropdownItem text = {"Edit Profile"}/>
                        <DropdownItem text = {"Inbox"}/>
                        <DropdownItem text = {"Settings"}/>
                        <DropdownItem text = {"Helps"}/>
                        <DropdownItem text = {"Logout"}/>
                      </ul>
                    </div>
                  </div>
                )
              }

              
            return(
              <div className="inner-center" key={index}>
              <ul>
                <NavLink to={item.path} style={{ textDecoration: "none", alignItems: 'center' }} className={cl => cl.isActive? 'icon' : 'icon icon-change'}  >

                      <p  style={{padding: '10px'}}>{item.icon}</p>
                      <span>{item.name}</span> 
                  
                </NavLink>

                
                  
                
                

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