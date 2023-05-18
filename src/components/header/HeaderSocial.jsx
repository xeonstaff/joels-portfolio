import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { SiCodewars } from 'react-icons/si'

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/joelmounts" target="_blank"> <BsLinkedin /> </a>
      <a href="https://github.com/xeonstaff" target="_blank"> <FaGithub /> </a>
      <a href="https://www.codewars.com/users/xeonstaff/completed_solutions" target="_blank"> <SiCodewars /></a>
    </div>
  )
}

export default HeaderSocial
