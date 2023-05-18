import React from 'react'
import './footer.css'
import { FiLinkedin } from 'react-icons/fi'
import { FiGithub } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expeirience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/joelmounts/"><FiLinkedin /></a>
        <a href="https://github.com/xeonstaff"><FiGithub /></a>
        <a href="https://twitter.com/machinedelf"><FiTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Joel Mounts</small>
      </div>
    </footer>
  )
}

export default Footer