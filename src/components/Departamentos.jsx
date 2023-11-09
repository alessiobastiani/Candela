/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import casaUno from '../assets/casa1.jpeg'
import casaDos from '../assets/casa2.jpeg'
import casaTres from '../assets/casa3.jpeg'

const callouts = [
    {
      name: 'Todas las comodidades',
      imageSrc: casaUno,
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    },
    {
      name: 'Amplios y seguros',
      imageSrc: casaDos,
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    },
    {
      name: 'Cerca de la playa',
      imageSrc: casaTres,
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    },
  ]
  
  export default function Example() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Nuestros Departamentos</h2>
            <p>Disponemos de dos amplios dúplex, diseñados para alojar hasta seis personas, lo que los convierte en la elección perfecta para familias numerosas o grupos de amigos que desean compartir su estadía en la costa de Buenos Aires. Además, contamos con cuatro departamentos ideales para grupos más pequeños, con capacidad para hasta cuatro personas.</p>
            <p>Ya sea que estés buscando un alojamiento espacioso para una escapada familiar o un acogedor rincón para una escapada en pareja, tenemos la opción perfecta para ti en nuestro complejo.</p>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  