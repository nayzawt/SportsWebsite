import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton';

 const SidebarSetting = () => {
//     const [open, setOpen] = useState(false);

//     let menuRef = useRef();

//     useEffect(() => {
//     let handler = (e)=>{
//         if(!menuRef.current.contains(e.target)){
//         setOpen(false);
        
//         }      
//     };

//     document.addEventListener("mousedown", handler);
    

//     return() =>{
//         document.removeEventListener("mousedown", handler);
//     }

//     });

  return (
    <div>
        {/* <div className='menu-container' ref={menuRef}>
            <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
            <SettingsApplicationsIcon className="icon" />
            
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
        </div> */}
        <DropdownButton
            id="dropdown-button-dark-example2"
            variant="secondary"
            menuVariant="dark"
            title="Dropdown button"
            className="mt-2"
        >
            <Dropdown.Item href="#/action-1" active>
            Action
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
        </DropdownButton>
        
    </div>
  )
}

export default SidebarSetting