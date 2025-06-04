import React from 'react'
import './portfolio.css'
import geopals from '../../assets/projects/geopals.png'
import polibooks from '../../assets/projects/polibooks.png'

import Merkel from '../../assets/projects/PDFs/merkel_queen_of_europe.pdf'
import Xi from '../../assets/projects/PDFs/xi_chinas_leader.pdf'
import GeoPals from '../../assets/projects/PDFs/geopals.pdf'


const data = [
  {
    id: 1,
    image: polibooks,
    title: 'Polibooks',
    role: 'author & project manager',
    description: "Illustrated children's books about world leaders. Anti-propaganda. A series of 3 books was created, feauturing Angela Merkel, Xi Jinping, and...another.",
    PDF1: Merkel,
    PDF1Title: "Angela Merkel",
    PDF2: Xi,
    PDF2Title: "Xi Jinping",
  },
  {
    id: 2,
    image: geopals,
    title: 'Geopals',
    role: 'technical work & project management',
    description: "An NFT series featuring US City-based aliens called 'geopals'. Hosted on the Cardano blockchain.",
    PDF1: GeoPals,
    PDF1Title: "Geopals Artwork",
  }
]


const Portfolio = () => {
  return (
    <section id='graveyard'>
      <h5>Past Work</h5>
      <h2>Project Graveyard</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, role, description, PDF1, PDF1Title, PDF2, PDF2Title }) => {
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
                  <a href={PDF1} download className='btn' target='_blank'>{PDF1Title}</a>
                  {PDF2 &&
                  <a href={PDF2} download className='btn' target='_blank'>{PDF2Title}</a>
                   }
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