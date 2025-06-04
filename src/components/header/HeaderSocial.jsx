import React from 'react'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { SiCodewars } from 'react-icons/si'

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/joelmounts" target="_blank"> <BsLinkedin /> </a>
      <a href="https://www.instagram.com/joelexperience/" target="_blank"> <BsInstagram /> </a>
    </div>
  )
}

export default HeaderSocial
