import React from 'react'
import './about.css'
import ME2 from '../../assets/standing_squaresm.jpg'
import AWSCERT from '../../assets/awscert.png'
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
              <small>2+ years</small>
            </article>
            <article className="about__card">
              <BiFolderPlus className='about__icon' />
              <h5>Projects</h5>
              <small>20+</small>
            </article>
            <article className="about__card">
              <img src={AWSCERT} />
            </article>
          </div>
          <p>
            My work focuses on frontend web and app development across
            Vue, Svelte, and React (like this site!) projects. I currently work at 
             <b> Rove IQ</b> out of Covington, KY, developing digital map signs for smart navigation. 
            I hold an <b>AWS Solutions Architect</b> (associate) certification.
          </p>
          <p>
          In addition to tech proficiencies, I bring a broad array of experience:
          </p>
          <p className="about__content-skills">
            •<b> science education:</b> biopsychology bs + lab experience (psych / chem) <br />
            •<b> educator:</b> 10 years teaching language & research<br />
            •<b> Asia experience:</b> 8 years in China + Taiwan<br />
            •<b> social media:</b> operator of #1 in-niche Youtube channel<br />
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
