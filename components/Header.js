import React from 'react'

const Header = () => {
  return (
    <div className='sticky top-0 w-full left-0 flex items-center justify-between p-4 px-6'>
      <h1 className='text-3xl sm:text-6xl'>TODO LIST</h1> 
      <i className="fa-solid fa-user"></i>
    </div>
  )
}

export default Header
