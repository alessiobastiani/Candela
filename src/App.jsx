
import NavHome from "./components/NavHome"
import Home from "./components/Home"
import Nosotros from "./components/Features"
import Testimonio from "./components/Testimonio"
import Departamentos from './components/Departamentos'
import Servicios from './components/Servicios'
import Contactanos from './components/Contactanos'
import Footer from './components/Footer'


function App() {
  return (
    <div>
        <NavHome/>
        <Home/>
        <Nosotros/>
        <Testimonio/>
        <Departamentos/>
        <Servicios/>
        <Contactanos/>
        <Footer/>
    </div>
  )
}

export default App
