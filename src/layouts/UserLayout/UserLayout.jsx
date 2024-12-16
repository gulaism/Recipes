import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from "react-router-dom";
// styles
import './UserLayout.scss'

const UserLayout = () => {
  return (
    <div className='container-user-layout'>
      <Sidebar />
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default UserLayout
