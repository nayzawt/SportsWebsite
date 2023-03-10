import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { color } from "@mui/system";
import DarkModeReducer from "../../context/darkModeReducer";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="top">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">SPORTS WEBSITE</span>
          </Link>
        </div>
        <div className="inner">
             <div className="search">

          <input type="text" placeholder="Search..."   />

          <SearchOutlinedIcon className="second-icon" />
          </div>
          <div className="items">
          <div className="item">

          </div>
          <div className="item">
          <DarkModeOutlinedIcon
            className="second-icon"
            onClick={() => dispatch({ type: "TOGGLE" } )}
          />
          </div>
          <div className="item">
          <FullscreenExitOutlinedIcon className="second-icon" />
          </div>

          <div className="item">
          <ChatBubbleOutlineOutlinedIcon className="second-icon" />
          <div className="counter">2</div>
          </div>
          <div className="item">
          <ListOutlinedIcon className="second-icon" />
          </div>
          <div className="item">
          <img
            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="avatar"
          />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;