import React from 'react'

const Buttons = ({ children, onclick }) => {
  return (
    <button className='bg-customBlue hover:bg-customBlue-dark px-4 py-1 rounded-sm tracking-wide hover:translate-x-1 duration-200'
    onClick={onclick ? onclick : () => {}}
    >
      {children}
    </button>
  )
}

export default Buttons