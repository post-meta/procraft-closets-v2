import React from 'react';
import { MapPin, Users, Award, Clock, Shield, Wrench } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About ProCraft Closets
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Transforming Seattle homes with custom closet solutions since 2015. 
              We're your trusted local partner for premium storage and organization systems.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-slate-600 mb-6">
                ProCraft Closets was founded in 2015 by Seattle natives who understood the unique storage 
                challenges of Pacific Northwest homes. From compact downtown condos to sprawling Eastside estates, 
                we recognized that every Seattle home deserved thoughtfully designed storage solutions.
              </p>
              <p className="text-slate-600 mb-6">
                What started as a small family business has grown into the region's most trusted closet 
                design and installation company. We've completed over 2,500 projects across the greater 
                Seattle area, earning our reputation through quality craftsmanship and exceptional service.
              </p>
              <p className="text-slate-600">
                Today, we continue to call Seattle home, serving our neighbors with the same dedication 
                to quality and attention to detail that established our reputation in the community.
              </p>
            </div>
            <div className="bg-slate-100 p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-slate-900">2,500+</div>
                  <div className="text-slate-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">8+</div>
                  <div className="text-slate-600">Years Serving Seattle</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">98%</div>
                  <div className="text-slate-600">Customer Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">15+</div>
                  <div className="text-slate-600">Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission & Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We're committed to transforming homes and lives through exceptional storage solutions, 
              backed by unwavering integrity and local expertise.
            </p>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4 text-center">Our Mission</h3>
            <p className="text-lg text-slate-600 text-center max-w-4xl mx-auto">
              To create beautifully organized spaces that enhance our customers' daily lives while 
              supporting the Seattle community through quality craftsmanship, honest business practices, 
              and exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-slate-900 mb-3">Integrity</h4>
              <p className="text-slate-600">
                We build lasting relationships through honest communication, transparent pricing, 
                and reliable service you can count on.
              </p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-slate-900 mb-3">Excellence</h4>
              <p className="text-slate-600">
                Every project reflects our commitment to superior craftsmanship and attention 
                to detail that exceeds expectations.
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-slate-900 mb-3">Community</h4>
              <p className="text-slate-600">
                As proud Seattle residents, we're invested in our community's success and 
                support local suppliers and craftspeople.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our experienced team of designers and craftspeople brings decades of combined 
              experience to every project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-16 h-16 text-slate-400" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Design Team</h4>
              <p className="text-slate-600">
                Certified designers with expertise in space planning and custom storage solutions 
                for Pacific Northwest homes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Wrench className="w-16 h-16 text-slate-400" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Installation Specialists</h4>
              <p className="text-slate-600">
                Licensed and insured craftspeople who ensure precise installation and 
                exceptional attention to detail.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-16 h-16 text-slate-400" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Customer Care</h4>
              <p className="text-slate-600">
                Dedicated support team ensuring smooth communication and complete satisfaction 
                from consultation to completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose ProCraft Closets</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Experience the difference of working with Seattle's premier closet design company.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Local Expertise</h4>
              <p className="text-slate-600">
                Deep understanding of Seattle home styles and storage challenges.
              </p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Premium Materials</h4>
              <p className="text-slate-600">
                High-quality, sustainable materials built to withstand our Pacific Northwest climate.
              </p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Guaranteed Quality</h4>
              <p className="text-slate-600">
                Comprehensive warranty and 100% satisfaction guarantee on all installations.
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Personal Service</h4>
              <p className="text-slate-600">
                One-on-one consultation and support throughout your entire project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Service Areas</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Proudly serving the greater Seattle metropolitan area with professional 
              closet design and installation services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-semibold text-slate-900">Primary Service Areas</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-slate-600">
                <ul className="space-y-2">
                  <li>• Seattle</li>
                  <li>• Bellevue</li>
                  <li>• Redmond</li>
                  <li>• Kirkland</li>
                  <li>• Mercer Island</li>
                  <li>• Sammamish</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Issaquah</li>
                  <li>• Renton</li>
                  <li>• Bothell</li>
                  <li>• Woodinville</li>
                  <li>• Shoreline</li>
                  <li>• Edmonds</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-100 p-8 rounded-lg">
              <h4 className="text-xl font-semibold text-slate-900 mb-4">Service Commitment</h4>
              <p className="text-slate-600 mb-4">
                We provide comprehensive closet services throughout King County and select 
                areas of Snohomish County. Our local presence ensures:
              </p>
              <ul className="text-slate-600 space-y-2">
                <li>• Fast response times and flexible scheduling</li>
                <li>• Local building code knowledge and permit assistance</li>
                <li>• Ongoing support and warranty service</li>
                <li>• Relationships with regional suppliers for better pricing</li>
              </ul>
              <p className="text-slate-600 mt-4">
                <strong>Outside our primary area?</strong> Contact us to discuss your project. 
                We may still be able to help with larger installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied Seattle homeowners who trust ProCraft Closets 
            for their storage solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}