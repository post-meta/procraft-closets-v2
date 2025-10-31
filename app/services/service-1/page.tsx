import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckIcon, ArrowRightIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Custom Walk-In Closets - ProCraft Closets Seattle',
  description: 'Transform your space with luxury custom walk-in closets in Seattle. Professional design, premium materials, lifetime warranty. Free consultation available.',
}

export default function Service1Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-amber-400">
              ProCraft Closets
            </Link>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPinIcon className="h-5 w-5" />
                <span>Seattle, WA</span>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="h-5 w-5" />
                <a href="tel:(206)555-0100" className="hover:text-amber-400">(206) 555-0100</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Custom Walk-In Closets
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your bedroom into a luxury suite with our custom walk-in closet solutions. 
                Maximize storage, enhance organization, and create your personal dressing room sanctuary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                  Get Free Consultation
                </button>
                <button className="border-2 border-gray-300 hover:border-amber-600 text-gray-700 px-8 py-4 rounded-lg font-semibold transition-colors">
                  View Gallery
                </button>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src="/api/placeholder/600/500"
                alt="Luxury walk-in closet with custom shelving and lighting"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Custom Walk-In Closets?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the ultimate in storage luxury with benefits that transform your daily routine
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏠",
                title: "Maximize Space Efficiency",
                description: "Utilize every square inch with custom layouts designed specifically for your room dimensions and storage needs."
              },
              {
                icon: "✨",
                title: "Luxury Hotel Experience",
                description: "Create a five-star hotel experience in your own home with premium finishes and professional organization."
              },
              {
                icon: "👔",
                title: "Perfect Organization",
                description: "Dedicated spaces for suits, dresses, shoes, accessories, and jewelry with specialized storage solutions."
              },
              {
                icon: "💡",
                title: "LED Lighting Integration",
                description: "Illuminate every corner with energy-efficient LED lighting that showcases your wardrobe beautifully."
              },
              {
                icon: "🪞",
                title: "Full-Length Mirrors",
                description: "Strategically placed mirrors create the illusion of more space while providing perfect outfit viewing."
              },
              {
                icon: "📈",
                title: "Increase Home Value",
                description: "Add significant value to your property with a luxury amenity that buyers actively seek."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our 5-Step Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final installation, we ensure a seamless experience
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Free In-Home Consultation",
                description: "Our design expert visits your home to assess the space, understand your needs, and discuss style preferences.",
                duration: "1-2 hours"
              },
              {
                step: "02",
                title: "Custom Design & 3D Rendering",
                description: "We create detailed 3D renderings showing exactly how your walk-in closet will look and function.",
                duration: "3-5 days"
              },
              {
                step: "03",
                title: "Material Selection & Approval",
                description: "Choose from premium wood finishes, hardware options, and accessories to match your style.",
                duration: "1-2 days"
              },
              {
                step: "04",
                title: "Precision Manufacturing",
                description: "Your closet components are crafted in our Seattle facility using premium materials and precise measurements.",
                duration: "2-3 weeks"
              },
              {
                step: "05",
                title: "Professional Installation",
                description: "Our certified installers complete your walk-in closet with attention to every detail and final quality check.",
                duration: "1-2 days"
              }
            ].map((process, index) => (
              <div key={index} className="flex gap-8 mb-12 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {process.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-2xl font-semibold text-gray-900">{process.title}</h3>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                      {process.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 text-lg">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Guide */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Investment Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for your custom walk-in closet investment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                tier: "Essential",
                price: "$3,500 - $6,000",
                size: "6' x 6' - 8' x 8'",
                features: [
                  "Basic shelving system",
                  "Single hanging rod",
                  "Shoe storage rack",
                  "Standard LED lighting",
                  "Melamine finish",
                  "Basic installation"
                ],
                popular: false
              },
              {
                tier: "Premium",
                price: "$6,000 - $12,000",
                size: "8' x 8' - 10' x 12'",
                features: [
                  "Custom shelving configuration",
                  "Double-tier hanging system",
                  "Pull-out drawers",
                  "Jewelry compartments",
                  "Motion-sensor lighting",
                  "Wood veneer finish",
                  "Full-length mirror",
                  "Premium installation"
                ],
                popular: true
              },
              {
                tier: "Luxury",
                price: "$12,000 - $25,000+",
                size: "10' x 12' and larger",
                features: [
                  "Fully custom design",
                  "Premium hardwood finish",
                  "Motorized features",
                  "Climate control integration",
                  "Custom seating area",
                  "Chandelier lighting",
                  "Safe integration",
                  "White-glove installation"
                ],
                popular: false
              }
            ].map((tier, index) => (
              <div key={index} className={`rounded-lg p-8 ${tier.popular ? 'bg-amber-50 border-2 border-amber-600' : 'bg-gray-50 border border-gray-200'}`}>
                {tier.popular && (
                  <div className="bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-medium text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.tier}</h3>
                <div className="text-3xl font-bold text-amber-600 mb-2">{tier.price}</div>
                <div className="text-gray-600 mb-6">{tier.size}</div>
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full mt-8 py-3 px-6 rounded-lg font-semibold transition-colors ${
                  tier.popular 
                    ? 'bg-amber-600 hover:bg-amber-700 text-white' 
                    : 'bg-white border-2 border-gray-300 hover:border-amber-600 text-gray-700'
                }`}>
                  Get Quote
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              All prices include design consultation, materials, and professional installation
            </p>
            <p className="text-sm text-gray-500">
              Final pricing depends on specific requirements, materials selected, and installation complexity
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about custom walk-in closets
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                question: "How much space do I need for a walk-in closet?",
                answer: "The minimum recommended space is 6' x 6' (36 square feet) for a basic walk-in closet. However, 8' x 8' or larger provides more comfortable movement and storage options. We can work with almost any space and create efficient solutions for smaller areas."
              },
              {
                question: "How long does the installation process take?",
                answer: "Most walk-in closet installations take 1-2 days depending on complexity. The entire process from consultation to completion typically takes 4-6 weeks, including design approval and manufacturing time."
              },
              {
                question: "Can you work around existing electrical and plumbing?",
                answer: "Yes, our designers are experienced in working around existing utilities. We can incorporate outlets, switches, and even plumbing fixtures into the design. We also coordinate with electricians if additional lighting circuits are needed."
              },
              {
                question: "What materials do you use for the closet systems?",
                answer: "We offer various materials including high-quality melamine, wood veneers, and solid hardwoods. All materials are moisture-resistant and designed for long-term durability. Hardware includes soft-close drawer slides and adjustable shelving systems."
              },
              {
                question: "Do you provide a warranty on your work?",
                answer: "Yes, we provide a comprehensive warranty: 10 years on all materials and craftsmanship, 5 years on hardware and accessories, and lifetime warranty on structural components. We also offer ongoing maintenance services."
              },
              {
                question: "Can I modify or expand my closet system later?",
                answer: "Absolutely! Our modular design approach allows for future modifications and expansions. We maintain detailed records of your installation and can easily add components or reconfigure layouts as your needs change."
              },
              {
                question: "Do you handle permits and building codes?",
                answer: "We handle all necessary permits and ensure compliance with Seattle building codes. Our installations meet all structural and safety requirements, and we coordinate inspections when required."
              },
              {
                question: "What's included in the free consultation?",
                answer: "Your free consultation includes space measurement, needs assessment, preliminary design concepts, material samples, and a detailed quote. There's no obligation, and you'll receive a digital copy of measurements and basic layout options."
              }