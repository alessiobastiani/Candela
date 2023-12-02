import React, { useState, useEffect } from 'react';
import NavHome from "./components/NavHome";
import Home from "./components/Home";
import Nosotros from "./components/Features";
import Testimonio from "./components/Testimonio";
import Departamentos from './components/Departamentos';
import Servicios from './components/Servicios';
import Contactanos from './components/Contactanos';
import Footer from './components/Footer';
import WhatsAppButton from "./components/WhasAppButton";
import GoogleMapIframe from "./components/GoogleMapIframe";
import Loader from './components/Loader'
import ReactPlayer from 'react-player';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una carga asincrónica
    const fakeAsyncLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 4000); // Ajusta el tiempo según tus necesidades
    };

    fakeAsyncLoad();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavHome/>
          <Home/>
          <Nosotros/>
          <Testimonio/>
          <Departamentos/>
          <GoogleMapIframe/>
          <Servicios/>
          <Contactanos/>
          <Footer/>
          <WhatsAppButton/>
          <ReactPlayer
            url="/src/assets/musiquita.mp3"
            playing={true} // Iniciar la reproducción automáticamente
            loop={true} // Reproducir de manera infinita
            volume={0.5} // Ajusta el volumen según tus necesidades
          />
        </>
      )}
    </div>
  );
}

export default App;
