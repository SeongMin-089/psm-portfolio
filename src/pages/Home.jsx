import React from 'react'
import Hero from '../components/home/Hero'
import Skills from '../components/home/Skills'
import Header from '../components/home/Header'
import Project from '../components/home/Project'
import MiniProject from '../components/home/MiniProject'
import Contact from '../components/home/Contact'
import Footer from '../components/home/Footer'
const Home = () => {
  

  return (
    <div>
    
      <Header />
      <main> 
        <section id='Hero'>
          <Hero />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section id="Project">
          <Project />
        </section>
        <section id="MiniProject">
          <MiniProject />
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home