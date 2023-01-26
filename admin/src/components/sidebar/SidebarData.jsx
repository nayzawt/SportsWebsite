import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DropdownItem from "./DropdownItem";
 import SidebarSetting from "./SidebarSetting";



 const SidebarData = [
    {
        name: 'Dashboard',
        icon: <DashboardIcon  />,
        path:'/',
        setField: false
        
    },
    {
        name: 'Users',
        icon: <PersonOutlineIcon  />,
        path:'/users',
        setField: false
    },
    {
        name: 'Posts',
        icon: <StoreIcon  />,
        path:'/posts',
        setField: false
    },
    {
        name: 'Comments',
        icon: <ChatBubbleOutlineOutlinedIcon  />,
        path:'/comment',
        setField: false
        
    },
    {
        name: 'Setting',
        icon: <SettingsApplicationsIcon  />,
        setField: true,
        path: '/users'
        
    },
    {
        name: 'Profile',
        icon: <AccountCircleOutlinedIcon  />,
        path:'/profile',
        setField: false
        
    },
    {
        name: 'Logout',
        icon: <ExitToAppIcon  />,
        path:'/logout',
        setField: false
        
    },

]

export default SidebarData;