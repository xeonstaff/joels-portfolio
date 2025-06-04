import React from 'react'
import './about.css'
import ME2 from '../../assets/standing_squaresm.jpg'
import { LuGraduationCap } from 'react-icons/lu'
import { RiMegaphoneLine } from 'react-icons/ri'
import { IoTerminalOutline } from 'react-icons/io5'

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
              <LuGraduationCap className='about__icon' />
              <h5>Education</h5>
              <small>12+ years</small>
            </article>
            <article className="about__card">
              <RiMegaphoneLine className='about__icon' />
              <h5>Marketing</h5>
              <small>5+ years</small>
            </article>
            <article className="about__card">
            <IoTerminalOutline className='about__icon' />
              <h5>Tech</h5>
              <small>3 years</small>
            </article>
          </div>
          <p>
            I'm into improving education with tech.<br/>
            And importantly, with using marketing to drive attention to those projects.
          </p>
          <p className="about__content-skills">
            What's working now in marketing:<br/>
            •<b> podcast-as-lead gen: </b> people say no to sales meetings.<br/><i>they <u>don't</u> say no to podcasts.</i><br/><br/>
            •<b> click-to-message Meta ads:</b> every lead is a real conversation with a customer.<br /><i>or a confused grandma who can't figure out how to close the chat.</i><br/><br/>
            •<b> ogranic social:</b> I don't think this will always be free. But it is now.<br />
          </p>
          <p>
            Open to conversations about driving growth through smart digital marketing.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
