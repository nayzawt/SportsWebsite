import React from 'react'
import Profile from '../../crud/component/profile/Profile'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import './user.scss'

const User = () => {
  return (
    <div>
      <Navbar />
      <div className="user">
      <Sidebar />
      <div className="userContainer">
        User
      </div>
    </div>
    </div>
  )
}

export default User