import React from 'react'

const Buttons = ({ children, onclick }) => {
  return (
    <button className='bg-customBlue-dark text-textColors-accent hover:bg-customBlue-darker px-6 py-2 md:text-xl rounded-md tracking-wide hover:translate-x-1 duration-200 font-semibold shadow-md shadow-customBlue-darker'
    onClick={onclick ? onclick : () => {}}
    >
      {children}
    </button>
  )
}

export default Buttons