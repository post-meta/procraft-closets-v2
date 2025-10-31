'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-3xl font-bold text-gray-900">Contact ProCraft Closets</h1>
          <p className="mt-2 text-lg text-gray-600">Get in touch for your custom closet solution</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get In Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 text-blue-600 mr-3">
                    📍
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">Seattle, WA</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 text-blue-600 mr-3">
                    📞
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a href="tel:2065550100" className="text-blue-600 hover:text-blue-800">
                      (206) 555-0100
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 text-blue-600 mr-3">
                    ✉️
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:info@procraftclosets.com" className="text-blue-600 hover:text-blue-800">
                      info@procraftclosets.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Business Hours</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Monday - Friday</span>
                  <span className="text-gray-600">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Saturday</span>
                  <span className="text-gray-600">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Service Areas</h2>
              <div className="grid grid-cols-2 gap-2 text-gray-600">
                <div>• Seattle</div>
                <div>• Bellevue</div>
                <div>• Redmond</div>
                <div>• Kirkland</div>
                <div>• Bothell</div>
                <div>• Lynnwood</div>
                <div>• Renton</div>
                <div>• Tacoma</div>
                <div>• Federal Way</div>
                <div>• Sammamish</div>
                <div>• Issaquah</div>
                <div>• Mercer Island</div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Location</h2>
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-sm">Seattle, WA Service Area</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us about your closet project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-400 disabled:cursor-not-allowed transition duration-200"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <div className="mt-6 text-sm text-gray-500">
              <p>* Required fields</p>
              <p className="mt-2">
                We typically respond within 24 hours. For urgent matters, please call us directly at{' '}
                <a href="tel:2065550100" className="text-blue-600 hover:text-blue-800">
                  (206) 555-0100
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}