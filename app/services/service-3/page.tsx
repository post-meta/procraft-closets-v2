import React from 'react';
import { CheckCircle, ArrowRight, Phone, MapPin, Clock, Star, Wrench, Palette, Shield, Award } from 'lucide-react';

export default function Service3Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">ProCraft Closets</h1>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Seattle, WA</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>(206) 555-0100</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Professional Closet Repair & Restoration</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Breathe new life into your existing closets with our expert repair and restoration services. 
            From broken shelves to complete makeovers, we restore functionality and beauty to your storage spaces.
          </p>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 mr-1" />
              <span>4.9/5 Rating</span>
            </div>
            <span>•</span>
            <span>500+ Repairs Completed</span>
            <span>•</span>
            <span>Licensed & Insured</span>
          </div>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg text-lg transition-colors">
            Get Free Repair Assessment
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Our Repair Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Save money and extend the life of your closets with professional repair and restoration services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Wrench className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Expert Craftsmanship</h3>
              <p className="text-gray-600">
                Our skilled technicians have years of experience repairing all types of closet systems, 
                from basic wire shelving to high-end custom installations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Cost-Effective Solution</h3>
              <p className="text-gray-600">
                Repair costs typically 40-60% less than replacement. We help you maximize your investment 
                while achieving like-new functionality and appearance.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Quick Turnaround</h3>
              <p className="text-gray-600">
                Most repairs completed within 24-48 hours. We understand the importance of functional 
                storage and work efficiently to restore your closets.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Palette className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Restoration Services</h3>
              <p className="text-gray-600">
                Beyond repairs, we offer complete restoration including refinishing, hardware updates, 
                and modernization of older closet systems.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Quality Guarantee</h3>
              <p className="text-gray-600">
                All repairs backed by our comprehensive warranty. We stand behind our work and 
                ensure lasting solutions for your closet issues.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Same-Day Service</h3>
              <p className="text-gray-600">
                Emergency repair services available. We offer same-day appointments for urgent 
                closet repairs and safety issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Repair Process</h2>
            <p className="text-xl text-gray-600">Simple, transparent, and efficient repair service from start to finish</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Initial Assessment</h3>
                  <p className="text-gray-600 text-lg">
                    We conduct a thorough inspection of your closet system to identify all issues, assess damage, 
                    and determine the most cost-effective repair approach. Free on-site evaluation included.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Detailed Estimate</h3>
                  <p className="text-gray-600 text-lg">
                    Receive a comprehensive written estimate detailing all necessary repairs, materials needed, 
                    and timeline. We explain each repair and answer all your questions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Professional Repair</h3>
                  <p className="text-gray-600 text-lg">
                    Our certified technicians perform all repairs using high-quality materials and proven techniques. 
                    We work efficiently while maintaining the highest standards of workmanship.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">4</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Quality Inspection</h3>
                  <p className="text-gray-600 text-lg">
                    Every repair undergoes rigorous quality control testing. We ensure proper functionality, 
                    stability, and safety before considering the job complete.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">5</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Final Walkthrough & Warranty</h3>
                  <p className="text-gray-600 text-lg">
                    We conduct a final walkthrough with you to ensure complete satisfaction. All repairs come 
                    with our comprehensive warranty and maintenance recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Repair Pricing Guide</h2>
            <p className="text-xl text-gray-600">Transparent pricing for common closet repairs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Basic Repairs</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-blue-600">$75-200</span>
                <p className="text-gray-600 mt-2">Per repair item</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Shelf bracket replacement</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Rod support repair</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Minor hardware fixes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Drawer slide replacement</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Door adjustment</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
                Schedule Basic Repair
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 border-4 border-blue-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">MOST POPULAR</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Comprehensive Repairs</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-blue-600">$300-800</span>
                <p className="text-gray-600 mt-2">Per closet system</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Multiple component repairs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Structural reinforcement</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Hardware upgrades</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Minor modifications</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Surface restoration</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
                Get Comprehensive Quote
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Full Restoration</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-blue-600">$800-2000</span>
                <p className="text-gray-600 mt-2">Complete makeover</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle