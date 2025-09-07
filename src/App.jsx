import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Experience from './Pages/Experience'
import Education from './Pages/Education'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element ={ <Home /> } />
        <Route path='/skills' element ={ <Skills/> } />
        <Route path='/projects' element ={ <Projects /> } />
        <Route path='/experience' element ={ <Experience />} />
        <Route path='/education' element ={ <Education /> } />
        <Route path='/contact' element ={ <Contact /> } />
      </Routes>
    </div>
  )
}

export default App
