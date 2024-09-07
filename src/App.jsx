import './App.css'
import CallToAction from './components/CallToAction'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contacts from './components/Contacts'
import AboutMe from './components/AboutMe'

function App() {

  return (
    <main>
      <Navbar />
      <CallToAction />
      <AboutMe />
      <Projects />
      <Resume />
      <Contacts />
    </main>
  )
}

export default App
