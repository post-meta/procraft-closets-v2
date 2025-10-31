import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, CheckCircle, ArrowRight, Users, Clock, Award, Lightbulb, Palette, Ruler, Wrench, Star } from 'lucide-react';

export default function Service2Page() {
  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Expert Design Consultation",
      description: "Work with our experienced designers to create the perfect custom closet solution tailored to your specific needs and style preferences."
    },
    {
      icon: <Palette className="w-8 h-8 text-blue-600" />,
      title: "Premium Material Selection",
      description: "Choose from high-quality materials including solid wood, engineered wood, and premium hardware options to match your home's aesthetic."
    },
    {
      icon: <Ruler className="w-8 h-8 text-blue-600" />,
      title: "Maximized Storage Space",
      description: "Custom-designed layouts that optimize every inch of your closet space with intelligent storage solutions and organizational systems."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Professional Installation",
      description: "Our certified installers ensure perfect fit and finish with attention to detail and minimal disruption to your daily routine."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Lifetime Warranty",
      description: "All custom closet installations come with comprehensive warranty coverage for materials and workmanship."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "Smart Organization Features",
      description: "Innovative storage solutions including pull-out drawers, adjustable shelving, and specialty accessories for optimal organization."
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Schedule a free in-home consultation where we assess your space, discuss your needs, and explore design possibilities."
    },
    {
      step: 2,
      title: "Custom Design & Planning",
      description: "Our designers create detailed 3D renderings and plans, allowing you to visualize your new custom closet before installation."
    },
    {
      step: 3,
      title: "Material Selection",
      description: "Choose from our extensive selection of premium materials, finishes, hardware, and accessories to match your style."
    },
    {
      step: 4,
      title: "Precision Manufacturing",
      description: "Your custom closet components are manufactured to exact specifications using state-of-the-art equipment and quality materials."
    },
    {
      step: 5,
      title: "Professional Installation",
      description: "Our certified installation team handles the complete installation process, ensuring perfect fit and finish."
    },
    {
      step: 6,
      title: "Final Inspection & Training",
      description: "We conduct a thorough inspection and provide guidance on how to maximize your new custom closet system."
    }
  ];

  const pricingTiers = [
    {
      name: "Essential Custom",
      priceRange: "$1,200 - $2,500",
      features: [
        "Basic custom design consultation",
        "Standard shelving and hanging systems",
        "Choice of 3 finish options",
        "Basic hardware package",
        "Professional installation",
        "1-year warranty"
      ],
      bestFor: "Small to medium closets with straightforward storage needs"
    },
    {
      name: "Premium Custom",
      priceRange: "$2,500 - $4,500",
      features: [
        "Comprehensive design consultation",
        "Advanced storage solutions",
        "Choice of 8 premium finishes",
        "Upgraded hardware package",
        "Specialty accessories included",
        "Professional installation",
        "3-year warranty"
      ],
      bestFor: "Master bedrooms and luxury closet spaces",
      popular: true
    },
    {
      name: "Luxury Custom",
      priceRange: "$4,500 - $8,000+",
      features: [
        "Complete luxury design experience",
        "Premium materials and finishes",
        "Unlimited finish options",
        "Designer hardware collection",
        "Full accessory package",
        "White-glove installation service",
        "Lifetime warranty"
      ],
      bestFor: "High-end homes and walk-in closet suites"
    }
  ];

  const faqs = [
    {
      question: "How long does the custom closet design and installation process take?",
      answer: "The complete process typically takes 3-5 weeks from initial consultation to final installation. This includes 1-2 weeks for design and planning, 2-3 weeks for manufacturing, and 1-2 days for professional installation."
    },
    {
      question: "Can you work with existing closet spaces or do you only do new construction?",
      answer: "We specialize in transforming existing closet spaces of all sizes. Our designers are experts at maximizing storage in any space, from small reach-in closets to large walk-in suites."
    },
    {
      question: "What materials and finishes are available for custom closets?",
      answer: "We offer a wide range of premium materials including solid wood, engineered wood, and laminate options. Finish choices include painted, stained, and specialty finishes in dozens of colors to match any décor."
    },
    {
      question: "Do you provide design services, or do I need to have a plan ready?",
      answer: "We provide complete design services! Our experienced designers will work with you to create the perfect layout and storage solutions based on your specific needs, space, and style preferences."
    },
    {
      question: "What warranty coverage is included with custom closet installation?",
      answer: "All installations include comprehensive warranty coverage ranging from 1 year to lifetime depending on the package selected. This covers both materials and workmanship for complete peace of mind."
    },
    {
      question: "Can you accommodate special storage needs for specific items?",
      answer: "Absolutely! We specialize in creating custom storage solutions for jewelry, shoes, ties, belts, and other specialty items. Our designers can incorporate any specific storage requirements into your custom design."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PC</span>
              </div>
              <span className="text-xl font-bold text-gray-900">ProCraft Closets</span>
            </Link>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Seattle, WA</span>
              </div>
              <a 
                href="tel:(206) 555-0100"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">(206) 555-0100</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Custom Closet Design & Installation
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your storage space with expertly designed custom closets tailored to your lifestyle. 
              Professional design consultation, premium materials, and flawless installation in Seattle, WA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(206) 555-0100"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </a>
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                View Pricing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Custom Closet Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference of professionally designed and installed custom closets 
              that maximize space, enhance organization, and add value to your home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Custom Closet Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final installation, we guide you through every step 
              of creating your perfect custom closet solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Custom Closet Pricing Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the custom closet package that best fits your needs and budget. 
              All packages include professional design consultation and installation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`rounded-lg p-8 ${tier.popular ? 'bg-blue-50 border-2 border-blue-200 relative' : 'bg-gray-50 border border-gray-200'}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">Most Popular</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">{tier.priceRange}</p>
                <p className="text-gray-600 mb-6">{tier.bestFor}</p>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="tel:(206) 555-0100"
                  className={`block w-full text-center px-6 py-3 rounded-md font-medium transition-colors ${
                    tier.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Get Quote
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              *Pricing varies based on closet size, materials selected, and complexity of design. 
              Free in-home consultation includes detailed quote.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">