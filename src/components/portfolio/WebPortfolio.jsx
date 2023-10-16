import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/projects/tempfriend.png'
import IMG2 from '../../assets/projects/cattinder.png'
import IMG3 from '../../assets/projects/historicalevents.png'
import IMG4 from '../../assets/projects/petowners.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Temporary Friend',
    category: 'web dev - AI',
    tech: 'SvelteKit, Svelte UI, OpenAI API',
    github: 'https://github.com/xeonstaff/tempfriend',
    demo: 'https://tempfriend-c6vfjwe74-xeonstaff.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Tinder for Cats',
    category: 'web dev - entertainment',
    tech: 'React, React-Icons, APIs',
    github: 'https://github.com/xeonstaff/react_tinder_for_cats',
    demo: 'https://react-tinder-for-cats-7k6i87286-xeonstaff.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Historical Events',
    category: 'web dev - education',
    tech: 'React, Material UI, Firebase, Toastify',
    github: 'https://github.com/xeonstaff/react-births-and-deaths',
    demo: 'https://react-births-and-deaths-o3xbe3rz1-xeonstaff.vercel.app/births'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Pet Owners',
    category: 'web dev - entertainment',
    tech: 'React, APIs, Material UI, custom CSS',
    github: 'https://github.com/xeonstaff/react-cat-app',
    demo: 'https://react-cat-app-lilac.vercel.app/'
  }
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