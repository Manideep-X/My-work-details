import './App.css'
import CallToAction from './components/CallToAction'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contacts from './components/Contacts'
import AboutMe from './components/AboutMe'

import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <CallToAction />
        <AboutMe />
        <Projects />
        <Resume />
        <Contacts />
      </main>
    </BrowserRouter>
  )
}

export default App
