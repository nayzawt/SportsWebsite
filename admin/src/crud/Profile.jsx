import React from 'react'

import Sidebar from '../components/sidebar/Sidebar'
import CrudHome from './component/pages/CrudHome'
import '../crud/profile.scss'
import CrudAbout from './component/pages/CrudAbout'
import CrudContact from './component/pages/CrudContact'
import CrudNavbar from './component/layout/CrudNavbar'


function Profile() {
  return (
    <div className='profile'>
        <Sidebar />
        <div className="profileConatiner">

            <CrudNavbar />
            <CrudHome />
            <CrudAbout />
            <CrudContact />
        </div>
        
    </div>
  )
}

export default Profile
