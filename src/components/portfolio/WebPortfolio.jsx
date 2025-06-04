import React from 'react'
import './portfolio.css'
import debatetrack from '../../assets/projects/debatetrack.png'
import daobloom from '../../assets/projects/daobloom.png'
import ds from '../../assets/projects/ds.png'

const data = [
  {
    id: 1,
    image: debatetrack,
    title: 'Debatetrack',
    role: 'owner & operator',
    description: 'A leading resource company for High School debate clubs. Youtube top-of-funnel. Email newsletter with 50% open rates for years.',
    website: 'https://www.debatetrack.com/',
    youtube: 'https://www.youtube.com/debatetrack'
  },
  {
    id: 2,
    image: daobloom,
    title: 'Daobloom',
    role: 'owner & operator',
    description: 'A new education brand targeted at finding high-paying, high-impact jobs for High School students. Current focus is viral short-form and conversation Meta ads.',
    website: 'https://www.daobloom.io/',
    youtube: 'https://www.youtube.com/@daobloom'
  },
  {
    id: 3,
    image: ds,
    title: "D's Barbershop",
    role: 'webmaster',
    description: "Dayton's premiere barbershop. \n Truly, the finest barbershop in the area.",
    website: 'https://dsbarbershop.com/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Work</h5>
      <h2>Current Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, role, description, youtube, website }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <div className="title-subtitle">
                  <h3 className="porth3">{title}</h3>
                  <p className="porth3">{role}</p>
                </div>
                <div className="scope">
                  <p>{description}</p>
                </div>
                <div className="portfolio__item-cta">
                  <a href={website} className='btn' target='_blank'>Website</a>
                 {youtube && <a href={youtube} className='btn btn-primary' target='_blank'>Youtube</a>}
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio