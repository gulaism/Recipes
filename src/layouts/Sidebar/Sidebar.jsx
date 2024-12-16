import React from 'react'
import logo from "../../assets/images/logo.png"

const Sidebar = () => {
  return (
    <div>
      <div className='logoAndName'>
        <div className="logo">
          <img src={logo} alt="logo-photo" />
        </div>
        <div>FlavorFusion</div>
      </div>
      <div className='categories'>
        <div className="ctgry"></div>
      </div>
    </div>
  )
}

export default Sidebar
