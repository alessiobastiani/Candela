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
import Loader from './components/Loader';
import musicFile from './assets/musiquita.mp3';

function App() {
  const [loading, setLoading] = useState(true);
  const [musicMuted, setMusicMuted] = useState(true);

  useEffect(() => {
    // Simula una carga asincrónica
    const fakeAsyncLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 4000); // Ajusta el tiempo según tus necesidades

      // Inicia la reproducción de la música después de la carga inicial
      setMusicMuted(false);
    };

    fakeAsyncLoad();
  }, []);

  useEffect(() => {
    const handleUserInteraction = () => {
      // Iniciar la reproducción de la música cuando el usuario interactúa
      setMusicMuted(false);
      // Eliminar el event listener después de la interacción para evitar múltiples reproducciones
      document.removeEventListener('click', handleUserInteraction);
    };

    // Agregar un event listener para detectar la interacción del usuario
    document.addEventListener('click', handleUserInteraction);

    // Limpiar el event listener al desmontar el componente
    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
<audio className='audioWithBackground' controls autoPlay loop>
  <source src={musicFile} type="audio/mp3" />
</audio>

          <NavHome />
          <Home />

          <Nosotros />
          <Testimonio />
          <Departamentos />
          <GoogleMapIframe />
          <Servicios />
          <Contactanos />
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </div>
  );
}

export default App;
