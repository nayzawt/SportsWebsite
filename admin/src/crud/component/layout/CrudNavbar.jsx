import React from 'react'

import { Link } from 'react-router-dom';
import './crudnavbar.scss'


const CrudNavbar = () => {
  return (
    <div className='crud-nav'>
      <div className="first">
        <Link to='/' style={{ textDecoration: "none" }}><h4>SPORTS WEBSITE</h4></Link>
      </div>
      <div className="second">
        <Link to='/users' style={{ textDecoration: "none" }}><span>Home</span></Link>
        <Link to='/users' style={{ textDecoration: "none" }}><span>About</span></Link>
        <Link to='/users' style={{ textDecoration: "none" }}><span>Contact</span></Link>
      </div>
    </div>
  )
}

export default CrudNavbar
