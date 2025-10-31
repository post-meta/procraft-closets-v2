'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckIcon, 
  StarIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClockIcon,
  CurrencyDollarIcon,
  Cog6ToothIcon,
  PaintBrushIcon,
  SwatchIcon
} from '@heroicons/react/24/outline';

export default function Service2Page() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const benefits = [
    {
      title: "Custom Design Solutions",
      description: "Tailored closet systems designed specifically for your space and lifestyle needs.",
      icon: <PaintBrushIcon className="h-8 w-8" />
    },
    {
      title: "Premium Materials",
      description: "High-quality wood, metal, and composite materials that ensure durability and longevity.",
      icon: <SwatchIcon className="h-8 w-8" />
    },
    {
      title: "Professional Installation",
      description: "Expert installation by certified professionals with attention to every detail.",
      icon: <Cog6ToothIcon className="h-8 w-8" />
    },
    {
      title: "Lifetime Warranty",
      description: "Comprehensive warranty coverage on all materials and craftsmanship.",
      icon: <CheckIcon className="h-8 w-8" />
    },
    {
      title: "Maximized Storage",
      description: "Intelligent design that doubles or triples your existing storage capacity.",
      icon: <CurrencyDollarIcon className="h-8 w-8" />
    },
    {
      title: "Quick Turnaround",
      description: "Most projects completed within 2-3 weeks from design approval to installation.",
      icon: <ClockIcon className="h-8 w-8" />
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Free Consultation",
      description: "We visit your home to assess your space, discuss your needs, and take precise measurements.",
      duration: "1-2 hours"
    },
    {
      step: "02", 
      title: "Custom Design",
      description: "Our designers create a detailed 3D rendering of your custom closet system with material selections.",
      duration: "3-5 days"
    },
    {
      step: "03",
      title: "Manufacturing",
      description: "Your closet components are precision-crafted in our local Seattle facility using premium materials.",
      duration: "7-10 days"
    },
    {
      step: "04",
      title: "Professional Installation",
      description: "Our certified installers complete your project with minimal disruption to your daily routine.",
      duration: "1-2 days"
    }
  ];

  const pricingTiers = [
    {
      name: "Essential",
      price: "$1,200 - $2,500",
      description: "Perfect for small to medium walk-in closets",
      features: [
        "Basic shelving and hanging rods",
        "Melamine finish options",
        "Standard accessories included",
        "Professional installation",
        "5-year warranty"
      ]
    },
    {
      name: "Premium",
      price: "$2,500 - $4,500", 
      description: "Ideal for larger closets with advanced features",
      features: [
        "Custom shelving and drawers",
        "Wood veneer finish options",
        "Premium hardware and accessories",
        "LED lighting integration",
        "10-year warranty"
      ],
      popular: true
    },
    {
      name: "Luxury",
      price: "$4,500 - $8,000+",
      description: "Ultimate solution for master bedroom suites",
      features: [
        "Fully custom design with islands",
        "Solid wood or high-end finishes",
        "Premium soft-close hardware",
        "Full lighting and electrical",
        "Lifetime warranty"
      ]
    }
  ];

  const faqs = [
    {
      question: "How long does the entire process take from consultation to completion?",
      answer: "Typically, the entire process takes 2-3 weeks. This includes 3-5 days for design development, 7-10 days for manufacturing, and 1-2 days for installation. We'll provide you with a detailed timeline during your consultation."
    },
    {
      question: "Do you work with existing closet spaces or can you expand them?",
      answer: "We work with both existing closet spaces and can help with expansions. Our team can remove walls, add lighting, and completely reconfigure your space. We'll discuss all possibilities during your free consultation."
    },
    {
      question: "What materials and finishes are available?",
      answer: "We offer a wide range of materials including melamine, wood veneer, and solid wood options. Finishes range from classic whites and neutrals to rich wood tones and contemporary colors. We'll show you samples during your consultation."
    },
    {
      question: "Is financing available for larger projects?",
      answer: "Yes, we offer flexible financing options including 0% interest for qualified customers. We work with several financing partners to make your dream closet affordable with manageable monthly payments."
    },
    {
      question: "What happens if I'm not satisfied with the final result?",
      answer: "Customer satisfaction is our top priority. We offer a 30-day satisfaction guarantee. If you're not completely happy with your new closet, we'll work with you to make it right at no additional cost."
    },
    {
      question: "Do you provide warranty coverage?",
      answer: "Yes, all our work comes with comprehensive warranty coverage. Essential packages include 5 years, Premium packages include 10 years, and Luxury packages include lifetime warranty on materials and craftsmanship."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Custom Walk-In Closets
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your bedroom with a luxurious, organized walk-in closet designed specifically for your lifestyle and storage needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:(206) 555-0100"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center gap-2"
              >
                <PhoneIcon className="h-5 w-5" />
                (206) 555-0100
              </a>
              <button className="bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose ProCraft for Your Walk-In Closet?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that professional design and quality craftsmanship make in creating your dream closet space.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final installation, we make the process seamless and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-2">
                  {step.description}
                </p>
                <span className="text-sm text-blue-600 font-semibold">
                  {step.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Investment Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect package for your space and budget. All prices include design, materials, and professional installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow relative ${
                  tier.popular ? 'ring-2 ring-blue-600' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {tier.name}
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {tier.price}
                  </div>
                  <p className="text-gray-600">
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  tier.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-slate-900'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              *Final pricing depends on specific dimensions, materials, and customizations. Free in-home consultation includes detailed quote.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-green-500" />
                0% Financing Available
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-green-500" />
                Free Design Service
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-green-500" />
                Licensed & Insured
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our walk-in closet services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-gray-400">
                    {openFAQ === index ? '