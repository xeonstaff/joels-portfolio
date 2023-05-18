import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/projects/birthsdeaths.png'
import IMG2 from '../../assets/projects/newsapp.png'
import IMG3 from '../../assets/projects/catsapp.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Historical Events',
    category: 'web dev - education',
    tech: 'React, Material UI, Firebase, Toastify',
    github: 'https://github.com/xeonstaff/react-births-and-deaths',
    demo: 'https://births-and-deaths.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'News Display & Search',
    category: 'web dev - news',
    tech: 'React, APIs, Material UI',
    github: 'https://github.com/xeonstaff/react-newsfeed',
    demo: 'https://newsfeed-react.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Pet Owners',
    category: 'web dev - entertainment',
    tech: 'React, APIs, Material UI, custom CSS',
    github: 'https://github.com/xeonstaff/react-cat-app',
    demo: 'http://cat-pix.herokuapp.com/'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Web Development</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, tech, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3 className="porth3">{title}</h3>
                <div className="scope">
                  <p>{tech}</p>
                </div>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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