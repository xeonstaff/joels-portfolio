import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/projects/Debatetrack.png'
import IMG2 from '../../assets/projects/DebatetrackYoutube.png'
import IMG3 from '../../assets/projects/Geopals.png'
import IMG4 from '../../assets/projects/Polibooks.png'
import IMG5 from '../../assets/projects/Antdoc.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Debatetrack - brand',
    scope: 'branding, web management, curriculum development, social media, email marketing',
    website: 'https://debatetrack.com',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Debatetrack - Youtube',
    scope: 'research, scripts, filming, editing, social marketing',
    website: 'https://youtube.com/debatetrack',
  },
  {
    id: 3,
    image: IMG3,
    title: 'GeoPals CNFT',
    scope: 'production management, web management, blockchain, copywriting',
    website: 'https://www.geopalsnft.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'PoliBooksCo',
    scope: 'production coordination, web management, advertising',
    website: 'https://polibooksco.com',
  },
  {
    id: 5,
    image: IMG5,
    title: 'AntDoc',
    scope: 'web development, copywriting',
    website: 'https://starbridge.studio/',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Business Development</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, scope, website }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3 className="porth3">{title}</h3>
                <div className="scope">
                  <p>{scope}</p>
                </div>
                <div className="bizportfolio__item-cta">
                  <a href={website} className='btn' target='_blank'>Website</a>
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