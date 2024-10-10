import React from 'react'
import { Outlet } from 'react-router-dom'
import SvgComponent from '../components/SVG'
import { Link } from 'react-router-dom'
import { links } from '../utils/links'
const SharedNav = () => {
  return (
    <>
      <nav className='flex items-center justify-between bg-slate-200'>
        <Link
          className='hover:cursor-pointer'
          to='/'
        >
          <SvgComponent />
        </Link>

        {links.map((link) => {
          const { label, href } = link
          return (
            <li>
              <Link
                className='hover:cursor-pointer'
                to={href}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </nav>
      <div className='align-element py-20'>
        <Outlet />
      </div>
    </>
  )
}

export default SharedNav
