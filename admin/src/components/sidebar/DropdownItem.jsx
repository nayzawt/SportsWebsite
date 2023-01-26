import React from 'react'
import '../sidebar/dropdown.css'

function DropdownItem(props){
    return(
      <li className = 'dropdownItem'>
        
        <a> {props.text} </a>
      </li>
    );
  }

export default DropdownItem
