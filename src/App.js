import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import TINA from './pages/TINA';
import TINACollection from "./pages/TINACollection";
import Portraits from './pages/Portraits';

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
// import Experience from './components/experience/Experience'
import WebPortfolio from './components/portfolio/WebPortfolio'
import Graveyard from './components/portfolio/Graveyard'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const Home = () => (
  <>
    <Header />
    <Nav />
    <About />
    <WebPortfolio />
    <Graveyard />
    <Testimonials />
    <Contact />
    <Footer />
  </>
)

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tina" element={<TINA />} />
        <Route path="/tina/:slug" element={<TINACollection />} />
        <Route path="/portraits" element={<Portraits />} />
      </Routes>
    </Router>
  );
};


export default App
