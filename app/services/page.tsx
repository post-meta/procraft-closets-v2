import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: 'service-1',
      title: 'Custom Walk-In Closets',
      description: 'Transform your master bedroom with a luxurious walk-in closet designed specifically for your space and storage needs. Our custom solutions maximize every inch while maintaining elegant aesthetics.',
      features: [
        'Personalized design consultation',
        'Premium materials and finishes',
        'Adjustable shelving systems',
        'Integrated lighting solutions'
      ],
      image: '/images/walk-in-closet.jpg',
      href: '/services/custom-walk-in-closets'
    },
    {
      id: 'service-2',
      title: 'Reach-In Closet Organization',
      description: 'Maximize the potential of your reach-in closets with smart storage solutions that double your usable space. Perfect for bedrooms, hallways, and guest rooms.',
      features: [
        'Space optimization analysis',
        'Custom shelving and drawers',
        'Hanging rod configurations',
        'Shoe and accessory storage'
      ],
      image: '/images/reach-in-closet.jpg',
      href: '/services/reach-in-closet-organization'
    },
    {
      id: 'service-3',
      title: 'Pantry & Storage Solutions',
      description: 'Create organized and functional pantries, laundry rooms, and storage areas that make daily life easier. From kitchen pantries to utility room organization.',
      features: [
        'Pull-out drawers and baskets',
        'Adjustable pantry shelving',
        'Corner storage solutions',
        'Easy-access organization systems'
      ],
      image: '/images/pantry-storage.jpg',
      href: '/services/pantry-storage-solutions'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              ProCraft Closets specializes in creating custom storage solutions that transform your space and simplify your life. Discover our comprehensive range of services designed to meet your unique needs.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 3a1 1 0 000 2h.01a1 1 0 100-2H5zm0 3a1 1 0 000 2h.01a1 1 0 100-2H5zm0 3a1 1 0 100 2h.01a1 1 0 100-2H5zm4-6a1 1 0 000 2h6a1 1 0 100-2H9zm0 3a1 1 0 100 2h6a1 1 0 100-2H9zm0 3a1 1 0 100 2h6a1 1 0 100-2H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={service.href}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-center font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-center font-medium hover:bg-gray-50 transition-colors duration-200"
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
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact ProCraft Closets today for a free consultation and discover how we can create the perfect storage solution for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Free Consultation
              </Link>
              <Link
                href="/portfolio"
                className="border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}