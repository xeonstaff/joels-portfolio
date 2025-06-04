import React, { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { TbGrave } from 'react-icons/tb'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageDetail } from 'react-icons/bi'
import './nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}><AiOutlineHome />
      </a>
      <a href="#about" 
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser />
      </a>
      <a href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#graveyard"
        onClick={() => setActiveNav('#graveyard')}
        className={activeNav === '#graveyard' ? 'active' : ''}><TbGrave /></a>
      <a href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail /></a>
    </nav>
  )
}

export default Nav
