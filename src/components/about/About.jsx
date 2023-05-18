import React from 'react'
import './about.css'
import ME2 from '../../assets/standing_squaresm.jpg'
import { SiPolywork } from 'react-icons/si'
import { IoMdGitNetwork } from 'react-icons/io'
import { BiFolderPlus } from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME2} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <SiPolywork className='about__icon' />
              <h5>Experience</h5>
              <small>10+ years</small>
            </article>
            <article className="about__card">
              <IoMdGitNetwork className='about__icon' />
              <h5>Industries</h5>
              <small>3</small>
            </article>
            <article className="about__card">
              <BiFolderPlus className='about__icon' />
              <h5>Projects</h5>
              <small>20+</small>
            </article>
          </div>
          <p>
            I'm a Front-end Web Developer with 10+ years experience in education 
            and business development who aims to bring fully-integrated
            web experiences to businesses and customers. 
          </p>
          <p>
            A strong tech & science background gives me an analytical footing
            to measure & improve key buiness metrics through web design.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
