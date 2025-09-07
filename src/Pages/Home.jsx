import React from 'react'
import Intro from '../components/intro'
import Skills from './Skills'
import Projects from './Projects'
import Education from './Education'
import Contact from './Contact'
const Home = () => {
  return (
    <div className='flex flex-col gap-10 md:gap-20'>
      <Intro />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  )
}

export default Home
