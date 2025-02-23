import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Expertise from './components/Expertise'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import './App.css'

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Education/>
      <Expertise/>
      <Projects/>
      <Achievements/>
      <Contact/>
    </div>
  )
}

export default App
