import React from 'react'
import logo2 from '../assets/logo2.png'
import Derechos from './Derechos'

const Footer = () => {
  const handleWhatsAppButtonClick = () => {
    const phoneNumber = '5491133833397'; // Reemplaza con tu número de WhatsApp
    const message = 'Hola, estoy interesado en departamentos La Candela.';
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
    window.location.href = whatsappLink;
  };
  const handleHotmailButtonClick = () => {
    const email = 'llanosconstrucciones@hotmail.com';
    window.location.href = `mailto:${email}`;
  };
  
  return (
    <div className='seccion-footer'>

    <div className='contenedor-footer d-flex'>
    <div className='redes'>
        <button onClick={handleWhatsAppButtonClick} className="cssbuttons-io-button">
          
        Whastapp
            <div className="icon">
        <svg
          height="24"
          width="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            fill="currentColor"
            ></path>
        </svg>
                </div>
            </button>
            <button onClick={handleHotmailButtonClick} className="cssbuttons-io-button" >
      Hotmail
      <div className="icon">
        <svg
          height="24"
          width="20"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            fill="currentColor"
            ></path>
        </svg>
      </div>
    </button>
        </div>
        <div className='logo-f'>
            <img src={logo2} alt="" />
        </div>
        <div className='direc'>
            <p>Tel: 54 9 11 3383-3397</p>
            <p>Direccion: Buenos aires</p>
        </div>
    </div>
        <Derechos/>
    </div>
  )
}

export default Footer