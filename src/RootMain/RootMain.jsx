import React from 'react'
import Navbar from '../shared/Navbar'
import { Outlet } from 'react-router-dom'

const RootMain = () => {
  return (
    <div className='container p-4 lg:mx-auto '>
    <Navbar></Navbar>
    <Outlet></Outlet>
    
    </div>
  )
}

export default RootMain