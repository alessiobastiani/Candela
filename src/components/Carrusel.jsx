import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import imgUno from '../assets/img.jpg'
import imgDos from '../assets/img2.jpg'
const Carrusel = () => {
  return (
    <Carousel>
    <Carousel.Item>
    <img className='img-carrusel' src={imgDos} alt="" />
    </Carousel.Item>
    <Carousel.Item>
    <img className='img-carrusel' src={imgUno} alt="" />
    </Carousel.Item>
  </Carousel>
  )
}

export default Carrusel