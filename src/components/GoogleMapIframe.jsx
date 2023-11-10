// GoogleMapIframe.js
import React from 'react';

const GoogleMapIframe = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.876790877539!2d-56.708961599999995!3d-36.3879766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c1b8589bb85bb%3A0x2cbf193d22980dbe!2sLa%20Candela%20Duplex!5e0!3m2!1ses-419!2sar!4v1699642411172!5m2!1ses-419!2sar"
      width="100%"
      height="500"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default GoogleMapIframe;
