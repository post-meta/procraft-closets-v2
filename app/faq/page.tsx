import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - ProCraft Closets Seattle | Custom Closet FAQ',
  description: 'Find answers to common questions about ProCraft Closets custom closet design, installation, pricing, and services in Seattle, WA. Get expert closet solutions.',
  keywords: 'custom closets Seattle FAQ, closet installation questions, closet design pricing Seattle, ProCraft Closets FAQ, Seattle closet company questions',
  openGraph: {
    title: 'ProCraft Closets Seattle FAQ - Your Closet Questions Answered',
    description: 'Get answers to all your custom closet questions from Seattle\'s premier closet design company.',
    url: 'https://procraftclosets.com/faq',
    type: 'website',
  },
  alternates: {
    canonical: 'https://procraftclosets.com/faq',
  },
};

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'services' | 'pricing' | 'process' | 'areas' | 'qualifications' | 'guarantees';
}

const faqData: FAQItem[] = [
  {
    id: 'what-services-does-procraft-offer',
    question: 'What services does ProCraft Closets offer in Seattle?',
    answer: 'ProCraft Closets provides comprehensive custom closet solutions including walk-in closets, reach-in closets, pantry organization systems, home office storage, garage storage solutions, and wardrobe design. We handle everything from initial consultation and 3D design to manufacturing and professional installation throughout the Seattle metropolitan area.',
    category: 'services'
  },
  {
    id: 'how-much-does-custom-closet-cost-seattle',
    question: 'How much does a custom closet cost in Seattle?',
    answer: 'Custom closet costs in Seattle typically range from $1,200 to $5,000 for reach-in closets and $2,500 to $15,000 for walk-in closets. The final price depends on size, materials, accessories, and complexity. ProCraft Closets offers free consultations with detailed pricing estimates tailored to your specific needs and budget.',
    category: 'pricing'
  },
  {
    id: 'what-is-closet-design-process',
    question: 'What is ProCraft Closets design process like?',
    answer: 'Our design process begins with a free in-home consultation where we measure your space and discuss your needs. Next, we create detailed 3D renderings showing your custom closet design. After approval, we manufacture your closet using premium materials and schedule professional installation. The entire process typically takes 3-4 weeks from design approval to completion.',
    category: 'process'
  },
  {
    id: 'areas-served-seattle-closets',
    question: 'What areas around Seattle do you serve?',
    answer: 'ProCraft Closets serves the entire Seattle metropolitan area including Bellevue, Redmond, Kirkland, Bothell, Renton, Federal Way, Tacoma, Everett, Lynnwood, Sammamish, Issaquah, Mercer Island, and surrounding King County and Snohomish County communities. We provide the same high-quality service throughout the Puget Sound region.',
    category: 'areas'
  },
  {
    id: 'procraft-closets-qualifications-certifications',
    question: 'What qualifications and certifications does ProCraft Closets have?',
    answer: 'ProCraft Closets is fully licensed, bonded, and insured in Washington State. Our team includes certified closet designers with over 15 years of experience, and we are members of the National Association of Closet & Storage Professionals. All our installers are background-checked professionals who complete ongoing training on the latest installation techniques.',
    category: 'qualifications'
  },
  {
    id: 'warranty-guarantee-custom-closets',
    question: 'What warranty and guarantees do you offer on custom closets?',
    answer: 'ProCraft Closets provides a comprehensive lifetime warranty on all hardware and a 5-year warranty on craftsmanship and materials. We guarantee 100% satisfaction with our work and offer a 30-day adjustment period after installation. If any issues arise, we will return promptly to make things right at no additional cost.',
    category: 'guarantees'
  },
  {
    id: 'how-long-closet-installation-take',
    question: 'How long does closet installation take?',
    answer: 'Most closet installations are completed in one day. Simple reach-in closets typically take 2-4 hours, while complex walk-in closets may take 6-8 hours. Large master bedroom suites or multiple closet projects may require 1-2 days. We always provide accurate timeframes during your consultation and work efficiently to minimize disruption to your daily routine.',
    category: 'process'
  },
  {
    id: 'materials-used-custom-closets',
    question: 'What materials do you use for custom closets?',
    answer: 'We use premium materials including solid wood, high-grade plywood, and durable melamine finishes. Our hardware features soft-close drawers, adjustable shelving, and commercial-grade hanging rods. All materials are sourced from reputable suppliers and chosen for durability, functionality, and aesthetic appeal to ensure your closet lasts for decades.',
    category: 'services'
  },
  {
    id: 'free-consultation-what-to-expect',
    question: 'What should I expect during the free consultation?',
    answer: 'During your free consultation, our designer will visit your home to measure the space, assess your storage needs, and discuss your style preferences and budget. We will show you material samples, discuss layout options, and answer all your questions. The consultation typically takes 60-90 minutes and you will receive a detailed proposal within 2-3 business days.',
    category: 'process'
  },
  {
    id: 'closet-accessories-available',
    question: 'What closet accessories and features are available?',
    answer: 'ProCraft Closets offers extensive accessories including pull-out shoe racks, jewelry drawers with dividers, tie and belt organizers, LED lighting systems, full-length mirrors, valet rods, hampers, and specialty hangers. We can customize any accessory to match your specific organizational needs and lifestyle preferences.',
    category: 'services'
  },
  {
    id: 'small-closet-organization-solutions',
    question: 'Do you work with small closets and tight spaces?',
    answer: 'Absolutely! ProCraft Closets specializes in maximizing storage in small spaces. We use innovative design techniques like double-hang systems, corner solutions, and space-efficient accessories to dramatically increase storage capacity even in the smallest closets. Many clients are amazed at how much storage we can create in compact areas.',
    category: 'services'
  },
  {
    id: 'payment-options-financing-available',
    question: 'What payment options and financing do you offer?',
    answer: 'We accept cash, check, and all major credit cards. ProCraft Closets also offers flexible financing options with approved credit, including 0% interest plans for qualified customers. We require a 50% deposit to begin manufacturing with the balance due upon completion. We will discuss all payment options during your consultation.',
    category: 'pricing'
  },
  {
    id: 'how-to-prepare-for-installation',
    question: 'How should I prepare for closet installation day?',
    answer: 'Before installation, please remove all items from your closet and clear a path from the entrance to the work area. Our team will handle all necessary prep work including removing old shelving and protecting surrounding areas. We recommend having alternative storage ready for your clothes during the installation day.',
    category: 'process'
  },
  {
    id: 'custom-vs-prefab-closet-systems',
    question: 'What is the difference between custom and prefab closet systems?',
    answer: 'Custom closets are built specifically for your exact space and needs, offering unlimited design possibilities and premium materials. Prefab systems are mass-produced with limited sizes and configurations. Custom closets provide better space utilization, higher quality materials, professional installation, and typically last much longer while adding more value to your home.',
    category: 'services'
  },
  {
    id: 'closet-design-trends-seattle',
    question: 'What are the latest closet design trends in Seattle?',
    answer: 'Current trends in Seattle include integrated LED lighting, mixed materials combining wood and metal, sustainable materials, smart storage solutions, and spa-like finishes. Many clients are requesting charging stations for devices, specialized storage for activewear, and flexible systems that can adapt as needs change over time.',
    category: 'services'
  },
  {
    id: 'timeline-from-consultation-to-completion',
    question: 'What is the typical timeline from consultation to completion?',
    answer: 'The complete process typically takes 4-6 weeks. This includes 1 week for design and approval, 2-3 weeks for manufacturing your custom components, and 1 day for installation. During busy seasons, timelines may extend slightly. We always provide accurate scheduling during your consultation and keep you updated throughout the process.',
    category: 'process'
  },
  {
    id: 'pantry-organization-systems',
    question: 'Do you design pantry organization systems?',
    answer: 'Yes! ProCraft Closets creates custom pantry solutions including adjustable shelving, pull-out drawers, spice racks, wine storage, and specialized containers. We design pantries for maximum efficiency with easy access to all items and can accommodate any pantry size from small reach-in spaces to large walk-in pantries.',
    category: 'services'
  },
  {
    id: 'environmental-sustainability-practices',
    question: 'What environmental and sustainability practices do you follow?',
    answer: 'ProCraft Closets is committed to sustainability through responsible material sourcing, including FSC-certified wood and low-VOC finishes. We minimize waste through precise manufacturing, recycle materials when possible, and design durable systems that last for decades. We also offer eco-friendly material options for environmentally conscious clients.',
    category: 'qualifications'
  },
  {
    id: 'child-safe-closet-design-options',
    question: 'Do you offer child-safe closet design options?',
    answer: 'Absolutely! We prioritize child safety with features like rounded edges, soft-close mechanisms to prevent finger pinching, secure mounting systems, and age-appropriate heights for accessible storage. We can also include growing systems that adjust as children get older and specialized storage for toys, books, and school supplies.',
    category: 'services'
  },
  {
    id: 'home-office-storage-solutions',
    question: 'Can you create home office storage solutions?',
    answer: 'Yes, ProCraft Closets designs comprehensive home office storage including built-in desks, file systems, book storage, supply organization, and technology integration. We create productive workspaces with efficient storage that keeps your office organized and professional-looking while maximizing available space.',
    category: 'services'
  },
  {
    id: 'luxury-closet-features-high-end',
    question: 'What luxury features can you include in high-end closets?',
    answer: 'Our luxury closets can include features like center islands with granite tops, automatic lighting sensors, motorized tie racks, climate control systems, built-in safes, leather-lined jewelry drawers, custom mirror installations, seating areas, and premium hardware finishes. We work with you to create a truly luxurious dressing experience.',
    category: 'services'
  },
  {
    id: 'maintenance-care-custom-closets',
    question: 'How do I maintain and care for my custom closet?',
    answer: 'Custom closets require minimal maintenance. Regular dusting with a soft cloth and occasional cleaning with mild soap and water will keep surfaces looking new. Avoid harsh chemicals and abrasives. We provide detailed care instructions and are always available to answer maintenance questions or provide touch-up services if needed.',
    category: 'guarantees'
  },
  {
    id: 'color-finish-options-available',
    question: 'What color and finish options are available?',
    answer: 'We offer an extensive range of colors and finishes including classic whites, rich wood tones, contemporary grays, and bold accent colors. Finish options include matte, satin, and high-gloss surfaces. We can match existing cabinetry or create custom color combinations. All finishes are durable and resistant to wear and fading.',
    category: 'services'
  },
  {
    id: 'emergency-repairs-service-calls',
    question: 'Do you provide emergency repairs and service calls?',
    answer: 'Yes, ProCraft Closets provides ongoing service support for all our installations. While true emergencies are rare with our quality construction, we offer priority service calls for any issues that may arise. Most problems can be resolved quickly, and we stock common replacement parts to minimize wait times.',
    category: 'guarantees'
  },
  {
    id: 'insurance-claims-closet-damage',
    question: 'Do you work with insurance claims for closet damage?',
    answer: 'Yes, we regularly work with insurance companies for closet repairs and replacements due to water damage, fire, or other covered events. We can provide detailed estimates, work directly with adjusters, and ensure all repairs meet or exceed original specifications. Our documentation helps streamline the insurance process.',
    category: 'qualifications'
  },
  {
    id: 'seasonal-storage-solutions',
    question: 'Can you design seasonal storage solutions?',
    answer: 'Absolutely! We create smart seasonal storage with features like high shelving for out-of-season items, vacuum storage compartments, cedar-lined sections for delicate fabrics, and easily accessible areas for frequently rotated items. Our designs help you efficiently manage seasonal clothing, sports equipment, and holiday items.',
    category: 'services'
  },
  {
    id: 'ada-accessible-closet-design',
    question: 'Do you offer ADA-accessible closet designs?',
    answer: 'Yes, ProCraft Closets designs fully ADA-compliant closets with appropriate reach ranges, accessible hardware, wider aisles, and specialized features for mobility devices. We understand accessibility requirements and create beautiful, functional closets that accommodate wheelchairs, walkers, and other mobility aids while maintaining style and efficiency.',
    category: 'services'
  },
  {
    id: 'rental-property-closet-solutions',
    question: 'Do you work on rental properties and investment homes?',
    answer: 'Yes, we work with property owners and investors to create attractive, durable closet systems that appeal to tenants and add property value. We offer cost-effective solutions that balance quality with investment return and can work with property managers to coordinate installations around tenant schedules.',
    category: 'services'
  },
  {
    id: 'closet-lighting-options-led',
    question: 'What lighting options do you offer for closets?',
    answer: 'We offer comprehensive LED lighting solutions including motion-activated systems, under-shelf lighting, accent lighting, and natural daylight spectrum bulbs. Options include battery-operated systems for easy installation and hardwired systems for permanent solutions. All lighting is energy-efficient and designed to showcase your wardrobe beautifully.',
    category: 'services'
  },
  {
    id: 'virtual-consultations-available',
    question: 'Do you offer virtual consultations and design services?',
    answer: 'Yes, we offer virtual consultations for clients who prefer remote meetings or have scheduling constraints. Using video calls and photo sharing, we can assess your space, discuss needs, and provide initial design concepts. However, we always recommend an in-person visit for final measurements and installation.',
    category: 'process'
  },
  {
    id: 'existing-closet-renovation-upgrades',
    question: 'Can you renovate and upgrade existing closets?',
    answer: 'Absolutely! We frequently renovate existing closets by removing old systems and creating completely new custom solutions. We can work within existing spaces or recommend modifications to improve functionality. Renovations often provide dramatic improvements in storage capacity and organization while updating the overall aesthetic.',