import { HomeIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import candela from '../assets/lacandela.jpeg'
const features = [
  {
    name: 'Departamentos',
    description:
      'Cada rincón de nuestros departamentos ha sido minuciosamente diseñado para ofrecer un espacio excepcional donde la calidad y la atención al detalle son primordiales.',
    icon: HomeIcon,
  },
  {
    name: 'Seguridad',
    description: 'Tu tranquilidad es nuestra misión, y trabajamos incansablemente para que te sientas resguardado en cada momento que pases en nuestros departamentos.',
    icon: LockClosedIcon,
  }
]

export default function Example() {
  return (
    <div id='NOSOTROS' className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">LA CANDELA</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">SOBRE NOSOTROS</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Nuestros departamentos, cuidadosamente diseñados, ofrecen un espacio excepcional para disfrutar en cada rincón. En La Candela, la excelencia es nuestro compromiso, reflejado en la calidad de los servicios que proporcionamos, desde seguridad y privacidad hasta amenidades que mejoran tu día a día. Nuestro objetivo es crear un ambiente que te haga sentir en casa, con cada detalle pensado para tu bienestar y satisfacción.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={candela}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
