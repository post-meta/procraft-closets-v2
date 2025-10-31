import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    id: 'service-1',
    title: 'Custom Closet Design',
    description: 'Transform your space with our premium custom closet solutions. Our expert designers create personalized storage systems tailored to your lifestyle and space requirements.',
    image: '/images/custom-closet-design.jpg',
    features: ['3D Design Consultation', 'Premium Materials', 'Lifetime Warranty']
  },
  {
    id: 'service-2',
    title: 'Closet Organization Systems',
    description: 'Maximize your storage efficiency with our innovative organization systems. From shoe racks to jewelry drawers, we provide comprehensive solutions for all your belongings.',
    image: '/images/closet-organization.jpg',
    features: ['Adjustable Shelving', 'Drawer Systems', 'Accessory Storage']
  },
  {
    id: 'service-3',
    title: 'Closet Installation & Renovation',
    description: 'Professional installation and renovation services to bring your dream closet to life. Our certified installers ensure perfect fit and finish for your custom storage solution.',
    image: '/images/closet-installation.jpg',
    features: ['Expert Installation', 'Quality Assurance', '30-Day Guarantee']
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ProCraft Closets Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Professional closet design, organization, and installation services 
              to transform your storage spaces into beautiful, functional solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <svg
                          className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-3">
                  <Link
                    href={`/services/${service.id}`}
                    className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 border-2 border-blue-600 text-blue-600 text-center py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Closet?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact ProCraft Closets today for a free consultation and discover 
              how we can create the perfect storage solution for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}