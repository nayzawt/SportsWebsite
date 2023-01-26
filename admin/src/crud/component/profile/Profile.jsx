import React from 'react'

import Sidebar from '../../../components/sidebar/Sidebar'
import CrudHome from '../pages/CrudHome'
import './profile.scss'
import CrudAbout from '../pages/CrudAbout'
import CrudContact from '../pages/CrudContact'
import CrudNavbar from '../layout/CrudNavbar'
import Navbar from '../../../components/navbar/Navbar'
import ProfileData from './ProfileData'
import { useState } from 'react'


function Profile() {
  const [male, setMale] = useState("Male")

  const onOptionChange = e => {
    setMale(e.target.value)
  }

  return (
    <div>
      <div>
        <CrudNavbar />
      </div>
      <div className='profile'>
      
      <Sidebar />
      <div className="profileConatiner">
          {
            ProfileData.map((items,index) => {
              return(
                <div className="profile-inner" key={index}>
                    <div className='inner-second'>
                      <div className="profile-img">
                        <p>{items.img}</p>
                      </div>

                      <div className="profile-second">
                        <div className="profile-name">
                          <input type="text" placeholder={items.username} />
                        </div>
                        
                        <div className="profile-name">
                          <input type="text" placeholder={items.email} />
                        </div>
                      </div>

                      <div className="profile-second">
                        <div className="profile-name">
                          <input type="text" placeholder={items.password} />
                        </div>

                      </div>

                      <div className="profile-male">
                      <div className="male">
                        <input type="radio" value="Male" checked={male === "Male"} onChange={onOptionChange} />
                        <label >{items.male}</label>
                      </div>

                      <div className="male">
                      <input type="radio"  value="Female"  checked={male === "Female"}  onChange={onOptionChange}  />
                            <label>{items.femail}</label>
                      </div>     

                      </div>
                    </div>
                    
              </div>
              )
            })
          }
          
      </div>
      
  </div>
    </div>
  )
}

export default Profile
