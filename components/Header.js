import Image from 'next/image'
import React from 'react'
import User from '../assets/img/user-solid.svg'

const Header = () => {
  return (
    <div className='sticky top-0 w-full left-0 flex items-center justify-between p-4 px-6'>
      <h1 className='text-3xl sm:text-6xl'>TODO LIST</h1> 

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"/></svg> */}
      
      <Image
      src={User}
      alt="Picture of the author"
      width="50px"
      height="50px"
      />

      <i className="fa-regular fa-user"></i>

    </div>
  )
}

export default Header

