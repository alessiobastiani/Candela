
import React from 'react';
const WhatsAppButton = () => {
  const phoneNumber = '5491133833397'; // Reemplaza con tu número de WhatsApp
  const message = 'Hola, estoy interesado en departamentos La Candela.';
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: '1000',
  };

  return (
    <div className='btn-wsp'>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <ion-icon name="logo-whatsapp"></ion-icon>
      </a>
    </div>
  );
};

export default WhatsAppButton;