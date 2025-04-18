import backgroundGif from '../src/assets/backgroundIntro.gif'; 

import './App.css'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Proyects from './components/Proyects'
import AboutMe from './components/AboutMe'
import Estudios from './components/Estudios'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Intro backgroundImage={backgroundGif}/>
      <Proyects/>
      <AboutMe/>
      <Estudios/>
      <Contacto/>
      <Footer/>
    </>
  )
}

export default App
