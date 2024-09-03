import './App.css'
import CallToAction from './components/CallToAction'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contacts from './components/Contacts'

function App() {

  return (
    <main>
      <Navbar />
      <CallToAction />
      <Projects />
      <Resume />
      <Contacts />
    </main>
  )
}

export default App
