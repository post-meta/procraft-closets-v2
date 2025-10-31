import Image from 'next/image'
import Link from 'next/link'
import { CheckCircleIcon, PhoneIcon, MapPinIcon, ClockIcon, UserGroupIcon, CogIcon, PaintBrushIcon } from '@heroicons/react/24/outline'

export default function Service3Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                ProCraft Closets
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-gray-600">
                <MapPinIcon className="h-5 w-5 mr-2" />
                <span>Seattle, WA</span>
              </div>
              <div className="flex items-center text-gray-600">
                <PhoneIcon className="h-5 w-5 mr-2" />
                <a href="tel:(206) 555-0100" className="hover:text-blue-600">(206) 555-0100</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Custom Closet Design & Installation
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your storage space with our premium custom closet solutions. From initial design consultation to professional installation, we create personalized organizational systems that maximize space and enhance your daily routine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
                  Get Free Design Consultation
                </Link>
                <a href="tel:(206) 555-0100" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center">
                  Call (206) 555-0100
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/api/placeholder/600/400"
                alt="Custom closet design and installation in Seattle"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircleIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Licensed & Insured</p>
                    <p className="text-sm text-gray-600">Seattle Professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose ProCraft for Your Custom Closet?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference of working with Seattle's premier custom closet specialists
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <PaintBrushIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Design</h3>
              <p className="text-gray-600">
                Every closet is uniquely designed to match your style, space, and storage needs with 3D visualization
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CogIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Materials</h3>
              <p className="text-gray-600">
                High-quality wood, hardware, and finishes that ensure durability and long-lasting beauty
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Installation</h3>
              <p className="text-gray-600">
                Professional installation team with years of experience and attention to detail
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Turnaround</h3>
              <p className="text-gray-600">
                Most projects completed within 2-3 weeks from design approval to installation
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lifetime Warranty</h3>
              <p className="text-gray-600">
                Comprehensive warranty on all materials and workmanship for complete peace of mind
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPinIcon className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Seattle Team</h3>
              <p className="text-gray-600">
                Seattle-based professionals who understand local homes and design preferences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Custom Closet Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion in five simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Initial Consultation</h3>
              <p className="text-gray-600 text-sm">
                Free in-home consultation to assess your space, discuss needs, and explore design options
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">3D Design</h3>
              <p className="text-gray-600 text-sm">
                Custom 3D design creation with detailed measurements and material specifications
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Approval & Order</h3>
              <p className="text-gray-600 text-sm">
                Review and approve final design, then we order premium materials and begin production
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Manufacturing</h3>
              <p className="text-gray-600 text-sm">
                Precision manufacturing of your custom closet components using premium materials
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Installation</h3>
              <p className="text-gray-600 text-sm">
                Professional installation with minimal disruption and complete cleanup
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Custom Closet Pricing Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for every budget and closet size
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Essential</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">$800 - $1,500</div>
              <p className="text-gray-600 mb-6">Perfect for reach-in closets</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">Basic shelving system</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">Single hanging rod</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">Standard laminate finish</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">Professional installation</span>
                </li>
              </ul>
              <Link href="#contact" className="block w-full bg-gray-100 text-gray-900 text-center py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Get Quote
              </Link>
            </div>
            
            <div className="border-2 border-blue-500 rounded-lg p-8 hover:shadow-lg transition-shadow relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">$1,500 - $3,000</div>
              <p className="text-gray-600 mb-6">Ideal for walk-in closets</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">Custom shelving & drawers</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5