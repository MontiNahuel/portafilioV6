import backgroundGif from '../src/assets/backgroundIntro.gif'; 

import './App.css'
import { ToastProvider } from './context/ToastContext'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Proyects from './components/Proyects'
import Experiencia from './components/Experiencia'
import AboutMe from './components/AboutMe'
import Estudios from './components/Estudios'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {

  return (
    <ThemeProvider>
      <LanguageProvider>
        <ToastProvider>
          <Navbar/>
          <Intro backgroundImage={backgroundGif}/>
          <Experiencia/>
          <Proyects/>
          <AboutMe/>
          <Estudios/>
          <Contacto/>
          <Footer/>
        </ToastProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
