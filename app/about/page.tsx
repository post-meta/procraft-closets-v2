import React from 'react';
import { MapPin, Award, Users, Wrench, Clock, Star } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About ProCraft Closets
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seattle's premier custom closet design and installation company, transforming homes 
              one closet at a time since 2015.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2015 by Seattle natives Mark and Sarah Thompson, ProCraft Closets 
                  began as a solution to their own home organization challenges. After struggling 
                  to find quality, affordable custom closet solutions in the Pacific Northwest, 
                  they decided to create their own.
                </p>
                <p>
                  What started as a small operation in their garage has grown into Seattle's 
                  most trusted closet design company, serving hundreds of satisfied customers 
                  across the greater Seattle area. We've maintained our commitment to quality 
                  craftsmanship, personalized service, and supporting our local community.
                </p>
                <p>
                  Today, ProCraft Closets is proud to be a locally-owned business that understands 
                  the unique needs of Pacific Northwest homes, from cozy Capitol Hill apartments 
                  to spacious Bellevue estates.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Wrench className="h-16 w-16 mx-auto mb-4" />
                <p>Founders Mark & Sarah Thompson</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to creating organized, beautiful spaces that enhance your daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To transform Seattle homes through innovative custom closet solutions that maximize 
                space, enhance organization, and reflect each homeowner's unique style and needs. 
                We believe that an organized home leads to an organized life.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  Quality craftsmanship in every project
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  Exceptional customer service
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  Supporting our local Seattle community
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  Honest, transparent business practices
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to bringing your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-16 w-16 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mark Thompson</h3>
              <p className="text-blue-600 mb-3">Co-Founder & Lead Designer</p>
              <p className="text-gray-600 text-sm">
                15+ years in custom carpentry and design. Mark brings creative vision and 
                technical expertise to every project.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-16 w-16 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Thompson</h3>
              <p className="text-blue-600 mb-3">Co-Founder & Operations Manager</p>
              <p className="text-gray-600 text-sm">
                Former interior designer with a passion for organization and customer service. 
                Sarah ensures every project exceeds expectations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-16 w-16 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Installation Team</h3>
              <p className="text-blue-600 mb-3">Certified Craftsmen</p>
              <p className="text-gray-600 text-sm">
                Our skilled installation team consists of licensed professionals with extensive 
                experience in custom closet systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose ProCraft Closets?</h2>
            <p className="text-xl text-gray-600">
              Experience the difference that local expertise and personalized service make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Expertise</h3>
              <p className="text-gray-600 text-sm">
                Seattle-based team that understands Pacific Northwest homes and lifestyles.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Materials</h3>
              <p className="text-gray-600 text-sm">
                Premium materials and hardware sourced from trusted suppliers for lasting durability.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">On-Time Delivery</h3>
              <p className="text-gray-600 text-sm">
                We respect your schedule with prompt consultations and efficient installations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lifetime Warranty</h3>
              <p className="text-gray-600 text-sm">
                We stand behind our work with comprehensive warranties on all installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <p className="text-xl text-gray-600 mb-8">
              Proudly serving the greater Seattle metropolitan area and surrounding communities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-900">Seattle</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-900">Bellevue</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-900">Redmond</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-900">Kirkland</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-900">Bothell</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-900">Renton</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-900">Tacoma</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-900">Everett</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-900">Federal Way</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-900">Kent</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-900">Issaquah</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-900">Sammamish</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Don't see your area listed? Contact us to discuss service availability in your location.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied Seattle homeowners who have trusted ProCraft Closets 
            with their custom storage solutions.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}