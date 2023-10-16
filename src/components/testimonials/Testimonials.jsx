import React from 'react'
import './testimonials.css'
import Josh from '../../assets/Josh.jpeg'
import Jessie from '../../assets/Jessie.jpeg'
import Rich from '../../assets/Rich.jpeg'
import Stephan from '../../assets/Stephan.jpeg'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: Josh,
    name: 'Josh Genereux',
    title: 'Software Developer',
    review: 'Joel is a dedicated and dynamic team player with a wealth of life experience that enhances the office culture. I have had the pleasure of working alongside him for more for around a year, and during this period, I witnessed firsthand his work ethic and enthusiasm for front end development. Joel consistently delivered quality code, and even offering to work on weekends, to ensure our project gets released on time and bug free. He is a dependable worker and genuinely improves our team. What sets Joel apart is not just his development skills, but also his ability to get along with, and make friends with everyone who he is around. With his diverse background of other countries, cultures and a divergent career before programming, Joel brings a unique perspective to the team. He is welcoming and congenial, and his ability to make worthwhile connections improves the office culture and makes even the most tedious days of coding more bearable. I have no doubt that Joel\'s enthusiasm, work ethic, and interpersonal skills would make him an invaluable asset to your team.Overall, I would recommend Joel for any organization in need of an addition to their team. His skills dedication and interpersonal skills make him a great addition to any team. I have enjoyed working alongside Joel and am sure he will make a great addition to any team.'
  },
  {
    avatar: Jessie,
    name: 'Jessie Chen',
    title: 'Founder & CEO',
    review: 'Our customer base has extremely high standards for teacher quality, yet Joel never failed to garner praise both from his students and from their parents, our customers. This comes both from personal conversations with these parents and from polls conducted to rate satisfaction with teachers. In addition, his highest retention rate for students reflected the highest satisfaction rate of any teacher we have had to date. I can therefore recommend him for customer-facing roles or those that require high client satisfaction. Lastly, Joel made efforts to promote our business, a function not explicitly described in his role as a teacher. One of these was particularly successful, organizing the shooting, editing and legal waivers for a promotional video which now has 100, 000 views on YouTube. I therefore expect him to make contributions above and beyond his job role in the future. Joel would be an asset to any employer, and I wholeheartedly recommend him for future roles.'
  },
  {
    avatar: Rich,
    name: 'Richard Maloof',
    title: 'Strategic Partnerhips Manager',
    review: "I’ve known Joel for over three years while living in Taipei, Taiwan, in both social and professional contexts. While in Taiwan, Joel and I discussed his desire to earn certificates in coding, and make a career shift into software development. We discussed his plan at length, and I am happy to see him successfully accomplishing the first phase of his plan, earning a full stack certificate through Coding Temple. Joel is a creative problem solver, who balances his creativity with realistic approaches.Joel has proven his ability to be adaptable to different social and cultural environments, by living abroad in China and Taiwan for over five years, with little outside support structure.I believe this also demonstrates Joel’s dependability, and ability to be trusted to handle job responsibilities with little oversight. Further, in our social circle, Joel is known as being socially savvy, with a positive attitude and good sense of humor- attributes making him a strong team member in any office environment.Personally, I have always been impressed with his chess playing skills, which have clearly developed his ability for strategic thinking."
  },
  {
    avatar: Stephan,
    name: 'Stephan Vogel',
    title: 'Publisher & Digital Marketer',
    review: "I was very happy to work with Joel, as he is an excellent communicator, critical thinker and creative problem solver that picked up everything I had to contribute to his overall marketing and launch strategy quickly. Seeing how fast and efficient he applied my 2 cents, combined with excellent communication skills, and seeing the end result Joel produced, I’m confident to state that his professional's ability to work, adapt and deliver result is top notch. His flawless career change to code developer confirms that. On a final note, Joel is a social outgoing person and a giver who always considers the well- being of others.This makes him a great person to be around, both in a professional and personal context.I believe this makes Joel a valuable addition to your team, and as a marketing professional who has worked and communicated with dozens of freelancers and clients, I strongly recommend him for any position he qualifies for."
  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Professional Recommendations</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]} spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, title, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <h5 className='client__title'>{title}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials