import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import WebPortfolio from './components/portfolio/WebPortfolio'
import Graveyard from './components/portfolio/Graveyard'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      {/* <Experience /> */}
      <WebPortfolio />
      <Graveyard />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
