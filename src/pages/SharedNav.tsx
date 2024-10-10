import React from 'react'
import { Outlet } from 'react-router-dom'
const SharedNav = () => {
  return (
    <>
      <nav className='flex items-center'>SharedNav</nav>
      <div className='align-element py-20'>
        <Outlet />
      </div>
    </>
  )
}

export default SharedNav
