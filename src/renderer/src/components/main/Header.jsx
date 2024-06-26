import React, { useEffect, useState } from 'react'
import Clock from './Clock'
import { CiLight } from 'react-icons/ci'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { Avatar, User } from '@nextui-org/react'
import { MdAdminPanelSettings } from "react-icons/md";

const Header = () => {
  const [darkMod, setDarkMod] = useState(false)
  useEffect(() => {
    if (darkMod) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    console.log(darkMod)
  }, [darkMod])
  return (
    <div className="bg-white dark:bg-gray-950 flex justify-between items-center p-2 px-4 gap-2 ">
      <User avatarProps={{ radius: 'lg' ,size:"md" }} className='whitespace-nowrap overflow-hidden w-fit'  description={<p className='flex flex-row gap-2 items-center text-medium'><MdAdminPanelSettings/><span>admin</span></p>} name={<p className='text-xl'>mohamed alami</p>}>
        
      </User>
      <div className="flex gap-5 flex-row items-center whitespace-nowrap overflow-hidden">
        <button onClick={() => setDarkMod((prev) => !darkMod)}>
          {darkMod ? <CiLight size={23} /> : <BsFillMoonStarsFill size={23} />}
        </button>
        
          <Clock />
        
      </div>
    </div>
  )
}

export default Header
