import React from 'react'
import { Outlet } from 'react-router-dom'
import SvgComponent from '../components/SVG'
import { Link } from 'react-router-dom'
import { links } from '../utils/links'
import { useAppSelector } from '../lib/hooks'
const SharedNav = () => {
  const { favBook } = useAppSelector((state) => state.booksState)
  console.log(favBook)
  return (
    <>
      <nav className='flex items-center justify-between bg-slate-200'>
        <div>
          <button className='border-white border py-3 px-8 rounded-lg hover:scale-105 flex'>
            <span className=' pl-2 text-white'>{favBook?.length}</span>
          </button>
        </div>

        <Link
          className='hover:cursor-pointer'
          to='/'
        >
          <SvgComponent />
        </Link>

        {links.map((link, index) => {
          const { label, href } = link
          return (
            <li key={index}>
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
