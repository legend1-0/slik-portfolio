import React, { useState } from 'react'
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import SideNav from './SideNav';
const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [hamClick, setHamClick] = useState(true)
  return (
    <div className='fixed z-10 w-[100%]'>
        <nav className='flex-between headings w-[100%] nav'>
            <h3 className='h3'>Layrid</h3>
          {navOpen === false ? <Menu
           onClick={() => {setNavOpen(!navOpen)}} /> 
           : <X onClick={() => {setNavOpen(!navOpen)}}/>

             }  
        </nav>
        <SideNav navOpen={navOpen} className="headings" />
    </div>
  )
}

export default NavBar