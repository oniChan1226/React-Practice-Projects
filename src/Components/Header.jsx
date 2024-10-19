import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Buttons from './Utilities/Buttons'

const Header = () => {
  return (
    <div className='bg-customGray-dark text-textColors-primary sticky top-0 left-0'>
      <div className=' flex justify-between items-center w-[85%] mx-auto'>
        {/* Logo */}
        <Link className='font-serif text-2xl md:text-5xl text-customBlue hover:text-customBlue-dark font-semibold' to={"/"}>F</Link>
        {/* NavLinks */}
        <ul className='flex space-x-5 md:text-xl py-8'>
          <li className='hover:-translate-y-1 duration-200'>
            <NavLink to={"/"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-customBlue"
                  : ""
              }`
            }>
              Home
            </NavLink>
          </li>
          <li className='hover:-translate-y-1 duration-200'>
            <NavLink to={"/about"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-customBlue"
                  : ""
              }`
            }>
              About
            </NavLink>
          </li>
          <li className='hover:-translate-y-1 duration-200'>
            <NavLink to={"/work"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-customBlue"
                  : ""
              }`
            }>
              Work
            </NavLink>
          </li>
        </ul>
        {/* Action Button */}
        <Buttons>
          Hire Me
        </Buttons>
      </div>
    </div>
  )
}

export default Header