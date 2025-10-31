import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | ProCraft Closets - Seattle Custom Closets',
  description: 'Get answers to common questions about ProCraft Closets custom closet installation, design services, pricing, and process in Seattle, WA. Expert closet solutions since 2015.',
  keywords: 'custom closets FAQ, Seattle closet installation questions, closet design process, closet pricing Seattle, walk-in closets FAQ, reach-in closets',
  openGraph: {
    title: 'ProCraft Closets FAQ - Your Questions Answered',
    description: 'Find answers to all your questions about custom closet design, installation, and services in Seattle. Professional closet solutions tailored to your needs.',
    type: 'website',
    locale: 'en_US',
    siteName: 'ProCraft Closets'
  },
  alternates: {
    canonical: 'https://procraftclosets.com/faq'
  }
}

interface FAQItem {
  question: string
  answer: string
  category: 'services' | 'pricing' | 'process' | 'areas' | 'qualifications' | 'guarantees'
}

const faqData: FAQItem[] = [
  {
    question: "What services does ProCraft Closets offer in Seattle?",
    answer: "ProCraft Closets provides comprehensive custom closet solutions including walk-in closet design and installation, reach-in closets, pantry organization systems, home office storage, garage storage solutions, and closet renovation services throughout the Seattle metro area.",
    category: "services"
  },
  {
    question: "How much does a custom closet cost in Seattle?",
    answer: "Custom closet pricing in Seattle typically ranges from $1,500 to $8,000 depending on size, materials, and features. We offer free in-home consultations to provide accurate estimates based on your specific needs and space requirements.",
    category: "pricing"
  },
  {
    question: "What's included in your design consultation?",
    answer: "Our complimentary design consultation includes measuring your space, discussing your storage needs and lifestyle, reviewing material options, creating a custom design proposal, and providing a detailed quote. This typically takes 60-90 minutes in your home.",
    category: "process"
  },
  {
    question: "Which areas around Seattle do you serve?",
    answer: "We serve the entire Seattle metropolitan area including Bellevue, Redmond, Kirkland, Bothell, Lynnwood, Edmonds, Shoreline, Renton, Kent, Federal Way, Tacoma, and surrounding King County and Snohomish County communities.",
    category: "areas"
  },
  {
    question: "Are your installers licensed and insured?",
    answer: "Yes, ProCraft Closets is fully licensed, bonded, and insured in Washington State. All our installers are experienced professionals who undergo background checks and continuous training to ensure quality workmanship and your peace of mind.",
    category: "qualifications"
  },
  {
    question: "What warranty do you provide on custom closets?",
    answer: "We offer a comprehensive warranty including lifetime warranty on all hardware, 5-year warranty on wood components, and 1-year warranty on installation workmanship. This ensures your investment is protected and your closet will perform beautifully for years to come.",
    category: "guarantees"
  },
  {
    question: "How long does it take to install a custom closet?",
    answer: "Most custom closet installations take 4-6 hours for a standard reach-in closet and 6-8 hours for walk-in closets. Complex designs or multiple closets may require additional time. We'll provide an accurate timeline during your consultation.",
    category: "process"
  },
  {
    question: "Do you offer walk-in closet designs?",
    answer: "Absolutely! We specialize in luxury walk-in closet designs featuring custom shelving, hanging rods, drawers, shoe storage, jewelry organization, islands, seating areas, and lighting solutions. Each design is tailored to maximize your space and storage needs.",
    category: "services"
  },
  {
    question: "What materials do you use for custom closets?",
    answer: "We use high-quality materials including solid wood, engineered wood, melamine, and premium laminates. Popular finishes include white, espresso, natural wood tones, and contemporary colors. All materials are selected for durability and aesthetic appeal.",
    category: "services"
  },
  {
    question: "Can you work with small closet spaces?",
    answer: "Yes, we excel at maximizing small closet spaces! Our designers are experts at creating efficient storage solutions for compact reach-in closets, using vertical space, corner solutions, and multi-functional components to dramatically increase storage capacity.",
    category: "services"
  },
  {
    question: "Do you provide pantry organization systems?",
    answer: "Yes, we design and install custom pantry organization systems with adjustable shelving, pull-out drawers, spice racks, wine storage, and specialized storage for different food items. Our pantries make meal planning and cooking more efficient.",
    category: "services"
  },
  {
    question: "What's the difference between wire and wood closet systems?",
    answer: "Wood systems offer a premium, furniture-quality appearance with solid surfaces and unlimited design options, while wire systems are more budget-friendly and offer good ventilation. We recommend wood systems for their durability, aesthetics, and resale value.",
    category: "services"
  },
  {
    question: "How do I prepare for a closet installation?",
    answer: "Before installation, remove all items from the closet, ensure access to the space is clear, and remove any existing shelving or rods. We'll provide a detailed preparation checklist after your design approval to ensure a smooth installation process.",
    category: "process"
  },
  {
    question: "Can you add lighting to my custom closet?",
    answer: "Yes, we can incorporate LED lighting solutions including closet rods with integrated lighting, shelf lighting, motion-sensor lights, and overhead fixtures. Proper lighting enhances functionality and creates a luxurious closet experience.",
    category: "services"
  },
  {
    question: "Do you offer financing options for closet projects?",
    answer: "We offer flexible financing options to make your custom closet project affordable. This includes 0% interest financing for qualified customers and extended payment plans. We'll discuss financing options during your consultation.",
    category: "pricing"
  },
  {
    question: "What makes ProCraft different from other closet companies?",
    answer: "ProCraft Closets stands out through our personalized design approach, superior craftsmanship, local Seattle expertise, comprehensive warranties, and commitment to customer satisfaction. We're a locally-owned business that takes pride in every installation.",
    category: "qualifications"
  },
  {
    question: "Can you renovate an existing closet system?",
    answer: "Absolutely! We can renovate, upgrade, or completely redesign existing closet systems. This might include adding components, changing layouts, updating finishes, or converting wire systems to premium wood systems while working within your budget.",
    category: "services"
  },
  {
    question: "How far in advance should I schedule my project?",
    answer: "We recommend scheduling 2-3 weeks in advance, though we can often accommodate rush projects. Design consultations can typically be scheduled within a few days, and installation follows 1-2 weeks after design approval and material ordering.",
    category: "process"
  },
  {
    question: "Do you install closet doors?",
    answer: "While we focus on interior closet organization systems, we can recommend trusted partners for closet door installation including sliding doors, bi-fold doors, and barn doors that complement your custom closet design.",
    category: "services"
  },
  {
    question: "What if I'm not satisfied with my closet installation?",
    answer: "Customer satisfaction is our top priority. If you're not completely satisfied, we'll work with you to address any concerns and make necessary adjustments until you're happy with your closet. Your satisfaction is guaranteed.",
    category: "guarantees"
  },
  {
    question: "Can you design closets for children's rooms?",
    answer: "Yes, we create custom closets designed specifically for children with lower hanging rods, accessible shelving, toy storage, and adjustable components that can grow with your child. Safety is always our priority in children's closet designs.",
    category: "services"
  },
  {
    question: "Do you offer same-day consultations?",
    answer: "While we typically schedule consultations a few days in advance, we can often accommodate same-day or next-day appointments for urgent projects. Call us to check availability for expedited consultation scheduling.",
    category: "process"
  },
  {
    question: "What's included in your installation service?",
    answer: "Our installation service includes delivery of materials, professional installation, cleanup of work area, disposal of packaging materials, and a walkthrough to ensure everything meets your expectations. We handle everything from start to finish.",
    category: "process"
  },
  {
    question: "Can you work around my schedule for installation?",
    answer: "We offer flexible scheduling including evenings and weekends to accommodate busy schedules. Most installations can be completed while you're at work, though we recommend being present for the final walkthrough.",
    category: "process"
  },
  {
    question: "Do you provide garage storage solutions?",
    answer: "Yes, we design comprehensive garage storage systems including wall-mounted cabinets, overhead storage, workbenches, sports equipment storage, and seasonal item organization to help you reclaim your garage space.",
    category: "services"
  },
  {
    question: "How do you handle changes to the design after approval?",
    answer: "We understand that sometimes changes are needed. Minor modifications can often be accommodated, though significant changes may affect timeline and pricing. We'll discuss any change requests and provide updated proposals as needed.",
    category: "process"
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, check, all major credit cards, and offer financing options. A deposit is typically required upon design approval, with final payment due upon completion of installation to your satisfaction.",
    category: "pricing"
  },
  {
    question: "Do you offer home office storage solutions?",
    answer: "Yes, we create custom home office storage including built-in desks, filing systems, book storage, supply organization, and multi-functional storage solutions that help create an efficient and organized workspace.",
    category: "services"
  },
  {
    question: "How long have you been serving the Seattle area?",
    answer: "ProCraft Closets has been proudly serving the Seattle metropolitan area since 2015. Our experience with local homes, building styles, and customer preferences helps us deliver exceptional results tailored to Pacific Northwest living.",
    category: "qualifications"
  },
  {
    question: "Can you match existing cabinetry in my home?",
    answer: "Yes, we can match or complement existing cabinetry finishes and styles throughout your home. Our design team works to ensure your new closet system integrates seamlessly with your home's existing aesthetic.",
    category: "services"
  },
  {
    question: "What happens if there are issues after installation?",
    answer: "We stand behind our work with comprehensive warranties and responsive service. If any issues arise, simply contact us and we'll promptly address any problems covered under warranty or provide solutions for your peace of mind.",
    category: "guarantees"
  },
  {
    question: "Do you offer eco-friendly closet options?",
    answer: "Yes, we offer environmentally conscious options including sustainably sourced wood, low-VOC finishes, and recyclable materials. We can discuss eco-friendly alternatives that align with your environmental values during consultation.",
    category: "services"
  },
  {
    question: "Can you design closets for master bedrooms?",
    answer: "Absolutely! We specialize in luxurious master bedroom closets including his and hers sections, jewelry storage, tie and belt organization, shoe displays, handbag storage, and elegant design elements that create a boutique-like experience.",
    category: "services"
  },
  {
    question: "How do you ensure accurate measurements?",
    answer: "Our experienced designers use professional measuring tools and techniques, account for wall irregularities, check for plumb and level, and verify measurements multiple times. This ensures perfect fit and professional installation results.",
    category: "process"
  },
  {
    question: "What if my closet has unusual dimensions?",
    answer: "Custom closets are our specialty! We regularly work with unusual dimensions, angled walls, sloped ceilings, and challenging spaces. Our designers excel at creating solutions that maximize even the most unique closet configurations.",
    category: "services"
  },
  {
    question: "Do you provide organization tips after installation?",
    answer: "Yes, we provide guidance on how to best organize your new closet system, including tips for maintaining organization, seasonal rotation suggestions, and advice on maximizing your storage investment for long-term satisfaction.",
    category: "process"
  },
  {
    question: "Can you install closets in condos and apartments?",
    answer: "Yes, we install custom closets in condos, apartments, and townhomes throughout Seattle. We work with property management requirements when needed and can design systems that enhance rental properties or personal residences.",
    category: "areas"
  },
  {
    question: "What references can you provide from Seattle customers?",
    answer: "We're happy to provide references from satisfied Seattle-area customers and can show you photos of completed projects similar to yours. Many customers also leave reviews on Google, Yelp, and other platforms detailing their experience with ProCraft Closets.",
    category: "qualifications"
  },
  {
    question: "How do you handle multi-closet projects?",
    answer: "For homes needing multiple closet solutions, we offer project coordination and package pricing. We can design and install multiple closets efficiently, often completing several closets in one day or coordinating installations to minimize disruption.",
    category: "process"
  },
  {
    question: "What makes your closet designs functional long-term?",
    answer: "Our designs focus on adaptability with adjustable shelving, modular components, quality hardware, and timeless aesthetics. We consider your lifestyle changes and design systems that remain functional and beautiful for decades."
    , category: "guarantees"
  }
]

const categories = {
  services: "Services & Solutions",
  pricing: "Pricing & Payment",
  process: "Design & Installation Process",
  areas: "Service Areas",
  qualifications: "Company & Qualifications", 
  guarantees: "Warranties & Guarantees"
}

export default function FAQPage() {
  const groupedFAQs = faqData.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = []
    }
    acc[faq.category].push(faq)
    return acc
  }, {} as Record<string, FAQItem[]>)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about ProCraft Closets custom closet design, 
            installation, and services in Seattle, Washington. Can't find what you're looking for? 
            <a href="tel:206-555-0123" className="text-blue-600 hover:text-blue-800 ml-1">
              Call us at (206) 555-0123
            </a>
          </p>
        </header>

        <div className="space-y-12">
          {Object.entries(groupedFAQs).map(([categoryKey, faqs]) => (
            <section key={categoryKey} className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                {categories[categoryKey as keyof typeof categories]}
              </h2>