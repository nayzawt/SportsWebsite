import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DropdownItem from "./DropdownItem";
 import SidebarSetting from "./SidebarSetting";




 const SidebarData = [
    {
        name: 'Dashboard',
        icon: <DashboardIcon className="icon" />,
        path:'/'
        
    },
    {
        name: 'Users',
        icon: <PersonOutlineIcon className="icon" />,
        path:'/users'
        
    },
    {
        name: 'Products',
        icon: <StoreIcon className="icon" />,
        path:'/products'
        
    },
    {
        name: 'Notification',
        icon: <NotificationsNoneIcon className="icon" />,
        path:'/noti'
        
    },
    {
        name: 'Setting',
        icon: <SettingsApplicationsIcon className="icon" />,
        path:'/setting'
        
    },
    {
        name: 'Profile',
        icon: <AccountCircleOutlinedIcon className="icon" />,
        path:'/profile'
        
    },
    {
        name: 'Logout',
        icon: <ExitToAppIcon className="icon" />,
        path:'/logout'
        
    },

]

export default SidebarData;