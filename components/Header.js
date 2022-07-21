import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  return (
    <div className='sticky top-0 w-full left-0 flex items-center justify-between p-4 px-6'>
      <h1 className='text-3xl sm:text-6xl'>TODO LIST</h1> 

      <FontAwesomeIcon
        className='text-xl sm:text-3xl'
        icon={faUser}
        style={{ color: "white" }}
      />

    </div>
  )
}

export default Header

