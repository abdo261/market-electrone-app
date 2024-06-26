import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/main/Sidebar'
import Header from '../components/main/Header'

const Layout = () => {
  return (
    <div>
      <div className="h-screen w-screen dark:bg-slate-800 bg-gray-200 dark:text-white flex flex-row flex-nowrap text-gray-800 font-semibold">
        <Sidebar />
        <div className="flex-grow ">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
